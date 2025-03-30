import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipePage from "./RecipePage.jsx";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        const apiKey = "2b35678998a946e8b0f175fbb5db167f";
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
        );
        if (!response.ok) {
          throw new Error(
            `Failed to fetch recipe details: ${response.statusText}`
          );
        }
        const data = await response.json();
        console.log("Recipe Details:", data);
        setRecipe(data);
      } catch (err) {
        console.error("Fetch Error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipeDetails();
  }, [id]);

  if (Loading) {
    return (
      <p className="poppins-regular text-gray-600 text-center">
        Loading recipe details...
      </p>
    );
  }

  if (error) {
    return (
      <p className="poppins-regular text-red-500 text-center">Error: {error}</p>
    );
  }

  if (!recipe) {
    return (
      <p className="poppins-regular text-gray-600 text-center">
        Recipe not found.
      </p>
    );
  }

  return (
    <>
      <section className="min-h-screen flex flex-col mt-[200px] bg-[#ffffff] py-12">
        <div className="max-w-4xl mx-auto px-4">
          {/* Recipe Title */}
          <h1 className="poppins-semibold text-4xl text-[#E27D60] mb-6 text-center">
            {recipe.title}
          </h1>

          {/* Large Photo */}
          <div className="mb-8">
            <img
              src={recipe.image || "https://via.placeholder.com/600"}
              alt={recipe.title}
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Recipe Info */}
          <div className="flex justify-between mb-8 text-gray-600 poppins-regular">
            <p>Ready in: {recipe.readyInMinutes} mins</p>
            <p>Servings: {recipe.servings}</p>
          </div>

          {/* Ingredients */}
          <div className="mb-8">
            <h2 className="poppins-semibold text-2xl text-[#bd5c41] mb-4">
              Ingredients
            </h2>
            <ul className="list-disc list-inside poppins-regular text-gray-600">
              {recipe.extendedIngredients &&
              recipe.extendedIngredients.length > 0 ? (
                recipe.extendedIngredients.map((ingredient) => (
                  <li key={ingredient.id}>{ingredient.original}</li>
                ))
              ) : (
                <p>No ingredients available.</p>
              )}
            </ul>
          </div>

          {/* Equipment/Materials */}
          <div className="mb-8">
            <h2 className="poppins-semibold text-2xl text-[#bd5c41] mb-4">
              Equipment Needed
            </h2>
            {recipe.analyzedInstructions &&
            recipe.analyzedInstructions.length > 0 ? (
              <ul className="list-disc list-inside poppins-regular text-gray-600">
                {recipe.analyzedInstructions[0].steps
                  .flatMap((step) => step.equipment)
                  .filter(
                    (equip, index, self) =>
                      equip &&
                      self.findIndex((e) => e.id === equip.id) === index
                  ) // Remove duplicates
                  .map((equip) => (
                    <li key={equip.id}>{equip.name}</li>
                  ))}
              </ul>
            ) : (
              <p>No equipment information available.</p>
            )}
          </div>

          {/* Instructions */}
          <div className="mb-8">
            <h2 className="poppins-semibold text-2xl text-[#bd5c41] mb-4">
              Instructions
            </h2>
            {recipe.analyzedInstructions &&
            recipe.analyzedInstructions.length > 0 ? (
              <ol className="list-decimal list-inside poppins-regular text-gray-600">
                {recipe.analyzedInstructions[0].steps.map((step) => (
                  <li key={step.number} className="mb-2">
                    {step.step}
                  </li>
                ))}
              </ol>
            ) : (
              <p>No instructions available.</p>
            )}
          </div>

          {/* Chef Notes (Using Summary) */}
          <div className="mb-8">
            <h2 className="poppins-semibold text-2xl text-[#bd5c41] mb-4">
              Chef Notes
            </h2>
            <p className="poppins-regular text-gray-600">
              {recipe.summary ? (
                <div dangerouslySetInnerHTML={{ __html: recipe.summary }} />
              ) : (
                "No chef notes available."
              )}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default RecipeDetail;
