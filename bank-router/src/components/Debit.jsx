import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Debit() {
  const [debitBalance, setDebitBalance] = useState(null);
  const [withdrawAmount, setWithdrawAmount] = useState(0);

  useEffect(() => {
    axios
      .get('https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/debits')
      .then(response => {
        setDebitBalance(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  function subtractDebit() {
    setDebitBalance(prevBalance => prevBalance - withdrawAmount);
    setWithdrawAmount(0);
  }

  function handleWithdrawAmountChange(event) {
    setWithdrawAmount(Number(event.target.value));
  }

  return (
    <div>
      <h1>Debit Amount: {debitBalance}</h1>
      <p>Withdraw Amount:</p>
      <input type="number" value={withdrawAmount} onChange={handleWithdrawAmountChange} />
      <button onClick={subtractDebit}>Withdraw</button>
    </div>
  );
}

export default Debit;
