import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import useContractInstance from "../hooks/useContractInstance";
import { Contract } from "ethers";
import ABI from "../ABI/proposal.json";
import useSignerOrProvider from "../hooks/useSignerOrProvider";

const ProposalContext = createContext({
  Proposals: [],
});

export const ProposalContextProvider = ({ children }) => {
  const [Proposals, setProposals] = useState([]);
  const readOnlyProposalContract = useContractInstance();
  const { readOnlyProvider } = useSignerOrProvider();

  const formatEnum = (value) => {
    const status = Number(value);
    switch (status) {
      case 0:
        return "None";
      case 1:
        return "Created";
      case 2:
        return "Pending";
      case 3:
        return "Accepted";
      default:
        return "Unknown";
    }
  };

  const getProposals = useCallback(async () => {
    if (!readOnlyProposalContract) return;

    try {
      const data = await readOnlyProposalContract.getAllProposals();
      const formattedProposals = data.map((Proposal) => ({
        title: Proposal.name,
        description: Proposal.description,
        voteCounts: Proposal.voteCount,
        quorum: Proposal.quorum,
        status: formatEnum(Proposal.status),
      }));
      setProposals(formattedProposals);
    } catch (error) {
      console.log("Error fetching Proposals", error);
    }
  }, [readOnlyProposalContract]);

  useEffect(() => {
    getProposals();
  }, [getProposals]);

  // Updating list of Proposals on Proposal creation
  const ProposalListUpdateHandler = useCallback(
    (title, description, voteCounts, quorum, status) => {
      setProposals((prevState) => [
        ...prevState,
        { title, description, voteCounts, quorum, status: formatEnum(status) },
      ]);
    },
    []
  );

  useEffect(() => {
    const contract = new Contract(
      import.meta.env.VITE_Proposal_CONTRACT_ADDRESS,
      ABI,
      readOnlyProvider
    );
    contract.on("ProposalCreated", ProposalListUpdateHandler);
    return () => {
      contract.off("ProposalCreated", ProposalListUpdateHandler);
    };
  }, [ProposalListUpdateHandler, readOnlyProvider]);

  // proposal status update
  const ProposalStatusHandler = useCallback((index, status) => {
    setProposals((prevState) => {
      const updatedProposals = [...prevState];
      updatedProposals[Number(index)] = {
        ...updatedProposals[Number(index)],
        status: formatEnum(status),
      };
      return updatedProposals;
    });
  }, []);

  useEffect(() => {
    const contract = new Contract(
      import.meta.env.VITE_Proposal_CONTRACT_ADDRESS,
      ABI,
      readOnlyProvider
    );
    contract.on("ProposalApproved", ProposalStatusHandler);
    return () => {
      contract.off("ProposalApproved", ProposalStatusHandler);
    };
  }, [ProposalStatusHandler, readOnlyProvider]);

  // vote on a Proposal
  const ProposalVoteHandler = useCallback((index, status) => {
    setProposals((prevState) => {
      const updatedProposals = [...prevState];
      updatedProposals[Number(index)] = {
        ...updatedProposals[Number(index)],
        votesCounts: status,
      };
      return updatedProposals;
    });
  }, []);

  useEffect(() => {
    const contract = new Contract(
      import.meta.env.VITE_Proposal_CONTRACT_ADDRESS,
      ABI,
      readOnlyProvider
    );
    contract.on("ProposalActive", ProposalVoteHandler);
    return () => {
      contract.off("ProposalActive", ProposalVoteHandler);
    };
  }, [ProposalVoteHandler, readOnlyProvider]);

  return (
    <ProposalContext.Provider value={{ Proposals }}>
      {children}
    </ProposalContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useProposal = () => {
  const context = useContext(ProposalContext);
  return context;
};
