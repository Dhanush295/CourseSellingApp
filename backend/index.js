const express = require("express");
const app = express();
const adimnroutes = require("./routes/admin");
const userroutes = require("./routes/users");
const { default: mongoose } = require("mongoose");
const cors = require("cors")

app.use(cors());
app.use(express.json());
app.use('/admin', adimnroutes);
app.use('/users', userroutes);


mongoose
    .connect('mongodb url', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'course'
    })
    .then(() => {
        console.log('Database connected');
    })
    .catch((error) => {
        console.error('Database connection error:', error);
    });


app.listen(3000, ()=> console.log("Server listening on port 3000 "));
