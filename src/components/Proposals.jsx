import { Text } from "@radix-ui/themes";
import { useProposal } from "../context/proposalContext";
import Proposal from "./Proposal";

const Proposals = () => {
  const { Proposals } = useProposal();

  return (
    <div className="w-full flex items-start flex-col gap-4">
      <Text as="h1" className="text-3xl font-semibold text-blue-600">
        My Proposals
      </Text>
      <section className="w-full grid lg:grid-cols-3 md:grid-cols-2 md:gap-6 gap-4">
        {Proposals.length === 0 ? (
          <Text as="h1" className="text-2xl font-medium text-stone-200">
            There are no available proposals
          </Text>
        ) : (
          Proposals.map((proposal, index) => (
            <Proposal key={index} Proposal={proposal} index={index} />
          ))
        )}
      </section>
    </div>
  );
};

export default Proposals;
