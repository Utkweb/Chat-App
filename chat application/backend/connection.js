// to connect with database
const mongoose = require("mongoose");
const api_config = require("./config");
const url = api_config.dbUrl;

mongoose
  .connect(url)
  .then(() => {
    console.log("connect to database");
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = mongoose;
