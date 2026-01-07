const API_URL = "https://placement-tracker-backend-15g4.onrender.com/api";

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
};

export const registerUser = async (data) => {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const loginUser = async (data) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const getPlacements = async () => {
  const res = await fetch(`${API_URL}/placements`, {
    headers: getAuthHeaders(), // ✅ USED HERE
  });
  return res.json();
};

export const createPlacement = async (data) => {
  const res = await fetch(`${API_URL}/placements`, {
    method: "POST",
    headers: getAuthHeaders(), // ✅ USED HERE
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deletePlacement = async (id) => {
  const res = await fetch(`${API_URL}/placements/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(), // ✅ USED HERE
  });
  return res.json();
};

export const updatePlacement = async (id, data) => {
  const res = await fetch(`${API_URL}/placements/${id}`, {
    method: "PUT",
    headers: getAuthHeaders(), // ✅ USED HERE
    body: JSON.stringify(data),
  });
  return res.json();
};
