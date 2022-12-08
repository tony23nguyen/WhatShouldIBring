const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const path = require("path");

const app = express();

app.use(
  "/api",
  createProxyMiddleware({
    target: "https://www.themealdb.com/",
    changeOrigin: true,
  })
);

const __dirname1 = path.resolve();

app.use(express.static(path.join(__dirname1, "/build")));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname1, "/build"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Server listening on ${port}`);
