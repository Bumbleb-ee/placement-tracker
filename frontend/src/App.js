import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
  const token = localStorage.getItem("token");

  if (token) {
    return <Dashboard />;
  }

  return (
    <div>
      <Register />
      <hr />
      <Login />
    </div>
  );
}

export default App;
