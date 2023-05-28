const express = require("express");
const cors = require("cors");
const app = express();
const products = require("./data/products");
const brands = require("./data/brands");
const category = require("./data/category");
const specialoffers = require("./data/special-offers");
app.use(express.json());
app.use(cors());

app.get("/" , (req , res)=>{
  res.send("welcome to our online shop api.. ");
});

app.get("/products" , (req , res)=>{
  res.send(products);
});


app.get("/products/:id" , (req , res)=>{

  let oneProduct = products.find((item)=>{
  return  item.id  == req.params.id
  })

res.send(oneProduct)

})



app.get("/brands" , (req , res)=>{
  res.send(brands);
});



app.get("/category" , (req , res)=>{
  res.send(category);
});




app.get("/specialoffers" , (req , res)=>{
  res.send(specialoffers);
});






const port = process.env.PORT || 5000;
app.listen(port , console.log(`http://localhost:${port}`));


