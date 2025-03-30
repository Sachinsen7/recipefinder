import React from "react";
import DishOne from "../../assets/DishOne.png";

function Recipe() {
  return (
    <section className="w-full py-16 px-4 bg-[#80CBC4] flex justify-center items-center min-h-screen mt-4">
      <div className="w-full max-w-5xl h-[600px] bg-white rounded-3xl shadow-2xl overflow-hidden flex items-center">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2">
            <img
              src={DishOne}
              alt="Featured Dish"
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 p-6 md:p-10">
            <h1 className="text-2xl md:text-3xl text-[#bd5c41] font-extrabold mb-4">
              Discover Delicious Recipes with Dish Discovery
            </h1>
            <p className="text-[#4A4A4A] text-base md:text-xl font-semibold mb-6">
              Find step-by-step recipes, ingredient lists, and cooking times for
              every meal
            </p>
            <button className="py-3 px-6 md:py-4 md:px-10 bg-[#E27D60] hover:bg-[#bd5c41] text-white rounded-lg font-bold text-base md:text-lg cursor-pointer">
              <a href="/recipes"> Browse Recipes</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Recipe;
