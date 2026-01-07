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
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/placements`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (res.status === 401) {
    localStorage.removeItem("token");
    window.location.reload();
    return;
  }

  return res.json();
};

export const createPlacement = async (data) => {
  const token = localStorage.getItem("token");

  const res = await fetch("http://localhost:5000/api/placements", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  return res.json();
};
export const deletePlacement = async (id) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/placements/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
};

export const updatePlacement = async (id, data) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/placements/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  return res.json();
};


