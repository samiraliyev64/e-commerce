import React from "react";
import { products } from "../../api/db";
import {
  HeartFilled,
  ShoppingCartOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import { FallOutlined } from "@ant-design/icons";
import { Card } from "antd";
import "../../assets/scss/ProductItem.scss";
import Image from "../../assets/image/image";
import { useState } from "react";
const { Meta } = Card;
function ProductItem() {
  let [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("basket")) || []
  );

  let [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );

  function addWishlist(currentProduct) {
    let existingProduct = wishlist.find(
      (product) => product.id === currentProduct.id
    );
    if (existingProduct) {
      setWishlist([...wishlist]);
    } else {
      setWishlist([...wishlist, { ...currentProduct, inWishlist: true }]);
    }
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }
  function addToCart(currentProduct) {
    let existingProduct = basket.find(
      (product) => product.id === currentProduct.id
    );

    if (existingProduct) {
      existingProduct.count++;
      setBasket([...basket]);
    } else {
      setBasket([...basket, { ...currentProduct, count: 1 }]);
    }
    localStorage.setItem("basket", JSON.stringify(basket));
  }

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <img src={Image.Product1} alt="bal" />
          <p>{product.description}</p>
          <p>${product.price}</p>
          <div className="text-center counter pb-3 pt-3">
            <button onClick={() => addWishlist(product)}>Add Wishlist</button>
            <ShoppingCartOutlined
              className="basket-icon"
              onClick={() => addToCart(product)}
              data-id={product.id}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
export default ProductItem;
// <Card

//   style={{
//     width: 300,
//   }}
//   cover={<img alt="example" src={Image.Product1} />}
//   actions={[
//     <HeartFilled className="heart-icon" />,
//     <ShoppingCartOutlined className="basket-icon" />,
//     <ShareAltOutlined className=" share-icon" />,
//   ]}
// >
//   <Meta title="KENDIMIZ BAL 900 GR AKASIYA..." />
//   <div className="text-center counter pb-3 pt-3">
//     <button className="product_btn me-3" onClick={inc}>+</button>
//     {count}
//     <button className="product_btn ms-3" onClick={dec}>-</button>
//   </div>
//   <Meta
//     description={
//       <div>
//         <h1 className="product-price">₼ 5,19 ədəd</h1>
//         <span style={{ color: "#BB0000", fontFamily: "Arial" }}>
//           {<FallOutlined className="discount-icon me-3" />}Endirim
//         </span>

//       </div>
//     }
//   />
// </Card>
