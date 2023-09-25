const express = require('express');
const path = require('path'); // Import the 'path' module

const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);

const app = express();
const port = 4444;
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors')


const cookieParser = require('cookie-parser');
const db = require('./config/mongoose');

const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const passportJWT = require('./config/passport-jwt-strategy');


const mongoStore = new MongoStore({
    mongooseConnection: mongoose.connection, // Assuming you have a mongoose connection
    collection: 'sessions', // Collection name for sessions
  });
  
  app.use(
    session({
      secret: 'param', // Replace with a strong secret key
      resave: false,
      saveUninitialized: false,
      store: mongoStore, // Use the MongoStore for session storage
    })
  );

dotenv.config()

app.use("/", require("./routes/index"));

app.use(
    cors({
        origin: "http://localhost:5173",
    })
);
app.use(express.json());
app.use(helmet());
app.use(morgan("common"))

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB Successfully!"))
.catch(err => console.log("Error in connecting to MongoDB"));


app.listen(port, function(err){
    if (err){
        console.log("error in server running",err);
    }

    console.log("server is running",port);
});
