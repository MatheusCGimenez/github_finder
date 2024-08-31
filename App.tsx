import { Outlet } from "react-router-dom";
import "./App.css"

function App() {
  return (
    <div className="container">
        <h1>GITHUB FINDER</h1>
        <Outlet />
    </div>
  );
}

export default App;
