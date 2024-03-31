import React from "react";
import homeImg from "../../assets/home.png";
import categoryImg from "../../assets/category.png";
import productImg from "../../assets/product.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleHome = () => {
    console.log("Adding product:");
    navigate("/");
  };

  const handleProduct = () => {
    console.log("handling product:");
    navigate("/product");
  };

  const handleCategory = () => {
    console.log("handling category:");
    navigate("/category");
  };

  return (
    <div className="fixed w-80 h-screen bg-gray-300 flex flex-col">
      <div className="flex flex-col ">
        <div className="p-4">
          <i className="fa-solid fa-house text-xl text-gray-700"></i>
        </div>
        <div className="flex flex-row items-center p-4">
          <img src={homeImg} className="w-6 h-6" alt="Product" />
          <h1
            onClick={handleHome}
            style={{ cursor: "pointer" }}
            className="text-base text-gray-700 mx-4"
          >
            Home
          </h1>
        </div>
      </div>
      <div className="flex flex-col ">
        <div className="p-4">
          <i className="fa-solid fa-list text-xl text-gray-700"></i>
        </div>
        <div className="flex flex-row items-center p-4">
          <img src={categoryImg} className="w-6 h-6" alt="Product" />
          <h1
            onClick={handleCategory}
            style={{ cursor: "pointer" }}
            className="text-base text-gray-700 mx-4"
          >
            Category
          </h1>
        </div>
      </div>
      <div className="flex flex-col ">
        <div className="p-4">
          <i className="fa-solid fa-boxes-stacked text-xl text-gray-700"></i>
        </div>
        <div className="flex flex-row items-center p-4">
          <img src={productImg} className="w-6 h-6" alt="Product" />
          <h1
            onClick={handleProduct}
            style={{ cursor: "pointer" }}
            className="text-base text-gray-700 mx-4"
          >
            Product
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
