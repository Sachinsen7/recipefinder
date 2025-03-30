// pages/FoodCategoriesPage.jsx
import React from "react";
import CategoryLabel from "./CategoryLabel";

// Import images for Vegetables
import vegetablesImage from "../../assets/Community/vegetables.jpg";
import soupImage from "../../assets/Community/soup.jpg";
import pastaImage from "../../assets/Community/pasta.jpg";
import hummusImage from "../../assets/Community/salad.jpg";

// Import images for Beans
import beansImage from "../../assets/TipsImages/beans.jpg";
import beanSoupImage from "../../assets/TipsImages/beans-one.jpg";
import beanSaladImage from "../../assets/TipsImages/beans-two.jpg";
import beanDipImage from "../../assets/TipsImages/beans-three.jpg";

// Import images for Fruits
import fruitsImage from "../../assets/TipsImages/fruits.jpg";
import fruitSaladImage from "../../assets/TipsImages/fruits-one.jpg";
import smoothieImage from "../../assets/TipsImages/fruits-two.jpg";
import fruitYogurtImage from "../../assets/TipsImages/fruits-three.jpg";

// Import images for Milk
import milkImage from "../../assets/TipsImages/milk.jpg";
import milkShakeImage from "../../assets/TipsImages/milk-one.jpg";
import cheeseSauceImage from "../../assets/TipsImages/milk-two.jpg";
import yogurtImage from "../../assets/TipsImages/milk-three.jpg";

// Import images for Eggs
import eggsImage from "../../assets/TipsImages/eggs.jpg";
import omeletteImage from "../../assets/TipsImages/eggs-one.jpg";
import boiledEggImage from "../../assets/TipsImages/eggs-two.jpg";
import eggSaladImage from "../../assets/TipsImages/eggs-three.jpg";

// Import images for Chicken
import chickenImage from "../../assets/TipsImages/chicken.jpg";
import grilledChickenImage from "../../assets/TipsImages/chicken-one.jpg";
import chickenSoupImage from "../../assets/TipsImages/chicken-two.jpg";
import chickenSaladImage from "../../assets/TipsImages/chicken-three.jpg";

// Import images for Stale Bread
import staleBreadImage from "../../assets/TipsImages/bread.jpg";
import breadCrumbImage from "../../assets/TipsImages/bread-one.jpg";
import croutonImage from "../../assets/TipsImages/bread-two.jpg";
import breadPuddingImage from "../../assets/TipsImages/bread-three.jpg";

function FoodCategoriesPage() {
  const categories = [
    {
      label: "Vegetables",
      mainImage: vegetablesImage,
      subItems: [
        {
          image: soupImage,
          text: "Toss with cold pasta and light dressing for a salad.",
        },
        {
          image: pastaImage,
          text: "Chop and add to soup or chili.",
        },
        { image: hummusImage, text: "Slice and serve with hummus." },
      ],
    },
    {
      label: "Beans",
      mainImage: beansImage,
      subItems: [
        { image: beanSoupImage, text: "Flavorful Indian Vegan Chana Masala" },
        { image: beanSaladImage, text: "Rajma without Onion and Garlic" },
        { image: beanDipImage, text: "Brown lentil curry-sabut masoor ki dal" },
      ],
    },
    {
      label: "Fruits",
      mainImage: fruitsImage,
      subItems: [
        { image: smoothieImage, text: "Add to a fruit salad." },
        { image: fruitSaladImage, text: "fruit icecream" },
        { image: fruitYogurtImage, text: "mango smoothie" },
      ],
    },
    {
      label: "Milk",
      mainImage: milkImage,
      subItems: [
        { image: milkShakeImage, text: "Kesar Almond Milkshake" },
        { image: yogurtImage, text: "Strawberry smoothie" },
        { image: cheeseSauceImage, text: "Cereal Milk Ice Cream" },
      ],
    },
    {
      label: "Eggs",
      mainImage: eggsImage,
      subItems: [
        { image: omeletteImage, text: "make egg omllettes" },
        { image: boiledEggImage, text: "egg masala" },
        { image: eggSaladImage, text: "eggs fried rice" },
      ],
    },
    {
      label: "Chicken",
      mainImage: chickenImage,
      subItems: [
        { image: grilledChickenImage, text: "Chicken Masala" },
        { image: chickenSoupImage, text: "Butter Chicken" },
        { image: chickenSaladImage, text: "Chicken Changezi" },
      ],
    },
    {
      label: "Stale Bread",
      mainImage: staleBreadImage,
      subItems: [
        { image: croutonImage, text: "Bread Stuffing" },
        { image: breadCrumbImage, text: "French Toast" },
        { image: breadPuddingImage, text: "Bread croutons pudding." },
      ],
    },
  ];

  return (
    <section className="min-h-screen flex flex-col py-12 bg-gradient-to-r from-[#E6F0FA] to-[#E6F7E0]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center py-8">
          <h1 className="poppins-semibold text-3xl md:text-4xl font-bold text-[#E27D60] mb-8 text-center">
            Maximize Your Pantry Staples
          </h1>
          <p className="text-lg md:text-xl text-gray-600 poppins-regular max-w-2xl mx-auto">
            Cut costs and minimize waste by transforming leftovers into
            delicious meals with a creative twist.
          </p>
          <p className="text-md md:text-lg text-gray-500 font-bold  mt-8 poppins-regular">
            Click the plus sign to uncover helpful tips.
          </p>
        </div>
        {categories.map((category, index) => (
          <CategoryLabel
            key={index}
            label={category.label}
            mainImage={category.mainImage}
            subItems={category.subItems}
          />
        ))}
      </div>
    </section>
  );
}

export default FoodCategoriesPage;
