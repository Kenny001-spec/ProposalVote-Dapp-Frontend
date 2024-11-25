import {
  Button,
  Dialog,
  Flex,
  Text,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import React, { useState } from "react";
import useCreateProposal from "../hooks/useCreateProposal";

const CreateProposalModal = () => {
  const handleCreateNewProposal = useCreateProposal();
  const [fields, setFields] = useState({
    title: "",
    description: "",
  });

  const handleChange = (name, e) => {
    setFields((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const { title, description, quorum } = fields;

  const handleSubmit = async () => {
    await handleCreateNewProposal(title, description, quorum);
    setFields({ title: "", description: "", quorum: "" });
  };

  return (
    <div className="w-full flex justify-end">
      <Dialog.Root>
        <Dialog.Trigger>
          <Button color="blue">Create Proposal</Button>
        </Dialog.Trigger>

        <Dialog.Content maxWidth="450px">
          <Dialog.Title>New Proposal</Dialog.Title>
          <Dialog.Description size="2" mb="4">
            Create A New Proposal Here.
          </Dialog.Description>

          <Flex direction="column" gap="3">
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Proposal Title
              </Text>
              <TextField.Root
                placeholder="Enter title"
                value={title}
                onChange={(e) => handleChange("title", e)}
              />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Proposal Description
              </Text>
              <TextArea
                placeholder="Enter description"
                value={description}
                onChange={(e) => handleChange("description", e)}
              />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Proposal Quorum
              </Text>
              <TextField.Root
                placeholder="Enter quorum"
                value={quorum}
                type="number"
                onChange={(e) => handleChange("quorum", e)}
              />
            </label>
          </Flex>

          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button onClick={handleSubmit}>Submit</Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
};

export default CreateProposalModal;
