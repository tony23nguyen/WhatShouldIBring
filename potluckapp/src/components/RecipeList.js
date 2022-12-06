import { Box, Center, Flex, Spacer } from "@chakra-ui/react";
import { React, useState } from "react";
import axios, { AxiosError } from "axios";

const RecipeList = () => {
  const [dish, setDish] = useState();
  const [firstLetter, setFirstLetter] = useState();

  const getDishes = async () => {
    const { data } = await axios.get(
      "www.themealdb.com/api/json/v1/1/search.php?f=a",
      firstLetter
    );
    setDish(data);
  };
  return (
    <>
      <Flex>
        <Center>Tacos</Center>
        <Spacer></Spacer>

        <Center></Center>

        <Spacer></Spacer>

        <Center></Center>
      </Flex>
    </>
  );
};

export default RecipeList;
