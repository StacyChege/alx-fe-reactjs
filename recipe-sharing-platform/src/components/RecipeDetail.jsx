import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data.json"; // adjust path if needed

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = data.find((item) => item.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="p-6 text-center text-gray-500">
        <p className="text-lg mb-4">Recipe not found</p>
        <Link
          to="/"
          className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition"
        >
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Back Button */}
      <div className="mb-6">
        <Link
          to="/"
          className="inline-block px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-700 transition"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Recipe Header */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">{recipe.title}</h1>
        <p className="text-gray-600 mt-2">{recipe.summary}</p>
      </header>

      {/* Image + Details in Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-72 object-cover rounded-xl shadow"
        />

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
          {recipe.ingredients?.length ? (
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {recipe.ingredients.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No ingredients provided.</p>
          )}
        </div>
      </div>

      {/* Cooking Instructions */}
      <section className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Cooking Instructions</h2>
        {recipe.instructions?.length ? (
          <ol className="list-decimal list-inside space-y-3 text-gray-700 leading-relaxed">
            {recipe.instructions.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        ) : (
          <p className="text-gray-600">No instructions provided.</p>
        )}
      </section>
    </div>
  );
}
