import React, { useState,useCallback } from "react";
import { Grid, InputAdornment, Input, Button, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Product from "./Product/Product.js";
import useStyles from "./styles";
import Carousel from "react-bootstrap/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import logo1 from "../../assets/2.jpeg";
import logo2 from "../../assets/4.jpeg";
import logo3 from "../../assets/3.jpeg";
import { Link } from "react-router-dom";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import { Tab } from "bootstrap";
import Navbar from "../Navbar/Navbar.js";

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  const [searchTerm, setSearchTerm] = useState("");


  //funtion use to apply filter while search 
  const handleSearch = useCallback((value)=>{
    setSearchTerm(value)
  },[])




  return (
    <main className={classes.content} >
      <div className={classes.toolbar} />
      <Carousel fade infiniteLoop useKeyboardArrows autoPlay>
        <Carousel.Item>
          <img className="d-block w-100" src="https://wpbingosite.com/wordpress/bookio/wp-content/webp-express/webp-images/uploads/2021/08/slider1-2.jpg.webp" alt=" slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://htmldemo.net/koparion/koparion/img/slider/1.jpg" alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="	https://htmldemo.net/koparion/koparion/img/slider/14.jpg" alt="Second slide" />
    
        </Carousel.Item>
      </Carousel>

    
    
      <Navbar handleSearch = {handleSearch}/>


     {/* section show all the book data which are Now Trending*/}
      <div className="row">
      <h1 className="text-center mt-4 text-bold pb-4 pt-2 fa bg-danger text-white">Now Trending</h1>
      <div className="col-md-12 px-5">
        <div className="row">
        {products
          ?.slice(0,4)
          ?.map((product) => (
          <div className="col-md-3 col-lg-3 col-sm-12">
                      <Product product={product} onAddToCart={onAddToCart} />
    
          </div>
                    ))}
        </div>
      </div>
     </div>
    
     {/* section show all the book data which are New Arrivals*/}

     <div className="row">
      <h1 className="text-center mt-4  pb-4 pt-2 fa bg-danger text-white">New Arrivals</h1>
      <div className="col-md-12 px-5">
        <div className="row">
        {products
          ?.slice(5,9)
          ?.map((product) => (
          <div className="col-md-3 col-lg-3 col-sm-12">
                      <Product product={product} onAddToCart={onAddToCart} />
    
          </div>
                    ))}
        </div>
      </div>
     </div>


{/* section show all the book data which are Our Collection */}
     
      <h1 className="text-center mt-4 fa col-12 pb-4 pt-2 bg-danger text-white">Our Collection</h1>
      <Grid className={classes.content} container justify="center" spacing={5}>
        {products
          ?.filter((product) => {
            if (searchTerm === "") {
              return product;
            } else if (
              product.name
                .toLowerCase()
                .includes(searchTerm.toLocaleLowerCase())
            ) {
              return product;
            }
          })
          ?.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} id="pro" >
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))}
      </Grid>

    
    </main>
  );
};

export default Products;
