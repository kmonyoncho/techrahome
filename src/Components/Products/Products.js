import React from "react";
import { Grid } from "@material-ui/core";
import { product } from "prelude-ls";

const products = [
  { id: 1, name: "Shoes", Description: "Running Shoes" },
  { id: 2, name: "Macbook", Description: "Apple Macbook Pro" },
  {
    id: 3,
    name: "Samsung Galaxy A7",
    Description: "Brand New Samsung Phone 128gb 4gb RAM",
  },
  {
    id: 4,
    name: "HP Laptop Probook 450 G4",
    Description: "Hp Probook 450 G4 Laptop Brand new",
  },
];
const Products = () => {
  <main>
    <Grid container justify="center" spacing={4}>
      {products.map((products) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Product />
        </Grid>
      ))}
    </Grid>
  </main>;
};

export default Products;
