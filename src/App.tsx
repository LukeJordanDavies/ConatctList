import ContactList from "./ContactList";
import { Box, Grid, GridItem, HStack, Heading } from "@chakra-ui/react";
import { TiContacts } from "react-icons/Ti";
import ContactCard from "./ContactCard";
import { useState } from "react";


function App() {
  const [selected, setSelected] = useState(1);

  const childToParent = (childData: any) => {
    setSelected(childData);
  }
  
  return (
    <Grid
      templateAreas={`"header header"
                    "nav main"`}
      gridTemplateRows={"62px 1fr"}
      gridTemplateColumns={"250px 1fr"}
      gap="1"
      color="#606778"
      fontWeight="bold"
    >
      <GridItem bg="#D6D4CE" area={"header"}>
        <Box>
          <HStack justifyContent={"center"}>
            <TiContacts color='#606778' size={42} />
            <Heading color='#606778' paddingY={"10px"}>Phone Book</Heading>
          </HStack>
        </Box>
      </GridItem>
      <GridItem h="100vh" bg="#EDEBE5" area={"nav"}>
        <ContactList childToParent={childToParent}/>
      </GridItem>
      <GridItem h="100vh" bg="#F5F5F5" area={"main"}>
        <ContactCard selected={selected}/>
      </GridItem>
    </Grid>
  );
}

export default App;
