import { Button, Heading, List, ListItem } from "@chakra-ui/react";
import useData from "./hooks/useData";

const ContactList = ({ childToParent }: any) => {
  const { data } = useData();

  return (
    <>
      <List>
        <Heading padding="10px 0px">Contacts</Heading>
        {data?.map((contact) => (
          <ListItem key={contact.id}>                                 
            <Button color='blackAlpha.700' bg="#F5F5F5" marginBottom="10px" onClick={() => childToParent(contact.id)}>
              {contact.name}
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ContactList;
