import React from "react";

import cooking_image_girl from "../../assets/cooking_image_girl.jpg";
import RecipeSwiper from "../Swiper/Swiper";
import Community from "../HeroCommunity/Community";
import Footer from "../Footer/Footer";
import Recipe from "../RecipeGrid/Recipe";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex flex-col mt-[130px] md:mt-[100px] mb-10">
      {/* Hero Section */}
      <div className="relative w-full bg-white min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between relative">
            <div
              className="w-full md:w-1/2 mb-8 md:mb-0 bg-[#E27D60] rounded-2xl shadow-2xl 
                                     md:absolute md:top-1/2 md:-translate-y-1/2 md:left-10 md:max-w-[500px] p-10 md:p-12"
            >
              <h1
                className="text-2xl md:text-4xl lg:text-5xl

 text-[#FFFFFF] font-extrabold"
              >
                Nourish Your Body
              </h1>
              <p className="text-white text-base md:text-xl lg:text-3xl font-semibold mt-3 md:mt-5 text-start">
                Healthy and delicious recipes for the whole family, made with
                real ingredients.
              </p>
              <button className="mt-10 cursor-pointer items-center p-2 md:p-3 bg-white text-[#E27D60] font-semibold rounded-lg poppins-semibold text-base md:text-lg hover:bg-gray-100">
                <Link to={"/recipes"}>Explore Recipes Now</Link>
              </button>
            </div>
            <div className="w-full md:w-3/3 md:ml-[300px]">
              <img
                src={cooking_image_girl}
                alt="Cooking girl"
                className="w-full h-[400px] md:h-[600px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Other Components */}
      <Recipe />
      <RecipeSwiper />
      <Community />
      <Footer />
    </div>
  );
}

export default Home;
