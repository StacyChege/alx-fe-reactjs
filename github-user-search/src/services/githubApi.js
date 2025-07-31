const BASE_URL = "https://api.github.com/users";

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
