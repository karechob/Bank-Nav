import React, { useState } from "react";

function Credit(props) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  function handleForm(event) {
    event.preventDefault();

    const creditStatement = { description, amount };
    props.addCredit(creditStatement);

    setDescription("");
    setAmount("");
  }

  return (
    <div>
      <div className="container">
        <h1 className="heading">CREDIT BALANCE ${props.creditBalance}</h1>
        <form onSubmit={handleForm} className="form-container">
          <label>Add description:</label>
          <br />
          <input
            placeholder="Add Description"
            type="text"
            className="input-field"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <br />
          <label>Add funds:</label>
          <br />
          <input
            placeholder="Add Credit"
            type="number"
            className="input-field"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
          <br />
          <button type="submit">Submit</button>
        </form>

        <div className="history">
          <h3>Your credit history:</h3>
          {props.creditExpenses.map((item, index) => (
            <div key={index} className="credit-item">
              <p>TRANSACTION_ID: {Math.round(Math.random() * 1000000)}</p>
              <p>Description: {item.description}</p>
              <p>Amount: {item.amount} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Credit;
