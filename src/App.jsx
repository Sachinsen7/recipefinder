import React from "react";
import Header from "./Components/Header/Header";
import RecipeSwiper from "../src/Components/Swiper/Swiper";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import HeroCommunity from "../src/Components/HeroCommunity/Community";
import Footer from "./Components/Footer/Footer";
import Recipe from "./Components/RecipeGrid/Recipe";
import HeroBottom from "./About Components/HeroBottom";
import RecipePage from "./Components/Recipe/RecipePage";
import RecipeDetail from "./Components/Recipe/RecipeDetail";
import Tips from "./Components/Tips/Tips";
import Community from "./Components/Community/Community";

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <Header />
      <Home />
      <Recipe />
      <RecipeSwiper />
      <HeroCommunity />
      <Footer />
      <RecipePage />
      <RecipeDetail />
      <Tips />
      <Community />

      {/* <HeroBottom /> */}
    </>
  );
}

export default App;
