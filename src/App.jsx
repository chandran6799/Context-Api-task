import React, { createContext, useState } from "react";
import Cart from "./Components/Cart";


export const UserContext = createContext(1);

function App() {
  const [product, setProduct] = useState([
    {
      id: 1,
      title: "Realme 12Pro Plus",
      description: "Luxury Watch Design | SuperOIS Supported Cinematic Portrait Algorithm",
      price: 549,
      discountPercentage: 12.96,
      rating: "5.0",
      stock: 50,
      brand: "Realme",
      category: "smartphones",
      image:
        "https://m.media-amazon.com/images/I/71XVZ55GkDL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 2,
      title: "Boult Z40",
      description:
        "BoomX Tech for Supreme Bass | Water Resistant | Touch control | Fast Pairing",
      price: 899,
      discountPercentage: 17.94,
      rating: "5.0",
      stock: "Only One Left",
      brand: "Boult",
      category: "Airbuds",
      image:
        "https://www.boultaudio.com/cdn/shop/files/Group12450_1_779fe34d-00e4-40a9-8f53-1f7017a68da2.png?v=1710936812&width=800",
    },
    {
      id: 3,
      title: "Fire-Boltt Rise BT",
      description:
        "Bluetooth Calling Smartwatch with AI Voice Assistance, Built-In Speaker & Microphone",
      price: 1249,
      discountPercentage: 15.46,
      rating: "4.0",
      stock: 36,
      brand: "Fire-Boltt",
      category: "Smartwatch",
     image:
        "https://m.media-amazon.com/images/I/71NrUXG01QL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 4,
      title: "HP AMD Ryzen 3 Quad Core 5300U",
      description: "Boundless brilliance, micro-edge bezel | Impressive performance | Boost your productivity",
      price: 1999,
      discountPercentage: 17.91,
      rating: "4.0",
      stock: 60,
      brand: "HP",
      category: "smartphones",
       image:
        "https://static.bhphoto.com/images/images250x250/1682110530000_1762582.jpg",
    },
    {
      id: 5,
      title: "Dell S Series",
      description:
        "Owing to its three-sided thin bezel design and a Full HD display with a resolution of up to 1920X1080p",
      price: 3499,
      discountPercentage: 10.58,
      rating: "4.0",
      stock: 32,
      brand: "Dell",
      category: "monitor",
      image:
        "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/u-series/u2723qe/media-gallery/monitor-u2723qe-gallery-1.psd?fmt=pjpg&pscan=auto&scl=1&wid=3764&hei=2248&qlt=100,1&resMode=sharp2&size=3764,2248&chrss=full&imwidth=5000",
    },
  ]);

  return (
    <>
      <UserContext.Provider value={{ product, setProduct }}>
        <div className="container my-5">
       <Cart />
        </div>
      </UserContext.Provider>
    </>
  );
}
export default App;