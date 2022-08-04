const dbConfig = require("./db.config.js");
const mongoose = require("mongoose");

mongoose.connect(`mongodb+srv://${dbConfig.USERNAME}:${dbConfig.PASSWORD}@tendencys.lr0ntjr.mongodb.net/?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

module.exports = db;