import api from "./api";

/**
 * Login Admin
 */
export const loginAdmin = async (credentials) => {
  const response = await api.post("/auth/login", credentials);

  // Return only the response body
  return response.data;
};

/**
 * Register Admin
 */
export const registerAdmin = async (adminData) => {
  const response = await api.post("/auth/register", adminData);

  return response.data;
};