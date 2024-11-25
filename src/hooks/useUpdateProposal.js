import { useCallback } from "react";
import useContractInstance from "./useContractInstance";
import { useAppKitAccount, useAppKitNetwork } from "@reown/appkit/react";
import { baseSepolia } from "@reown/appkit/networks";

const useUpdatePropsal = () => {
  const contract = useContractInstance(true);
  const { address } = useAppKitAccount();
  const { chainId } = useAppKitNetwork();

  return useCallback(
    async (index, title, description) => {
      if (!title || !description) {
        toast.error("Title and description are required");
        return;
      }

      if (!address) {
        toast.error("Please connect your wallet");
        return;
      }

      if (!contract) {
        toast.error("Contract not found");
        return;
      }

      if (Number(chainId) !== Number(baseSepolia.id)) {
        toast.error("You're not connected to baseSepolia");
        return;
      }

      try {
        const estimatedGas = await contract.updatePropsal.estimateGas(
          index,
          title,
          description
        );

        const tx = await contract.updatePropsal(index, title, description, {
          gasLimit: (estimatedGas * BigInt(120)) / BigInt(100),
        });

        const receipt = await tx.wait();

        if (receipt.status === 1) {
          toast.success("Propsal updated successfully");
          return;
        }

        toast.error("Failed to update Propsal");
        return;
      } catch (error) {
        console.error("Error from updating Propsal", error);
        toast.error("Failed to update Propsal");
      }
    },
    [contract, address, chainId]
  );
};

export default useUpdatePropsal;
