import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import useData from "./hooks/useData";
import { IoMdContact } from "react-icons/Io";
import Line from "./Line";

interface Props {
  selected: number;
}

const ContactCard = ({ selected }: Props) => {
  const { data } = useData();

  return (
    <Box boxSize={"100%"} padding={"5%"}>
      {data?.map(
        (info) =>
          selected === info.id && (
            <div key={info.id}>
              <VStack>
                <IoMdContact color="#606778" size="128px" />
                <Heading marginBottom={'64px'}>{info.name}</Heading>
              </VStack>
              <div>
                <Text>Phone:</Text>
                <Text>{info.phone}</Text>
                <Line />
              </div>
              <div>
                <Text>Email:</Text>
                <Text>{info.email}</Text>
                <Line />
              </div>
              <div>
                <Text>Address:</Text>
                <Text>{info.address.suite}</Text>
                <Text>{info.address.street}</Text>
                <Text>{info.address.city}</Text>
                <Text>{info.address.zipcode}</Text>
              </div>
            </div>
          )
      )}
    </Box>
  );
};

export default ContactCard;
