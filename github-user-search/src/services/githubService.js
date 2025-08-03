import axios from "axios";

const BASE_URL = "https://api.github.com/search/users?q=";

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/${username}`);
    return response.data;
  } catch (error) {
    console.error("GitHub API error:", error);
    throw error;
  }
};

export const searchGitHubUsers = async (username, location = "", minRepos = 0) => {
  try {
    let query = `${username}`;

    if (location) query += `+location:${location}`;
    if (minRepos > 0) query += `+repos:>=${minRepos}`;

    const response = await fetch(`${BASE_URL}${query}`);
    if (!response.ok) throw new Error("Failed to fetch GitHub users");

    const data = await response.json();
    return data.items; // array of user objects
  } catch (error) {
    console.error("GitHub Search API error:", error);
    throw error;
  }
};
