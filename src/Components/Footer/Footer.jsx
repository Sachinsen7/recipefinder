import React from "react";
import footerImage from "../../assets/Footer/footerImage.jpg";
import imgeeee from "../../assets/imageee.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-[#E27D60]  p-8 flex items-center flex-col ">
      <div className="flex flex-col mt-10 items-center">
        <h1 className="text-2xl font-extrabold text-white">
          Welcom to Dish Discovery
        </h1>
        <p className="text-white text-base font-medium mt-10">
          Your go to place for delicious recipes <br />
          with easy ingridients and cooking times
        </p>
        <Link
          to="/recipes"
          className="mt-9 py-4 px-10 bg-white hover:bg-white text-[#E27D60]  rounded-lg font-bold text-lg cursor-pointer"
        >
          Explore Recipes
        </Link>
        <img
          src={footerImage}
          alt=""
          className="object-cover md:h-[500px] h-[300px]  mt-12 rounded-lg"
        />
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 md:mt-40 mt-11 gap-16 md:gap-28 md:place-items-center place-items-center">
        <img src={imgeeee} alt="" className="h-44" />
        <ul className="flex flex-col gap-5 text-[#ffffff] font-semibold ">
          <Link to="/about">About</Link>
          <Link to="/recipes">Recipes</Link>
          <Link to="/tips">Tips</Link>
          <Link to="/community">Community Resources</Link>
          <Link to="/tandc">Terms & Conditions</Link>
          <Link to="/policy"> Privacy Policy</Link>
        </ul>
        <div>
          <a href="">
            <i class="fa-brands fa-youtube text-white h-6"></i>
          </a>
          <p className="text-white font-semibold">
            Discover more tasty recipes!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
