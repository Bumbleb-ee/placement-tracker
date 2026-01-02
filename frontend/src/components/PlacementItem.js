function PlacementItem({ placement, onDelete, onInterview }) {
  return (
    <div className="placement">
      <strong>{placement.companyName}</strong>
      <span>{placement.role}</span>

      <span
        className={`badge ${
          placement.status === "Interview" ? "interview" : "applied"
        }`}
      >
        {placement.status}
      </span>

      <button
        className="secondary"
        onClick={() => onInterview(placement._id)}
        disabled={placement.status === "Interview"}
      >
        Interview
      </button>

      <button
        className="delete"
        onClick={() => onDelete(placement._id)}
      >
        Delete
      </button>
    </div>
  );
}

export default PlacementItem;
