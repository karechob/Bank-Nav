import React, { useState } from "react";

function Debit(props) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  let date = new Date().toLocaleDateString();

  function handleForm(event) {
    event.preventDefault();

    const debitStatement = { description, amount };
    props.subDebit(debitStatement);

    setDescription("");
    setAmount("");
  }

  return (
    <div>
      <div className="container">
        <h1 className="heading">DEBIT BALANCE ${props.debitBalance}</h1>
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
          <label>Retrieve funds:</label>
          <br />
          <input
            placeholder="Add Debit"
            type="number"
            className="input-field"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
          <br />
          <button type="submit">Submit</button>
        </form>

        <div className="history">
          <h3>Your debit history:</h3>
          {props.debitExpenses.map((item, index) => (
            <div key={index} className="history-item">
              <p>TRANSACTION_ID: {Math.round(Math.random() * 1000000)}</p>
              <p>Date: {date}</p>
              <p>Description: {item.description}</p>
              <p>Amount: {item.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Debit;
