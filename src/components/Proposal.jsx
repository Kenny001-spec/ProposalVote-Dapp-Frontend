import {
  AlertDialog,
  Box,
  Button,
  Card,
  Dialog,
  Flex,
  Text,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import { useState } from "react";
import useUpdateProposal from "../hooks/useUpdateProposal";
import useDeleteProposal from "../hooks/useDeleteProposal";
import useVoteOnProposal from "../hooks/useVoteOnProposal";

const Proposal = ({ Proposal, index }) => {
  const handleProposalEdit = useUpdateProposal();
  const handleDeleteProposal = useDeleteProposal();
  const handleProposalVote = useVoteOnProposal();

  const { title, description, voteCounts, quorum, status } = Proposal;

  console.log(voteCounts, quorum);

  const [newFields, setNewFields] = useState({
    newtitle: title || "",
    newdescription: description || "",
  });

  const handleChange = (name, e) => {
    setNewFields((prevState) => ({ ...prevState, [name]: e.target.value }));
  };
  const { newtitle, newdescription } = newFields;

  // Method for updating Proposal
  const handleUpdate = (value) => {
    const index = Number(value);
    handleProposalEdit(index, newtitle, newdescription);
    setNewFields({
      newtitle,
      newdescription,
    });
  };

  // Method for deleting a Proposal
  const handleDelete = (value) => {
    const index = Number(value);
    handleDeleteProposal(index);
  };

  // Method for completing a Proposal
  const handleDone = (value) => {
    const index = Number(value);
    handleProposalVote(index);
  };

  return (
    <Box className="w-full">
      <Card variant="surface">
        <Flex direction={"column"} gap={6}>
          <Text as="div" size="2" weight="bold">
            Title:
          </Text>
          <Text as="div" color="gray" size="2">
            {title}
          </Text>
          <Text as="div" size="2" weight="bold">
            Description:
          </Text>
          <Text as="div" color="gray" size="2">
            {description}
          </Text>
          <Text as="div" size="2" weight="bold">
            Vote Count: {Number(voteCounts)}
          </Text>
          {/* <Text as="div" color="gray" size="2">
            {Number(voteCounts)}
          </Text> */}
          <Text as="div" size="2" weight="bold">
            Quorum: {Number(quorum)}
          </Text>
          {/* <Text as="div" color="gray" size="2">
            {Number(quorum)}
          </Text> */}
          <Text as="div" size="2" weight="bold">
            Status: {status}
          </Text>
          {/* <Text as="div" color="gray" size="2">
            {status}
          </Text> */}
        </Flex>

        <div className="w-full flex justify-start mt-4 items-center gap-4">
          {/* Complete Alert */}

          <AlertDialog.Root>
            {status === "Created" || "Pending" && (
              <AlertDialog.Trigger>
                <Button color="blue" className="cursor-pointer">Vote</Button>
              </AlertDialog.Trigger>
            )}
            <AlertDialog.Content maxWidth="450px">
              <AlertDialog.Title>Vote Proposal</AlertDialog.Title>
              <AlertDialog.Description size="2">
                Are you sure you&apos;ve vote on this proposal ?
              </AlertDialog.Description>

              <Flex gap="3" mt="4" justify="end">
                <AlertDialog.Cancel>
                  <Button variant="soft" color="gray">
                    Cancel
                  </Button>
                </AlertDialog.Cancel>
                <AlertDialog.Action>
                  <Button
                    onClick={() => handleDone(index)}
                    variant="solid"
                    color="blue"
                  >
                    Continue
                  </Button>
                </AlertDialog.Action>
              </Flex>
            </AlertDialog.Content>
          </AlertDialog.Root>
        </div>
      </Card>
    </Box>
  );
};

export default Proposal;
