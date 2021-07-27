import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";

const products = [
  {
    id: 1,
    name: "Shoes",
    Description: "Running Shoes",
    price: "$25",
    image:
      "https://www.eatthis.com/wp-content/uploads/2021/06/slow-man-shoes.jpg",
  },
  {
    id: 2,
    name: "Macbook",
    Description: "Apple Macbook Pro",
    price: "$250",
    image: "https://cdn.mos.cms.futurecdn.net/KhPnpYcKr3i2fMkWRKBKch.jpg",
  },
  {
    id: 3,
    name: "Samsung Galaxy A7",
    Description: "Brand New Samsung Phone 128gb 4gb RAM",
    price: "$120",
    image:
      "https://mobitrends.co.ke/wp-content/uploads/2019/03/Samsung-Galaxy-A7-Kenya.jpg",
  },
  {
    id: 2,
    name: "Macbook",
    Description: "Apple Macbook Pro",
    price: "$250",
    image: "https://cdn.mos.cms.futurecdn.net/KhPnpYcKr3i2fMkWRKBKch.jpg",
  },
  {
    id: 4,
    name: "Samsung Galaxy A7",
    Description: "Brand New Samsung Phone 128gb 4gb RAM",
    price: "$120",
    image:
      "https://mobitrends.co.ke/wp-content/uploads/2019/03/Samsung-Galaxy-A7-Kenya.jpg",
  },
  {
    id: 5,
    name: "HP Laptop Probook 450 G4",
    Description: "Hp Probook 450 G4 Laptop Brand new",
    price: "$450",
    image:
      "https://mcphilipsdigital.co.ke/wp-content/uploads/2020/06/1579023467000_IMG_1302959.jpg",
  },
  {
    id: 1,
    name: "Shoes",
    Description: "Running Shoes",
    price: "$25",
    image:
      "https://www.eatthis.com/wp-content/uploads/2021/06/slow-man-shoes.jpg",
  },
  {
    id: 5,
    name: "HP Laptop Probook 450 G4",
    Description: "Hp Probook 450 G4 Laptop Brand new",
    price: "$450",
    image:
      "https://mcphilipsdigital.co.ke/wp-content/uploads/2020/06/1579023467000_IMG_1302959.jpg",
  },
];
const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
