const express = require("express");
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
app.use(express.json());


const usersRoute = require("./routes/usersRoute");

app.use("/api/users", usersRoute);

const port = process.env.PORT || 5008;

const path = require("path");
__dirname = path.resolve();


// render deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}





app.listen(port, () =>
  console.log(`Node JS Server is running on port ${port}`)
);
