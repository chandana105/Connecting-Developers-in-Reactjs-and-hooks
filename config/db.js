// to do mongodb connection, to bring in mongoose that we r actully using to conenct

// MONGOOSE
const mongoose = require('mongoose');

// to get config
const config = require('config');

// to get the url from config file
const db = config.get('mongoURI');

// to connect to mongodb
// mongoose.connect(db); //this ll retrun a promise lets do by async/await

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    // for that to exit from the process failure
    process.exit(1);
  }
};



module.exports = connectDB;
