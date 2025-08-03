import axios from "axios";

const BASE_URL = "https://api.github.com/search/users";


export const fetchAdvancedGitHubUsers = async (username, location, minRepos) => {
  let query = "";

  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  try {
    const response = await axios.get(`${BASE_URL}?q=${query}`);
    return response.data.items;
  } catch (error) {
    console.error("GitHub API error:", error);
    throw error;
  }
};

export const fetchGitHubUser = async (username) => {
  try {
    const response = await fetch(`${BASE_URL}/${username}`);
    if (!response.ok) throw new Error("User not found");
    return await response.json();
  } catch (error) {
    console.error("GitHub API error:", error);
    throw error;
  }
};
