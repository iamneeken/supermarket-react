import axios from "axios";
import React, { useEffect, useState } from "react";
import { couldStartTrivia } from "typescript";
import "./Cart.css";

const baseURL = "https://uat.ordering-dalle.ekbana.net";
const auth = "api/v4";
const getCart = `${baseURL}/${auth}/cart`;
const apiKey = "q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6";
const warehouseId = 1;

const addCart = `${baseURL}/${auth}/cart-product`;

const cartDetails = document.querySelector("#cart-items");

export const Cart = () => {
  const [cartItems, setCartItems] = useState<any>([]);

  //   console.log(cartItems);

  const [quantity, setQuantity] = useState<any>({});

  useEffect(() => {
    const getCartItem = async () => {
      const accessToken = localStorage.getItem("token");
      const obj = JSON.parse(accessToken!);
      let token;

      if (!obj) {
        console.log("Token not present");
      } else {
        token = obj.access_token;
      }
      try {
        const config = {
          headers: {
            "Api-Key": apiKey,
            "Warehouse-Id": warehouseId,
            Authorization: `Bearer ${token}`,
          },
        };

        let res = await axios.get(getCart, config);
        setCartItems(res.data.data);

        for (let item of res.data.data.cartProducts) {
          setQuantity((prevState: any) => ({
            ...prevState,
            [item.id]: item.quantity,
          }));
        }
      } catch (e) {
        console.log(e);
      }
    };

    getCartItem();
  }, []);

  const quantityChangeHandler = async (
    item: any,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const accessToken = localStorage.getItem("token");
    const obj = JSON.parse(accessToken!);
    let token;

    if (!obj) {
      console.log("Token not present");
    } else {
      token = obj.access_token;
    }

    const config = {
      headers: {
        "Api-Key": apiKey,
        "Warehouse-Id": warehouseId,
        Authorization: `Bearer ${token}`,
      },
    };
    let tempQuantity = Number(e.target.value);

    let res = await axios.post(
      addCart,
      {
        productId: item.product.id,
        priceId: item.product.unitPrice[0].id,
        quantity: tempQuantity,
        note: "testing",
      },
      config
    );

    let res2 = await axios.get(getCart, config);
    setCartItems(res2.data.data);

    console.log(res);
    console.log(tempQuantity);

    setQuantity({
      ...quantity,
      [item.id]: tempQuantity,
    });
  };

  const removeHandler = async (item: any) => {
    console.log(item);
    const accessToken = localStorage.getItem("token");
    const obj = JSON.parse(accessToken!);
    let token;

    if (!obj) {
      console.log("Token not present");
    } else {
      token = obj.access_token;
    }

    const config = {
      headers: {
        "Api-Key": apiKey,
        "Warehouse-Id": warehouseId,
        Authorization: `Bearer ${token}`,
      },
    };
    let res = await axios.delete(`${addCart}/${item.id}`, config);

    let res2 = await axios.get(getCart, config);
    setCartItems(res2.data.data);
    console.log(res);

    let tempQuantity = { ...quantity };
    delete tempQuantity[item.id];
    setQuantity(tempQuantity);
  };
  return (
    <div>
      <table className="billing">
        <thead>
          <th>Image</th>
          <th>Item</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Menu</th>
          <th>Total</th>
        </thead>
        <tbody id="cart-items">
          {cartItems.cartProducts &&
            cartItems.cartProducts.map((item: any) => {
              return (
                <tr>
                  <td>
                    <img
                      src={item.product.images[0].imageName}
                      height="100px"
                    />
                  </td>
                  <td>{item.product.title}</td>
                  <td>Rs. {item.price}</td>
                  <td>
                    <input
                      type="number"
                      value={quantity[item.id]}
                      onChange={(e) => {
                        quantityChangeHandler(item, e);
                      }}
                      min="0"
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        removeHandler(item);
                      }}
                    >
                      Remove
                    </button>
                  </td>
                  <td></td>
                </tr>
              );
            })}

          <tr>
            <td colSpan={5}></td>
            <td colSpan={6}>Rs. {cartItems.total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
