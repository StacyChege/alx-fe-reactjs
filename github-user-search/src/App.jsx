import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './components/Search';
import './App.css';


const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-center text-3xl font-bold mt-6">GitHub User Search</h1>
      <Search />
    </div>
  );
};

import React from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>GitHub User Search</h1>
        <Routes>
          <Route path="/" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
