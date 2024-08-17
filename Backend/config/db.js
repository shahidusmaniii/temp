const mongoose = require("mongoose");
// const config = require('config');
// const db = config.get('mongoURI');
const db = process.env.DB;


function connectDB() {
      mongoose.set('strictQuery', false);
      mongoose.connect(db)
      .then(() => {
            console.log("Successfully Connected to the DB");
      })
      .catch((err) => {
            console.log("Error Occured at DB connection", err);
      });
}
    


module.exports = connectDB;