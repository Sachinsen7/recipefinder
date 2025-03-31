import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Import Swiper modules
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const RecipeSwiper = ({ recipe }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch recipes from Spoonacular API
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          "https://api.spoonacular.com/recipes/random?apiKey=2b35678998a946e8b0f175fbb5db167f&number=5"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch recipes");
        }
        const data = await response.json();
        setRecipes(data.recipes);
        setLoading(false);
        console.log(data.recipes);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchRecipes();
  }, []);

  if (loading)
    return (
      <div className="text-center poppins-regular text-lg">Loading...</div>
    );
  if (error)
    return (
      <div className="text-center poppins-regular text-lg text-red-500">
        Error: {error}
      </div>
    );

  return (
    <div className="bg-[#E8F9FF] py-14 relative">
      <section className="max-w-[1250px] mx-auto flex flex-col md:flex-row items-center gap-1 md:relative">
        {/* Creamy Beige background */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-7">
          <div className="md:w-3xl text-center md:text-left p-6">
            <h1 className="md:text-3xl text-2xl text-[#bd5c41] font-extrabold">
              Explore Delicious Recipes
            </h1>
            <p className="text-[#4A4A4A] md:text-xl text-lg font-medium mt-6 inline-block">
              Discover new dishes with easy step-by-step guides <br /> and
              cooking times.
            </p>
            <p className="text-[#4A4A4A] text-base font-bold mt-6 mb-14 block">
              Swipe for Recipes.
            </p>
            <Link
              to={"/tips"}
              className="mt-16 mb-5 ml-2.5 py-4 px-10 bg-[#E27D60] hover:bg-[#bd5c41] text-white rounded-lg font-bold text-lg cursor-pointer"
            >
              Get Tips
            </Link>
          </div>
        </div>
        {/* Swiper Component */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 1 },
          }}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          className="mySwiper bg-white max-w-[350px] flex items-center rounded-2xl shadow-2xl"
        >
          {recipes.map((recipe) => (
            <SwiperSlide key={recipe.id}>
              <div className="overflow-hidden max-w-xs mx-auto p-2 flex items-center">
                <div>
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full my-3 h-52 object-cover"
                  />
                  <div>
                    <h3 className="poppins-medium text-xl text-[#2b2a2a]">
                      {recipe.title}
                    </h3>
                    <p className="poppins-regular text-sm text-gray-600 mt-2">
                      Total Time: {recipe.readyInMinutes} minutes
                    </p>
                    <p className="poppins-regular text-sm text-gray-600 mt-1.5">
                      Serves: {recipe.servings}
                    </p>
                    <p className="poppins-regular text-sm text-gray-600 mt-2">
                      {recipe.diets.length > 0
                        ? recipe.diets.join(", ")
                        : "No specific diets"}
                    </p>
                    <a
                      href={`/recipe/${recipe.id}`}
                      className="mt-6 inline-block p-2 px-7 bg-[#E27D60] text-white rounded-lg poppins-medium hover:bg-[#d66a4b]"
                    >
                      View Recipe
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom Navigation Arrows */}
        <div className="custom-prev absolute bottom-0 md:top-1/2 left-12 md:left-[770px] md:right-[435px] transform -translate-y-1/2 z-10 bg-[#E27D60] rounded-lg hover:bg-[#d66a4b] w-12 h-12 flex items-center justify-center">
          <i className="fas fa-chevron-left text-[#EEEEEE] text-xl cursor-pointer"></i>
        </div>
        <div className="custom-next absolute bottom-0 md:top-1/2 right-10 md:right-0 transform -translate-y-1/2 z-10 bg-[#E27D60] rounded-lg hover:bg-[#d66a4b] w-12 h-12 flex items-center justify-center">
          <i className="fas fa-chevron-right text-[#EEEEEE] text-xl cursor-pointer"></i>
        </div>
      </section>
      <div className="h-8"></div>
    </div>
  );
};

export default RecipeSwiper;
