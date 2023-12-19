import React, { createContext, useContext, useState, useEffect } from "react";
import { Button, Carousel } from "antd";
import ProductImg from "../../assets/ProductPageIcon.png";
import FavIcon from "../../assets/Heart.svg";
import StarRating from "react-native-star-rating-widget";
import { InteractionManager } from "react-native";

const UserContext = createContext();
const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const Product = ({ route, navigation }) => {
  const [productDetials, setProductDetails] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);
  const { productId } = route.params;
 
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${productId}`
        );
        const data = await response.json();
       
        let products = data;
       
        setProductDetails(products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [productId]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const addToFavorites = (productDetials) => {
   
    const isFavorite = favorites.some((fav) => fav.id === productDetials?.id);

    if (isFavorite) {
      setFavorites((prevFavorites) =>
        prevFavorites.filter((fav) => fav.id !== productDetials?.id)
      );
    } else {
      setFavorites((prevFavorites) => [...prevFavorites, productDetials]);
    }
  };
console.log("setFavorites",favorites);

  const handleBuyProduct = (productDetails) => {
    navigation.navigate('Order',{
      productDetails: productDetails
    });
  }

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <div className="product-page">
      <div className="cust-navbar">
        <div className="CartTitle">
          <div className="previous">
            <svg
            onClick={() =>  navigation.navigate('Home')}
              className="imgcust"
              width="8px"
              height="8px"
              viewBox="0 0 5 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.25062 0.557249C4.05962 0.557249 3.86762 0.630249 3.72162 0.776249L0.234623 4.24625C0.0936236 4.38725 0.0146236 4.57825 0.0146236 4.77825C0.0146236 4.97725 0.0936236 5.16825 0.234623 5.30925L3.72162 8.78125C4.01462 9.07325 4.48862 9.07325 4.78162 8.77925C5.07362 8.48525 5.07262 8.01025 4.77962 7.71825L1.82662 4.77825L4.77962 1.83825C5.07262 1.54625 5.07362 1.07225 4.78162 0.77825C4.63562 0.63025 4.44262 0.557249 4.25062 0.557249Z"
                fill="#1E222B"
              />
            </svg>
          </div>
          <span className="title">{productDetials?.title} </span>
        </div>
        <div className="cart-outer">
          <span className="border-white cart-count">{cart?.length}</span>
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4485 5.9995C10.2931 6.51124 7.63269 6.49623 4.56871 5.99535C2.47793 5.65356 0.597986 7.484 1.09451 9.53958L2.86182 16.8562C3.16559 18.1138 4.29303 19 5.58921 19H12.4423C13.7385 19 14.8659 18.1138 15.1697 16.8562L16.9336 9.55363C17.4309 7.49478 15.5431 5.65982 13.4485 5.9995Z"
              stroke="#1E222B"
              stroke-width="1.5"
            />
            <path
              d="M5 8.83231L5.00001 4.49999C5.00001 2.567 6.56701 1 8.50001 1H9.5C11.433 1 13 2.567 13 4.5V9"
              stroke="#1E222B"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
      <div className="prductInfo">
        <h1 className="flexCol">
          Thin Choise <span>Top Orange</span>
        </h1>
      </div>
      <div className="ReviewStar">
        <StarRating rating={productDetials?.rating} color="#F9B023" starSize={"17px"} /> 110
        Reviews
      </div>

      <Carousel afterChange={onChange} height="207px">
        {productDetials.images?.map((image, index) => {
            const isFavorite = favorites.some((fav) => fav.id === productDetials?.id);
          console.log("isFavorite",favorites);
            return(
          <div key={index} className="productSlide">
            <span className="favIcon">
            <svg
                 onClick={() => addToFavorites(productDetials)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill={isFavorite ? "#FF8181" : "none"}
                >
                  <path
                    d="M6.55689 12.0199L6.55617 12.0193C4.67274 10.3114 3.15003 8.9295 2.09215 7.63615C1.04001 6.34981 0.5 5.21213 0.5 4.00136C0.5 2.03674 2.03674 0.5 4.00136 0.5C5.11585 0.5 6.19333 1.02126 6.89453 1.84469L7.2752 2.29172L7.65588 1.84469C8.35708 1.02126 9.43455 0.5 10.549 0.5C12.5137 0.5 14.0504 2.03674 14.0504 4.00136C14.0504 5.21214 13.5104 6.34984 12.4581 7.63719C11.4005 8.93119 9.87829 10.3144 7.99553 12.0254L7.99492 12.0259L7.99384 12.0269L7.27648 12.675L6.55689 12.0199Z"
                    stroke={isFavorite ? "#FF8181" : "#323743"}
                  />
                </svg>
              {/* <img src={FavIcon} alt="Product Icon"  onClick={() => addToFavorites(index)} fill={isFavorite ? "#FF8181" : "none"}/> */}
            </span>
            <img src={image} alt="Product Icon" />
          </div>
            )
        })}


      </Carousel>
      <div className="ProductDetails">
        <div className="ProductPrice">
          <span className="RegPrice">
            {" "}
            <b>{productDetials?.price}</b>/kg
          </span>
          <span className="filledPriceButton">$22.04 off</span>
        </div>
        <div className="ProductActionButtons">
          <Button className="btn-primary-outline" type="primary" onClick={() => addToCart(productDetials)} ghost>
            Add to cart
          </Button>
          <Button type="primary" className="btn-primary" onClick={() =>handleBuyProduct(productDetials)}>
            Buy Now
          </Button>
        </div>
        <div className="ProDetails">
          <h3>Details</h3>
          <p>
            {productDetials?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
