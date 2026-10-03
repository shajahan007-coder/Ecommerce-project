import axios from "axios";
import { Routes, Route } from "react-router";
import { useEffect, useState } from "react";
import { HomePage } from "./pages/home/HomePage";
import { CheckoutPages } from "./pages/checkout/CheckoutPages";
import { Orders } from "./pages/orders/Orders";
import { Tracking } from "./pages/Tracking";

import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
   
  const loadCart = async () => {
  const response = await axios.get("/api/cart-items?expand=product")
           setCart(response.data);

  }

  useEffect(() => {
   
      loadCart()
  
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route path="/checkout" element={<CheckoutPages cart={cart} loadCart={loadCart} />} />
      <Route path="/orders" element={<Orders cart={cart} />} />
      <Route path="/tracking" element={<Tracking />} />
    </Routes>
  );

}

export default App;
