const express = require('express');
// const path = require('path'); // Import the 'path' module

const mongoose = require('mongoose');

const app = express();
const port = 4444;
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors')
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB Successfully!"))
.catch(err => console.log("Error in connecting to MongoDB"));



dotenv.config()


app.use(
    cors({
        origin: "http://localhost:5173",
    })
    );
app.use("/", require("./routes/index"));

app.use(express.json());
app.use(helmet());
app.use(morgan("common"))





app.listen(port, function(err){
    if (err){
        console.log("error in server running",err);
    }

    console.log("server is running",port);
});
