import React from 'react';
import Balance from './components/Balance';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Credit from './components/Credit';
import Debit from './components/Debit';


function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Balance/>
            </li>
            <li>
              <Link to="/credit">Credit</Link>
            </li>
            <li>
              <Link to="/debit">Debit</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/credit/*" element={<Credit />} />
          <Route path="/debit/*" element={<Debit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
