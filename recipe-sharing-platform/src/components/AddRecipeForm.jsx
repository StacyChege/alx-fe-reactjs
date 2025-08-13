import React, { useState } from "react";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState(""); // ✅ renamed from instructions
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Validation
    if (!title.trim()) newErrors.title = "Title is required.";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required.";
    else if (ingredients.split(",").length < 2)
      newErrors.ingredients = "Please enter at least 2 ingredients separated by commas.";
    if (!steps.trim()) newErrors.steps = "Steps are required."; // ✅ updated

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log({
        title,
        ingredients: ingredients.split(",").map((i) => i.trim()),
        steps: steps.split(".").map((s) => s.trim()), // ✅ updated
      });

      // Clear form
      setTitle("");
      setIngredients("");
      setSteps("");
      alert("Recipe submitted successfully!");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Add New Recipe</h1>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-xl p-6 space-y-4">
        {/* Title */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Ingredients (comma separated)</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="4"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
          ></textarea>
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>

        {/* Steps */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Preparation Steps (period separated)</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            rows="6"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
          ></textarea>
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gray-900 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-700 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}
