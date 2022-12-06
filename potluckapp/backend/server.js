const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const PORT = 5000;
const app = express();

//allows access from a port
app.use(cors());
const corsOptions = {
  origin: "http://localhost:3000",
};

//end point of request
const requestEndpoint = `http://themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`;

app.get("/getData/", cors(corsOptions), async (req, res) => {
  const fetchOptions = {
    method: "GET",
  };
  const response = await fetch(requestEndpoint, fetchOptions);
  const data = await response.json();

  let recipes = {};
  data.meals.forEach(function (item) {
    recipes[item.idMeal] = item.strMeal;
  });
  res.json(recipes);
});

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
