// src/components/Search.jsx

import React, { useState } from "react";
import { searchGitHubUsers } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const fetchUserData = async (e) => {
    e.preventDefault();
    try {
      const data = await searchGitHubUsers(username, location, parseInt(minRepos));
      if (data.length === 0) {
        setError("Looks like we can't find the user");
        setUsers([]);
      } else {
        setError("");
        setUsers(data);
      }
    } catch (err) {
      setError("Something went wrong fetching the data");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <form onSubmit={fetchUserData} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Minimum Repositories (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded w-full">
          Search
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      <div className="mt-6 space-y-4">
        {users.map((user) => (
          <div key={user.id} className="p-4 border rounded shadow">
            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
            <p className="mt-2 font-semibold">{user.login}</p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
