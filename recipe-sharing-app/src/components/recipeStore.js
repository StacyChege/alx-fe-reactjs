import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  setSearchTerm: (term) =>
    set((state) => {
      const lowerTerm = term.toLowerCase();
      const filtered = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(lowerTerm)
      );
      return {
        searchTerm: term,
        filteredRecipes: filtered,
      };
    }),
  setRecipes: (newRecipes) =>
    set((state) => {
      const filtered = newRecipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
      return {
        recipes: newRecipes,
        filteredRecipes: filtered,
      };
    }),
}));
