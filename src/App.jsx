import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";

import ProductDetail from "./ProductDetail";
import Footer from "./Footer";
import ProductListPage from "./ProductLIstPage";
import NotFound from "./NotFound";
import LoginPage from "./Login/LoginPage";
import SignUp from "./Login/SignUp";
import ForgetPass from "./Login/ForgetPass";
import Alert from "./Alert";
import CartPage from "./Cart/CartPage";
import UserProvider from "./Provider/UserProvider";
import { AlertProvider } from "./Provider/AlertProvider";
import UserRoute from "./UserRoute";
import AuthRoute from "./AuthRoute";
import CartProvider from "./Provider/CartProvider";

function App() {
  return (
    <div className="  bg-gray-100 h-screen overflow-scroll flex flex-col">
      {" "}
      <UserProvider>
        <CartProvider>
          <AlertProvider>
            <Alert /> <Navbar />
            <div className="grow mt-10">
              <Routes>
                <Route
                  index
                  element={
                    <UserRoute>
                      <ProductListPage />
                    </UserRoute>
                  }
                ></Route>

                <Route
                  path="/products/:id/"
                  element={<ProductDetail />}
                ></Route>

                <Route path="*" element={<NotFound />}></Route>

                <Route
                  path="/login/"
                  element={
                    <AuthRoute>
                      <LoginPage />
                    </AuthRoute>
                  }
                ></Route>

                <Route
                  path="/s/"
                  element={
                    <AuthRoute>
                      <SignUp />
                    </AuthRoute>
                  }
                ></Route>
                <Route path="/forgetpass/" element={<ForgetPass />}></Route>
                <Route path="/cart" element={<CartPage />}></Route>
              </Routes>
            </div>
            <Footer />{" "}
          </AlertProvider>
        </CartProvider>
      </UserProvider>
    </div>
  );
}

export default App;

// var a = '{"title":"iphone","price":25,"category":"phone"}';
// var b = JSON.parse(a);
// console.log("jason", b);
// var c = JSON.stringify(b);
// console.log("stringify", c);
// const a = [10, 32, 34, 41, 12, 5, 6, 7, 1];
// const b = a.filter(function (item) {
//   return item > 10;
// });
// const c = a.map(function (item) {
//   return item + 5;
// });
// console.log("new  a ki array", a);
// console.log("new b ki  array", b);
// console.log("new  c ki array", c);
