import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Table,
  Text,
  Th,
  Tr,
  Thead,
  TableContainer,
  Td,
  Tfoot,
  Tbody,
  TableCaption,
  Stack,
  Flex,
  Spacer,
  Center,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import "./App.css";
import RecipeList from "./components/RecipeList";

function App() {
  const [dish, setDish] = useState();
  const [firstLetter, setFirstLetter] = useState();
  const [name, setName] = useState();

  const getDishes = async () => {
    try {
      const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          credentials: true,
        },
      };
      const { data } = await axios.get(
        `http://localhost:5000/getData/${firstLetter}`
      );
      setDish(data);
      console.log(data);
    } catch (error) {}
  };

  const handleClick = async () => {
    await setFirstLetter(name[0]);
    getDishes();
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };
  console.log();
  return (
    <>
      <Box className="App-header">
        <Box border="10px" className="AlignText">
          <Heading className="AlignText" as="h1" size="2xl">
            What Should I Bring?
          </Heading>
          <Text fontSize="2xl" m={2} p={5}>
            Going to a 'bring a dish that starts with the first letter of your
            name' themed potluck and don't know what to bring?
          </Text>
        </Box>

        <FormControl p={5} m={2} isRequired>
          <FormLabel> Your Name</FormLabel>
          <Input type="text" size="sm" id="name" onChange={handleChange} />
          <Button
            size="md"
            height="30px"
            width="100px"
            border="2px"
            colorScheme={"blue"}
            marginTop="4px"
            onClick={handleClick}
          >
            Submit
          </Button>
        </FormControl>
        <Flex direction={["column", "row"]} spacing="24px" m="2px" p="2px">
          <Center w="20%" h="40px">
            Dish Name
          </Center>
          <Spacer />
          <Center w="20%" h="40px">
            Description
          </Center>
          <Spacer />
          <Center w="20%" h="40px">
            Full Recipe
          </Center>
        </Flex>
        <RecipeList></RecipeList>
      </Box>
    </>
  );
}
export default App;
