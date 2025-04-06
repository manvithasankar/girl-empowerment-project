import './App.css';
import MainNavBar from "./MainNavBar";

import { BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <MainNavBar />
        {/* Other components can go here */}
      </Router>
    </div>
  );
}

export default App;
