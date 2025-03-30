// src/Components/About/About.jsx
import React from "react";
import foodImage from "../../assets/About_images/kids.jpg";
import dishhhOurMission from "../../assets/About_images/dishhhOurMission.jpg";
import imgeeee from "../../assets/imageee.png";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <section className="min-h-screen flex flex-col mt-[130px] md:mt-[100px]">
        {/* Hero Section */}

        <div className="relative w-full bg-white min-h-[700px] flex items-center justify-center overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between relative">
              <div
                className="w-full md:w-1/2 mb-8 md:mb-0 bg-[#E27D60] rounded-2xl shadow-2xl 
                                     md:absolute md:top-1/2 md:-translate-y-1/2 md:left-10 md:max-w-[500px] p-10 "
              >
                <h1 className="text-2xl md:text-4xl lg:text-5xl text-white font-extrabold text-center">
                  Nourishing Kids with Wholesome Meals
                </h1>
                <p className="text-white text-base md:text-xl lg:text-3xl font-semibold mt-3 md:mt-5 text-center">
                  Combat child hunger by preparing nutritious, budget-friendly
                  dishes that support healthy growth.
                </p>
                <button className="cursor-pointer items-center mt-4 p-2 md:p-3 bg-white text-[#E27D60] font-semibold rounded-lg poppins-semibold text-base md:text-lg hover:bg-gray-100">
                  Explore Recipes Now
                </button>
              </div>
              <div className="w-full md:w-3/3 md:ml-[300px]">
                <img
                  src={foodImage}
                  alt="Cooking girl"
                  className="w-full h-[400px] md:h-[600px] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <section className="w-full px-4 bg-[#80CBC4] flex justify-center items-center h-auto md:h-[500px] py-8 md:py-0">
          <div className="w-full max-w-3xl h-auto bg-white rounded-xl shadow-2xl overflow-hidden flex items-center">
            <div className="flex flex-col md:flex-col items-center justify-center w-full py-6 md:py-0">
              <div className="w-full md:w-1/2 text-center">
                <h1 className="text-xl md:text-2xl lg:text-3xl text-[#bd5c41] font-extrabold mb-4">
                  Our Mission
                </h1>
                <p className="text-[#4A4A4A] text-sm md:text-base lg:text-xl font-medium mb-6 px-4 md:px-0">
                  We’re on a mission to inspire home cooks with easy,
                  step-by-step recipes using real ingredients. Dish Discovery is
                  here to help you find meals that fit your lifestyle while
                  building a community of food lovers who share and learn
                  together
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <div className="bg-[#E27D60] p-4 md:p-8 flex items-center flex-col">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 lg:gap-28 place-items-center mt-8 md:mt-10">
            <img src={imgeeee} alt="" className="h-32 md:h-44" />
            <ul className="flex flex-col gap-3 md:gap-5 text-[#ffffff] font-semibold text-sm md:text-base">
              <Link to="/about">About</Link>
              <Link to="/recipes">Recipes</Link>
              <Link to="/tips">Tips</Link>
              <Link to="/community">Community Resources</Link>
              <Link to="/tandc">Terms & Conditions</Link>
              <Link to="/policy">Privacy Policy</Link>
            </ul>
            <div className="text-center">
              <a href="">
                <i className="fa-brands fa-youtube text-white text-2xl md:text-3xl"></i>
              </a>
              <p className="text-white font-semibold text-sm md:text-base mt-2">
                Discover more tasty recipes!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
