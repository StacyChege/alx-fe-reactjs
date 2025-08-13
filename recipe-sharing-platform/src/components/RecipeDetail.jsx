import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe with the matching ID
    const foundRecipe = data.find((item) => item.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <p className="text-center mt-10 text-lg">Recipe not found</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full rounded-lg shadow-lg"
      />
      <h1 className="text-3xl font-bold mt-6">{recipe.title}</h1>
      <p className="mt-4 text-gray-700">{recipe.summary}</p>
    </div>
  );
}
