import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Credit() {
  const [creditBalance, setCreditBalance] = useState(null);
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
    setCreditBalance(prevBalance => prevBalance + withdrawAmount);
    setWithdrawAmount(0);
  }

  function handleWithdrawAmountChange(event) {
    setWithdrawAmount(Number(event.target.value));
  }

  return (
    <div>
      <h1>Credit Amount: {creditBalance}</h1>
      <p>Withdraw Amount:</p>
      <input type="number" value={withdrawAmount} onChange={handleWithdrawAmountChange} />
      <button onClick={addCredit}>Withdraw</button>
    </div>
  );
}

export default Credit;
