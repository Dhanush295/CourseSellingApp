const express = require("express");
const app = express();
const adimnroutes = require("./routes/admin")

app.use(express.json());

app.use('/admin', adimnroutes);


app.listen(3000, ()=> console.log("Server listening on port 3000 "));