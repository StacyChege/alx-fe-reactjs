import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import RecipeDetails from './RecipeDetails';




function App() {
  return (
    <div className="App">
      <h1>🍲 Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
};

export default App;

export default App;
