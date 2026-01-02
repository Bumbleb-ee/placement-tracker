import { useEffect, useState } from "react";
import { getPlacements ,createPlacement, deletePlacement, updatePlacement }   from "../services/api";

function Dashboard() {
  const [placements, setPlacements] = useState([]);
  const [companyName, setCompanyName] = useState("");
const [role, setRole] = useState("");
const [status, setStatus] = useState("Applied");
const [notes, setNotes] = useState("");

  useEffect(() => {
    fetchPlacements();
  }, []);

  const fetchPlacements = async () => {
    const data = await getPlacements();
    setPlacements(data);
  };
  const handleSubmit = async (e) => {
  e.preventDefault();

  const newPlacement = {
    companyName,
    role,
    status,
    notes,
  };

  await createPlacement(newPlacement);

  const updated = await getPlacements();
  setPlacements(updated);

  setCompanyName("");
  setRole("");
  setNotes("");
};
const handleDelete = async (id) => {
  await deletePlacement(id);
  const updated = await getPlacements();
  setPlacements(updated);
};
const handleStatusUpdate = async (id) => {
  await updatePlacement(id, { status: "Interview" });
  const updated = await getPlacements();
  setPlacements(updated);
};
const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.reload();
};

  return (
    <div>
      <h1>Dashboard</h1>
      <p>You are logged in</p>

      <h2>Your Placements</h2>

      {placements.length === 0 ? (
        <p>No placements added yet</p>
      ) : (
        placements.map((p) => (
  <div className="placement" key={p._id}>
    <strong>{p.companyName}</strong>
    <span>{p.role}</span>

    <span
      className={`badge ${
        p.status === "Interview" ? "interview" : "applied"
      }`}
    >
      {p.status}
    </span>

    <button
      className="secondary"
      onClick={() => handleStatusUpdate(p._id)}
    >
      Interview
    </button>

    <button
      className="delete"
      onClick={() => handleDelete(p._id)}
    >
      Delete
    </button>
  </div>
))

      )}
      <h3>Add Placement</h3>

<form onSubmit={handleSubmit}>
  <input
    placeholder="Company Name"
    value={companyName}
    onChange={(e) => setCompanyName(e.target.value)}
    required
  />

  <input
    placeholder="Role"
    value={role}
    onChange={(e) => setRole(e.target.value)}
  />

  <input
    placeholder="Status"
    value={status}
    onChange={(e) => setStatus(e.target.value)}
  />

  <input
    placeholder="Notes"
    value={notes}
    onChange={(e) => setNotes(e.target.value)}
  />

  <button type="submit">Add</button>
</form>
<button onClick={handleLogout}>Logout</button>

    </div>
    
  );
  
}

export default Dashboard;
