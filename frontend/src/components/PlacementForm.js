import { useState } from "react";

function PlacementForm({ onAdd }) {
  const [companyName, setCompanyName] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");
  const [notes, setNotes] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onAdd({ companyName, role, status, notes });

    setCompanyName("");
    setRole("");
    setNotes("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
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
  );
}

export default PlacementForm;
