import React, { useEffect, useState } from "react";
import cookingGirl1 from "../../assets/Community/CookingGirl1.jpg";
import recipeImage from "../../assets/Community/recipe_image.jpg";
import imgeeee from "../../assets/imageee.png";
import { Link } from "react-router-dom";

function RecipePage() {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [mealType, setMealType] = useState("");
  const [timeInMin, setTimeInMin] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [specialDiet, setSpecialDiet] = useState("");
  const [typeOfMeal, setTypeOfMeal] = useState("");

  useEffect(() => {
    const fetchInitialRecipes = async () => {
      setLoading(true);
      setError(null);

      try {
        const apiKey = "2b35678998a946e8b0f175fbb5db167f";
        const response = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=12`
        );
        if (!response.ok) {
          throw new Error(
            `Failed to fetch initial recipes: ${response.statusText}`
          );
        }
        const data = await response.json();
        console.log("Initial API Response:", data);
        if (!data.recipes) {
          throw new Error("No recipes found in the API response");
        }
        setRecipes(data.recipes);
        setFilteredRecipes(data.recipes);
      } catch (err) {
        console.error("Fetch Error:", err);
        setError(err.message);
        setRecipes([]);
        setFilteredRecipes([]);
      } finally {
        setLoading(false);
      }
    };
    fetchInitialRecipes();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      const apiKey = "2b35678998a946e8b0f175fbb5db167f";
      // Build the query for complexSearch
      let query = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=20`;
      if (searchQuery) query += `&query=${encodeURIComponent(searchQuery)}`;
      if (timeInMin)
        query += `&maxReadyTime=${timeInMin === "999" ? 999 : timeInMin}`;
      if (mealType) query += `&type=${mealType.toLowerCase()}`;
      if (specialDiet) query += `&diet=${specialDiet.toLowerCase()}`;
      if (typeOfMeal) query += `&type=${typeOfMeal.toLowerCase()}`;

      const response = await fetch(query);
      if (!response.ok) {
        throw new Error(`Failed to fetch recipes: ${response.statusText}`);
      }
      const data = await response.json();
      console.log("Search API Response:", data);
      const fetchedRecipes = data.results || [];
      setFilteredRecipes(fetchedRecipes);
      setRecipes(fetchedRecipes); // Update recipes to match the search results
    } catch (err) {
      console.error("Search Error:", err);
      setError(err.message);
      setFilteredRecipes([]);
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setSearchQuery("");
    setTimeInMin("");
    setMealType("");
    setSpecialDiet("");
    setTypeOfMeal("");
    // Fetch initial recipes again to reset
    const fetchInitialRecipes = async () => {
      setLoading(true);
      setError(null);

      try {
        const apiKey = "2b35678998a946e8b0f175fbb5db167f";
        const response = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=12`
        );
        if (!response.ok) {
          throw new Error(
            `Failed to fetch initial recipes: ${response.statusText}`
          );
        }
        const data = await response.json();
        if (!data.recipes) {
          throw new Error("No recipes found in the API response");
        }
        setRecipes(data.recipes);
        setFilteredRecipes(data.recipes);
      } catch (err) {
        setError(err.message);
        setRecipes([]);
        setFilteredRecipes([]);
      } finally {
        setLoading(false);
      }
    };
    fetchInitialRecipes();
  };

  return (
    <>
      <section className="min-h-screen flex flex-col mt-[100px]">
        <div className="relative w-full bg-white min-h-[700px] flex items-center justify-center overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between relative">
              <div
                className="w-full md:w-1/2 mb-8 md:mb-0 bg-[#E27D60] rounded-2xl shadow-2xl 
                               md:absolute md:top-1/2 md:-translate-y-1/2 md:left-10 md:max-w-[500px] p-10"
              >
                <h1 className="text-4xl md:text-5xl text-[#FFFFFF] font-extrabold">
                  Discover, Cook, Enjoy – Your Recipe Journey Starts Here!
                </h1>
              </div>
              <div className="w-full md:w-3/3 md:ml-[300px]">
                <img
                  src={cookingGirl1}
                  alt="Cooking girl"
                  className="w-full h-[400px] md:h-[600px] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <section className="py-12 bg-[#ffffff] w-full">
          <div className="max-w-6xl mx-auto px-4">
            {/* Slogan and Image */}
            <div className="flex flex-col md:flex-col items-center justify-center mb-8">
              <div className="md:w-full text-center md:text-center">
                <h2 className="poppins-semibold text-3xl md:text-4xl font-bold text-[#E27D60] mb-4">
                  Find Your Perfect Recipe
                </h2>
                <p className="poppins-medium text-lg md:text-xl text-[#bd5c41] mb-6">
                  Use filters to find meals and snacks that fit your
                  preferences.
                </p>
              </div>
              <div className="md:w-1/2">
                <img
                  src={recipeImage}
                  alt="Kitchen Counter with Ingredients and Recipe App"
                  className="w-full max-w-md rounded-lg mx-auto"
                />
              </div>
            </div>

            <form
              onSubmit={handleSearch}
              className="flex flex-col md:flex-col gap-4 justify-center items-center mb-8"
            >
              {/* Search Bar */}
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Search for a recipe (e.g., pasta, chicken)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="p-3 rounded-lg w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E27D60]"
                />
              </div>
              {/* Time Taken */}
              <div className="flex flex-row gap-4 w-full items-center justify-center">
                <select
                  value={timeInMin}
                  onChange={(e) => setTimeInMin(e.target.value)}
                  className="p-3 rounded-lg w-full cursor-pointer md:w-1/5 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E27D60]"
                >
                  <option value="">Time Taken</option>
                  <option value="30">Under 30 mins</option>
                  <option value="60">30-60 mins</option>
                  <option value="999">Over 60 mins</option>
                </select>

                {/* Meal Type */}
                <select
                  value={mealType}
                  onChange={(e) => setMealType(e.target.value)}
                  className="p-3 rounded-lg w-full cursor-pointer md:w-1/5 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E27D60]"
                >
                  <option value="">Meal Type</option>
                  <option value="breakfast">Breakfast</option>
                  <option value="lunch">Lunch</option>
                  <option value="dinner">Dinner</option>
                  <option value="snack">Snack</option>
                </select>

                {/* Special Diet */}
                <select
                  value={specialDiet}
                  onChange={(e) => setSpecialDiet(e.target.value)}
                  className="p-3 rounded-lg w-full cursor-pointer md:w-1/5 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E27D60]"
                >
                  <option value="">Special Diet</option>
                  <option value="vegan">Vegan</option>
                  <option value="glutenfree">Gluten-Free</option>
                  <option value="ketogenic">Keto</option>
                  <option value="vegetarian">Vegetarian</option>
                </select>

                {/* Type of Meal */}
                <select
                  value={typeOfMeal}
                  onChange={(e) => setTypeOfMeal(e.target.value)}
                  className="p-3 rounded-lg w-full cursor-pointer md:w-1/5 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E27D60]"
                >
                  <option value="">Type of Meal</option>
                  <option value="main course">Main Course</option>
                  <option value="dessert">Dessert</option>
                  <option value="appetizer">Appetizer</option>
                  <option value="salad">Salad</option>
                </select>
              </div>

              {/* Submit and Clear Buttons */}
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="p-3 cursor-pointer bg-[#E27D60] text-white rounded-lg poppins-semibold text-lg hover:bg-[#bd5c41]"
                >
                  Search Recipes
                </button>
                <button
                  type="button"
                  onClick={handleClear}
                  className="p-3 bg-gray-300 cursor-pointer text-white rounded-lg poppins-semibold text-lg hover:bg-gray-400"
                >
                  Clear Filters
                </button>
              </div>
            </form>

            {/* Recipe Results */}
            {loading ? (
              <p className="poppins-regular text-gray-600 text-center">
                Loading recipes...
              </p>
            ) : error ? (
              <p className="poppins-regular text-red-500 text-center">
                Error: {error}
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredRecipes.length > 0 ? (
                  filteredRecipes.map((recipe) => (
                    <div
                      key={recipe.id}
                      className="bg-white rounded-lg shadow-lg p-4 text-center"
                    >
                      <img
                        src={recipe.image || "https://via.placeholder.com/150"}
                        alt={recipe.title}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <h3 className="poppins-medium text-xl text-[#bd5c41] mb-2">
                        {recipe.title}
                      </h3>
                      <p className="poppins-regular text-gray-600">
                        Ready in {recipe.readyInMinutes || "N/A"} mins
                      </p>
                      <Link
                        to={`/recipe/${recipe.id}`}
                        className="mt-3 inline-block p-2 bg-[#E27D60] text-white rounded-lg poppins-medium hover:bg-[#bd5c41]"
                      >
                        View Recipe
                      </Link>
                    </div>
                  ))
                ) : (
                  <p className="poppins-regular text-gray-600 text-center col-span-3">
                    No recipes found. Try adjusting your search criteria!
                  </p>
                )}
              </div>
            )}
          </div>
        </section>
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
    </>
  );
}

export default RecipePage;
