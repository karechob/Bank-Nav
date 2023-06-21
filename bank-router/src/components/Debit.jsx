import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Debit( {handleDebit} ) {
  const [debitBalance, setDebitBalance] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  console.log(handleDebit)
  useEffect(() => {
    axios
      .get('https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/debits')
      .then(response => {
        setDebitBalance(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [debitBalance, withdrawAmount]);

  function subDebit() {
    handleDebit(withdrawAmount);
    setWithdrawAmount(0);
  }

  function handleWithdrawAmountChange(event) {
    setWithdrawAmount(Number(event.target.value));
  }

  return (
    <div>
      <h1>Debit Amount: {debitBalance}</h1>
      <p>Add Amount:</p>
      <input type="number" value={withdrawAmount} onChange={handleWithdrawAmountChange} />
      <button onClick={subDebit}>Submit</button>
    </div>
  );
}

export default Debit;

/*


*/