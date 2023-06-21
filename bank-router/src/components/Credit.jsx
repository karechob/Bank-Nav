import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Credit({ handleCredit }) {
  const [creditBalance, setCreditBalance] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState(0);

  useEffect(() => {
    axios
      .get('https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/credits')
      .then(response => {
        setCreditBalance(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  function addCredit() {
    handleCredit(withdrawAmount);
    setWithdrawAmount(0);
  }

  function handleWithdrawAmountChange(event) {
    setWithdrawAmount(Number(event.target.value));
  }

  return (
    <div>
      <h1>Credit Amount: {creditBalance}</h1>
      <p>Add Amount:</p>
      <input type="number" value={withdrawAmount} onChange={handleWithdrawAmountChange} />
      <button onClick={addCredit}>Submit</button>
    </div>
  );
}

export default Credit;
