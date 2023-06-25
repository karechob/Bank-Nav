import React from "react";
import logo from "./bank-logo.png";

function Home() {
  return (
    <div>
      <h1>WELCOME</h1>
      <div className="bank-logo-container">
        <img className="bank-logo" src={logo} alt="bank logo" />
      </div>
      <h2>Please select an option above</h2>
    </div>
  );
}

export default Home;
