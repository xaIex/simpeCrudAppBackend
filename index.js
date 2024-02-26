const express = require('express')
// Using Node.js `require()`
const mongoose = require('mongoose');
const Product = require('./models1/product.models1.js');//getting our model from mongo
const productRoute = require("./routes/product.route.js");
const app = express()

app.use(express.json()); // middleware
app.use(express.urlencoded({exteneded: false}));//middleware

// routes
app.use("/api/products", productRoute);

app.get('/', (req, res) =>{
    res.send("hello from node API change1"); // response coming from node API
});


mongoose.connect("mongodb+srv://xcastillo2001:DEX0noScEQPCvP3O@cluster0.gv58q7l.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0")
.then(() =>{
    console.log("connected to database");
    app.listen(3000, () =>{
        console.log('server is running on port 3000');
    });
})
.catch(() => {
    console.log("not connected bud");
})


