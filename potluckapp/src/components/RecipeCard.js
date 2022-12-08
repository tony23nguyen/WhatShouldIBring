import React from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  List,
  ListItem,
  Image,
  Link,
  Stack,
  Button,
  Grid,
} from "@chakra-ui/react";

function RecipeCard({ meals }) {
  if (meals) {
    console.log(meals);
    return (
      <Grid
        // justifyContent="center"
        // alignItems="center"
        gridTemplateColumns={["1fr", "1fr", "1fr 1fr", "1fr 1fr 1fr"]}
        fontSize={["24px", "24px", "24px", "24px"]}
        justifyContent="center"
        alignContent={"center"}
        ml="50px"
      >
        {meals.map((meal) => (
          <Box
            key={meal.idMeal}
            // maxW="lg"
            borderWidth="1px"
            rounded="lg"
            // overflow="hidden"
            width={["95%", "80%", "80%", "85%"]}
            m="5px"
            p="5px"
          >
            <Image src={meal.strMealThumb} alt={meal.strMeal} />

            <Box p="2">
              <Heading fontSize="xl" mb="1">
                {meal.strMeal}
              </Heading>

              <Text fontSize="sm">{meal.strArea}</Text>

              <Flex mt="1" align="center">
                <List
                  styleType="disc"
                  // ml="2"
                  mt={"2px"}
                  style={{ listStylePosition: "inside" }}
                >
                  {Object.keys(meal)
                    .filter(
                      (key) =>
                        key.startsWith("strIngredient") && meal[key] !== ""
                    )
                    .map((key) => (
                      <ListItem key={key}>
                        {meal[key]}:{" "}
                        {meal[key.replace("Ingredient", "Measure")]}
                      </ListItem>
                    ))}
                </List>
              </Flex>
            </Box>

            <Link
              p="6"
              fontWeight="bold"
              color="blue.500"
              href={meal.strSource ? meal.strSource : meal.strYoutube}
              target="_blank"
            >
              View Full Recipe
            </Link>
          </Box>
        ))}
      </Grid>
    );
  }
}

export default RecipeCard;
