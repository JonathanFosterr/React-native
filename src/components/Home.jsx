import React, { useEffect, useState } from "react";
import { Button, Carousel } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Home = ({ navigation }) => {
  const [productsdata, setProductsData] = useState();
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
 
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const addToFavorites = (product) => {
    console.log("product",product);
    const isFavorite = favorites.some((fav) => fav.id === product.id);

    if (isFavorite) {
      setFavorites((prevFavorites) =>
        prevFavorites.filter((fav) => fav.id !== product.id)
    );
    } else {
      setFavorites((prevFavorites) => [...prevFavorites, product]);
    }
  };

  console.log(favorites, "cartcartcartcartcart");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        let products = data.products;
        setProductsData(products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();

  }, []);

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const handleProductDetails = (id) =>{
      navigation.navigate('Product',{
        productId: id
      });
  }
  return (
    <div className="page-outer">
      <div className="home-header">
        <div className="home-navbar">
          <div>
            <p>Hey, Rahul</p>
          </div>
          <div className="cart-outer">
            <span className="cart-count">{cart.length}</span>
            <svg
              // onClick={addToCart}
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="bag">
                <path
                  id="Vector 367"
                  d="M13.4485 5.9995C10.2931 6.51124 7.63269 6.49623 4.56871 5.99535C2.47793 5.65356 0.597986 7.484 1.09451 9.53958L2.86182 16.8562C3.16559 18.1138 4.29303 19 5.58921 19H12.4423C13.7385 19 14.8659 18.1138 15.1697 16.8562L16.9336 9.55363C17.4309 7.49478 15.5431 5.65982 13.4485 5.9995Z"
                  stroke="white"
                  stroke-width="1.5"
                />
                <path
                  id="Vector 327"
                  d="M5 8.83231L5.00001 4.49999C5.00001 2.567 6.56701 1 8.50001 1H9.5C11.433 1 13 2.567 13 4.5V9"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </g>
            </svg>
          </div>
        </div>
        <div className="home-input">
          <input type="text" placeholder="Search Products or store" />
        </div>
        <div className="home-delivery">
          <div className="delivery">
            <p>Delivery to</p>
            <div className="delivery-content">
              <select name="addressList" id="addressList">
                <option >Green Way 3000, Sylhet</option>
                <option >Green Way 4000, Sylhet</option>
                <option >Green Way 6000, Sylhet</option>
                <option >Green Way 5000, Sylhet</option>
              </select>
            </div>
          </div>
          <div className="delivery">
            <p>Within</p>
            <div className="delivery-content">
              <select name="addressList" id="addressList">
                <option >1 Hour</option>
                <option >2 Hour</option>
                <option >3 Hour</option>
                <option >4 Hour</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="home-offer-section">
        <div className="home-offer">
          <Carousel afterChange={onChange} width="100%" height="129px">
            <div className="home-discount">
              <div className="home-discount-active">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="68"
                    height="68"
                    viewBox="0 0 68 68"
                    fill="none"
                  >
                    <g opacity="0.6">
                      <path
                        d="M5.66663 17C5.66663 13.9942 6.86067 11.1115 8.98608 8.98612C11.1115 6.86071 13.9942 5.66667 17 5.66667H51C54.0057 5.66667 56.8884 6.86071 59.0138 8.98612C61.1392 11.1115 62.3333 13.9942 62.3333 17V51C62.3333 54.0058 61.1392 56.8885 59.0138 59.0139C56.8884 61.1393 54.0057 62.3333 51 62.3333H17C13.9942 62.3333 11.1115 61.1393 8.98608 59.0139C6.86067 56.8885 5.66663 54.0058 5.66663 51V17Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M24.0833 31.1667C27.9954 31.1667 31.1667 27.9954 31.1667 24.0833C31.1667 20.1713 27.9954 17 24.0833 17C20.1713 17 17 20.1713 17 24.0833C17 27.9954 20.1713 31.1667 24.0833 31.1667Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M41.157 35.7596L17 62.3335H51.3768C54.2827 62.3335 57.0695 61.1791 59.1243 59.1244C61.179 57.0696 62.3333 54.2828 62.3333 51.377V51.0001C62.3333 49.6798 61.8375 49.1726 60.945 48.1951L49.5267 35.7426C48.9945 35.1621 48.3472 34.6989 47.626 34.3826C46.9048 34.0662 46.1256 33.9036 45.3381 33.9052C44.5506 33.9068 43.772 34.0726 43.0521 34.3918C42.3322 34.7111 41.6868 35.177 41.157 35.7596V35.7596Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                </div>
                <div>
                  <div>
                    <p>Get</p>
                    <h2>50% OFF</h2>
                    <span>On first 03 order </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-discount">
              <div className="home-discount-active">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="68"
                    height="68"
                    viewBox="0 0 68 68"
                    fill="none"
                  >
                    <g opacity="0.6">
                      <path
                        d="M5.66663 17C5.66663 13.9942 6.86067 11.1115 8.98608 8.98612C11.1115 6.86071 13.9942 5.66667 17 5.66667H51C54.0057 5.66667 56.8884 6.86071 59.0138 8.98612C61.1392 11.1115 62.3333 13.9942 62.3333 17V51C62.3333 54.0058 61.1392 56.8885 59.0138 59.0139C56.8884 61.1393 54.0057 62.3333 51 62.3333H17C13.9942 62.3333 11.1115 61.1393 8.98608 59.0139C6.86067 56.8885 5.66663 54.0058 5.66663 51V17Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M24.0833 31.1667C27.9954 31.1667 31.1667 27.9954 31.1667 24.0833C31.1667 20.1713 27.9954 17 24.0833 17C20.1713 17 17 20.1713 17 24.0833C17 27.9954 20.1713 31.1667 24.0833 31.1667Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M41.157 35.7596L17 62.3335H51.3768C54.2827 62.3335 57.0695 61.1791 59.1243 59.1244C61.179 57.0696 62.3333 54.2828 62.3333 51.377V51.0001C62.3333 49.6798 61.8375 49.1726 60.945 48.1951L49.5267 35.7426C48.9945 35.1621 48.3472 34.6989 47.626 34.3826C46.9048 34.0662 46.1256 33.9036 45.3381 33.9052C44.5506 33.9068 43.772 34.0726 43.0521 34.3918C42.3322 34.7111 41.6868 35.177 41.157 35.7596V35.7596Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                </div>
                <div>
                  <div>
                    <p>Get</p>
                    <h2>50% OFF</h2>
                    <span>On first 03 order </span>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
      <div className="home-recommended">
        <h1>Recommended</h1>
        <div className="home-product">
        
          {productsdata?.map((item, i) => {
            const isFavorite = favorites.some((fav) => fav.id === item.id);
            return (
              <div key={i} className="home-value">
                {/* <button onClick={() => addToFavorites(item)}> */}
                <svg  
                onClick={() => addToFavorites(item)}
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
                {/* </button> */}
                <div className="home-value-image">
                  <img src={item.images[0]}  onClick={() => handleProductDetails(item.id)}/>
                </div>
                <div className="home-product-content">
                  <div>
                    <h2>${item.price}</h2>
                    <h6>{item.title}</h6>
                  </div>
                  <Button
                    onClick={() => addToCart(item)}
                    type="primary"
                    shape="circle"
                    icon={<PlusOutlined />}
                  />
                </div>
              </div>
            );
          })}
         
        </div>
      </div>
    </div>
  );
};

export default Home;
