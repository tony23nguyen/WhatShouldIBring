import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Flex,
  Spacer,
  Center,
} from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import RecipeCard from "./components/RecipeCard";

function App() {
  const [meals, setMeals] = useState();
  const [firstLetter, setFirstLetter] = useState(0);
  const [name, setName] = useState(0);

  //for deployment
  const endPoint = "https://whatshouldibring.onrender.com";

  //for testing
  //const endPoint = "http://localhost:5000";

  const getDishes = async () => {
    try {
      const response = await axios.get(
        `${endPoint}/api/json/v1/1/search.php?f=${firstLetter}`
      );

      setMeals(response.data);
    } catch (error) {}
  };

  const getRandom = async () => {
    try {
      const response = await axios.get(`${endPoint}/api/json/v1/1/random.php`);

      setMeals(response.data);
    } catch (error) {}
  };

  const handleClick = async () => {
    await getDishes();
  };

  // useEffect(() => {
  //   // Check if meals is defined
  //   if (meals) {
  //     // Log the value of meals.meals
  //     console.log(meals.meals);
  //   }
  // }, [meals]);

  const handleChange = (event) => {
    setName(event.target.value);
    setFirstLetter(name[0]);
  };
  return (
    <>
      <Box
        className="App-header"
        display={"flex"}
        flexDirection="column"
        justifyContent={"center"}
        alignItems="center"
      >
        <Box>
          <Heading className="AlignText" as="h1" size="2xl" p={10}>
            What Should I Bring?
          </Heading>
          <Text fontSize="xl" m={2} p={10} className="AlignText">
            If you're attending a potluck with a fun "bring a dish that starts
            with the first letter of your name" theme, you may be wondering what
            to bring. There are many delicious and creative dishes you can
            prepare that will fit the theme and impress your fellow potluckers.
            Here are a few ideas to get you started:
          </Text>
        </Box>

        <FormControl
          p={5}
          display="flex"
          flexDirection={"column"}
          justifyContent="center"
          w={["60%"]}
          isRequired
        >
          <FormLabel> Your Name</FormLabel>
          <Input type="text" size="sm" id="name" onChange={handleChange} />
          <Box flexDirection={"row"}>
            <Button
              size="md"
              height="30px"
              width="100px"
              border="2px"
              colorScheme={"blue"}
              marginTop="4px"
              onClick={handleClick}
              m="5px"
            >
              Get Meals
            </Button>
            <Button
              size="md"
              height="30px"
              width="100px"
              border="2px"
              colorScheme={"blue"}
              marginTop="4px"
              onClick={getRandom}
              m="5px"
            >
              Suprise Me
            </Button>
          </Box>
        </FormControl>
        {meals && (
          <>
            <RecipeCard meals={meals && meals.meals} />
          </>
        )}
      </Box>
    </>
  );
}
export default App;
