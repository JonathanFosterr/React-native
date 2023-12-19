import React, { useEffect, useState } from "react";
import "./orders.css"
import { Button, Card, Col, Row } from "antd";
import Minus from "../../assets/Minus.svg";
import Plus from "../../assets/Plus.svg";
import Group from "../../assets/imgIcon.svg";
const Order = ({ route, navigation }) => {
  const { productDetails } = route.params;
  console.log("productDetails",productDetails);
  const [counter,setCounter] = useState(1);
  const [total,setTotal] = useState(productDetails?.price);
  const [sumTotal,setSubTotal] = useState(productDetails?.price);
  const [cart, setCart] = useState([]);
  const [deliveryCharge,setDeliveryCharge] = useState();
  

  useEffect(() => {
setDeliveryCharge(total + 100)
  },[total]) 

 
  const handleMiusItem = () => {
 
    if (counter == 1) {
      setCounter(1);
      setTotal(productDetails?.price)
    }
    else{
      setCounter(counter - 1 );
      setTotal(total - productDetails?.price)
    }
  }
  const handlePlusItem = () => {
    setCounter(counter + 1);
    setTotal(total + productDetails?.price)
  
  }
  productDetails
  const OrderedProducts = [
    {
      id: 1,
      name: "Product1",
      price: 10,
    },
    {
      id: 2,
      name: "Product2",
      price: 10,
    },
    {
      id: 4,
      name: "Product3",
      price: 10,
    },
    {
      id: 3,
      name: "Product4",
      price: 10,
    },
    {
      id: 6,
      name: "Product5",
      price: 10,
    },
  ];

  const Total = [
    {
      id: 1,
      subtotal: "Subtotal",
      subtotalPrice: 1500,
    },
    {
      id: 2,
      delivery: "Delivery",
      deliveryPrice: 100,
    },
    {
      id: 4,
      total: "Total",
      totalPrice: 1600,
    },
  ];
  return (
    <div className="order-page">
      <div className="order-navbar">
        <div className="CartTitle">
          <div className="previous">
            {" "}
            <svg
              onClick={() =>  navigation.navigate('Product')}
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
          <span className="title">Shopping Cart </span>
        </div>
      </div>
      <div className="order-list">
        {/* {OrderedProducts?.map((item, index) => ( */}
          <Row key={productDetails?.id} style={{ marginBottom: "20px", flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between'}}>
            <Col xs={{ span: 2 }} style={{ alignItems:'center', justifyContent:'center', display:'flex'}}>
              <img
                src={productDetails?.thumbnail}
                height="24px"
                width="24px"
                className="arrowImg"
                alt="imgIcon"
              />
            </Col>
            <Col xs={{ span: 12 }}>
              <span className="productName">{productDetails?.title}</span>
              <br />
              <span>{productDetails?.price}</span>
            </Col>
            <Col xs={{ span: 8 }}>
              <div style={{ display: "flex", alignItems: "center",gap:'0.5rem' }}>
                <div className="counterDiv">
                
                  <img
                  onClick={() => handleMiusItem()}
                    src={Minus}
                    className="minus"
                    width="20px"
                    height="20px"
                    alt="Minus"
                  />
                </div>

                <div className="count">{counter}</div>
                <div className="counterDiv">
                  <img
                    src={Plus}
                    onClick={() => handlePlusItem()}
                    className="plus"
                    width="20px"
                    height="20px"
                    alt="Plus"
                  />
                </div>
              </div>
            </Col>
          </Row>
    
        <div className="editOrder">Edit</div>
      </div>
      <Card className="finalOrderCart">
          {/* {Total?.map((item, index) => ( */}
            <>
              <Row  style={{ marginBottom: "20px !important" }}>
                <Col xs={{ span: 24 }} md={{ offset: 0, span: 12 }}>
                  <span className="totalTest">SubTotal</span>
                 
                </Col>
                <Col xs={{ span: 24 }} md={{ span: 1, offset: 8 }}>
                  <span className="totalPrice">{total}</span>
                </Col>
              </Row>

              <Row
              
                style={{ marginBottom: "20px" }}
              >
                <Col xs={{ span: 24 }} md={{ offset: 0, span: 12 }}>
                  <span className="totalTest">Delivery</span>
                
                </Col>
                <Col xs={{ span: 24 }} md={{ span: 1, offset: 8 }}>
                  <span className="totalPrice">100</span>
                </Col>
              </Row>
              <Row
             
                style={{ marginBottom: "20px" }}
              >
                <Col xs={{ span: 24 }} md={{ offset: 0, span: 12 }}>
                  <span className="totalTest">total</span>
                  
                </Col>
                <Col xs={{ span: 24 }} md={{ span: 1, offset: 8 }}>
                  <span className="totalPrice">{deliveryCharge}</span>
                </Col>
              </Row>
            </>
          {/* ))} */}
          
            <Button className="addCartBtn"  >
            Proceed  To checkout
            </Button>
        
        </Card>
    </div>
  );
};

export default Order;
