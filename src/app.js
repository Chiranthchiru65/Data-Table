const axios = require("axios");
const fs = require("fs");

const url = "https://dummyjson.com/users";

axios
  .getAdapter(url)
  .then((Response) => {
    const data = Response.data;

    fs.writeFileSync("data.json"); // need to complete
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
