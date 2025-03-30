// src/Components/Community/Community.jsx
import React from "react";
import communityHeroImage from "../../assets/Community/community_image/communityImage.jpg"; // Hero image
import user1 from "../../assets/Community/community_image/user1.jpg"; // User profile images
import user2 from "../../assets/Community/community_image/user2.jpg";
import user3 from "../../assets/Community/community_image/user3.jpg";
import post1Image from "../../assets/Community/community_image/post1.jpg"; // Post images
import post2Image from "../../assets/Community/community_image/post2.jpg";
import post3Image from "../../assets/Community/community_image/post3.jpg";
import imgeeee from "../../assets/imageee.png";
import { Link } from "react-router-dom";

function Community() {
  return (
    <>
      <section className="min-h-screen flex flex-col mt-[100px]">
        {/* Hero Section */}
        <div className="relative w-full bg-white min-h-[700px] flex items-center justify-center overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between relative">
              <div
                className="w-full md:w-1/2 mb-8 md:mb-0 bg-[#E27D60] rounded-2xl shadow-2xl 
                                     md:absolute md:top-1/2 md:-translate-y-1/2 md:left-10 md:max-w-[500px] p-10"
              >
                <h1 className="text-4xl md:text-5xl text-[#FFFFFF] font-extrabold">
                  Join Our Foodie Community
                </h1>
                <p className="text-lg md:text-xl text-[#FFFFFF] poppins-regular  mt-9 max-w-2xl mx-auto">
                  Share your recipes, tips, and stories with fellow home cooks.
                  Let’s inspire each other to create delicious meals!
                </p>
                <button className="cursor-pointer items-center mt-4 p-2 md:p-3 bg-white text-[#E27D60] font-semibold rounded-lg poppins-semibold text-base md:text-lg hover:bg-gray-100">
                  Share Your Story
                </button>
              </div>
              <div className="w-full md:w-3/3 md:ml-[300px]">
                <img
                  src={communityHeroImage}
                  alt="Cooking girl"
                  className="w-full h-[400px] md:h-[600px] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Community Posts Section */}
        <section className="w-full px-4 py-12 bg-gray-100 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-800 font-extrabold mb-8 text-center">
            Community Contributions
          </h2>
          <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Post 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src={post1Image}
                alt="Post 1"
                className="w-full h-48 md:h-56 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center mb-3">
                  <img
                    src={user1}
                    alt="User 1"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="text-gray-800 font-semibold">Sarah M.</p>
                    <p className="text-gray-500 text-sm">2 days ago</p>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  My Go-To Veggie Stir-Fry
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  I used leftover veggies from my fridge to make this quick
                  stir-fry. Added some soy sauce and sesame seeds—my kids loved
                  it!
                </p>
              </div>
            </div>

            {/* Post 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src={post2Image}
                alt="Post 2"
                className="w-full h-48 md:h-56 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center mb-3">
                  <img
                    src={user2}
                    alt="User 2"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="text-gray-800 font-semibold">James T.</p>
                    <p className="text-gray-500 text-sm">1 week ago</p>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Stale Bread Croutons
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Turned my stale bread into croutons for a salad. Just tossed
                  with olive oil, garlic, and herbs—so easy and delicious!
                </p>
              </div>
            </div>

            {/* Post 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src={post3Image}
                alt="Post 3"
                className="w-full h-48 md:h-56 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center mb-3">
                  <img
                    src={user3}
                    alt="User 3"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="text-gray-800 font-semibold">Emily R.</p>
                    <p className="text-gray-500 text-sm">3 days ago</p>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Fruit Smoothie Hack
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Blended overripe fruits with yogurt for a quick smoothie.
                  Added a handful of spinach—no one even noticed!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <div className="bg-gray-200 p-4 md:p-8 flex items-center flex-col">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 lg:gap-28 place-items-center mt-8 md:mt-10">
            <img src={imgeeee} alt="" className="h-32 md:h-44" />
            <ul className="flex flex-col gap-3 md:gap-5 text-gray-800 font-semibold text-sm md:text-base">
              <Link to="/about">About</Link>
              <Link to="/recipes">Recipes</Link>
              <Link to="/tips">Tips</Link>
              <Link to="/community">Community Resources</Link>
              <Link to="/tandc">Terms & Conditions</Link>
              <Link to="/policy">Privacy Policy</Link>
            </ul>
            <div className="text-center">
              <a href="">
                <i className="fa-brands fa-youtube text-gray-800 text-2xl md:text-3xl"></i>
              </a>
              <p className="text-gray-800 font-semibold text-sm md:text-base mt-2">
                Discover more tasty recipes!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Community;
