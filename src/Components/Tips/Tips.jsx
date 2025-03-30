// components/CategoryLabel.jsx
import React, { useState } from "react";
import FoodCategoriesPage from "./FoodCategories";
import mallImage from "../../assets/TipsImages/grocery_image.jpg";
import imgeeee from "../../assets/imageee.png";
import { Link } from "react-router-dom";

function Tips() {
  return (
    <section className="min-h-screen flex flex-col mt-[130px] md:mt-[100px]">
      <div className="relative w-full bg-white min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between relative">
            <div
              className="w-full md:w-1/2 mb-8 md:mb-0 bg-[#E27D60] rounded-2xl shadow-2xl 
                                     md:absolute md:top-1/2 md:-translate-y-1/2 md:left-10 md:max-w-[500px] p-10"
            >
              <h1 className="text-4xl md:text-5xl text-[#FFFFFF] font-extrabold">
                Easy Ideas for Wholesome Family Meals
              </h1>
              <p className="text-lg md:text-xl text-[#FFFFFF] poppins-regular  mt-9 max-w-2xl mx-auto">
                Discover simple, affordable ways to bring nutritious and
                delicious dishes to your table daily.
              </p>
            </div>
            <div className="w-full md:w-3/3 md:ml-[300px]">
              <img
                src={mallImage}
                alt="Cooking girl"
                className="w-full h-[400px] md:h-[600px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <FoodCategoriesPage />
      {/* footer section */}

      <div className="bg-[#E27D60] p-8 flex items-center flex-col">
        <div className="grid md:grid-cols-3 grid-cols-1 md:mt-10 mt-11 gap-16 md:gap-28 md:place-items-center place-items-center">
          <img src={imgeeee} alt="" className="h-44" />
          <ul className="flex flex-col gap-5 text-[#ffffff] font-semibold">
            <Link to="/about">About</Link>
            <Link to="/recipes">Recipes</Link>
            <Link to="/tips">Tips</Link>
            <Link to="/community">Community Resources</Link>
            <Link to="/tandc">Terms & Conditions</Link>
            <Link to="/policy">Privacy Policy</Link>
          </ul>
          <div>
            <a href="">
              <i className="fa-brands fa-youtube text-white h-6"></i>
            </a>
            <p className="text-white font-semibold">
              Discover more tasty recipes!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tips;
