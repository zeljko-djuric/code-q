const BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchComments = async () => {
  const response = await fetch(`${BASE_URL}/comments`);
  const data = await response.json();
  return data;
};

export const fetchUsers = async () => {
  const response = await fetch(`${BASE_URL}/users`);
  const data = await response.json();
  return data;
};

export const fetchPosts = async () => {
  const response = await fetch(`${BASE_URL}/posts`);
  const data = await response.json();
  return data;
};
