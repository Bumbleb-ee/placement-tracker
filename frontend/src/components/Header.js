function Header({ onLogout }) {
  return (
    <div className="header">
      <h1>Dashboard</h1>
      <button className="secondary" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}

export default Header;
