// frontend/src/services/api.js
const API_BASE_URL = import.meta.env.PROD 
  ? '/api'  // Same domain (Nginx will proxy)
  : 'http://localhost:3000/api';

// Example API call
export const loginUser = async (userData) => {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  });
  return response.json();
};