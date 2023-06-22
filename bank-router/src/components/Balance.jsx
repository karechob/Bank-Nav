// import React, { useEffect, useState } from 'react';
import Debit from './Debit';
import Credit from './Credit';

function Balance({props}) {


  return (
    <div>
      <h1>Balance: {props}</h1>
      <Debit handleDebit={props} />
      <Credit handleCredit={props} />
    </div>
  );
}

export default Balance;

/*

  const [creditBalance, setCreditBalance] = useState(0);
  const [debitBalance, setDebitBalance] = useState(0);
  const [accountBalance, setAccountBalance] = useState(0);

  useEffect(() => {
    axios
    .get('https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/debits')
    .then(response => {
      setDebitBalance(response.data);
    })
    .catch(error => {
      console.log(error);
    });    
    axios
    .get('https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/credits')
    .then(response => {
      setCreditBalance(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }, [])

  const handleCredit = (creditAmount) => {
    setCreditBalance(prevBalance => prevBalance + creditAmount);
  };

  const handleDebit = (debitAmount) => {
    setDebitBalance(prevBalance => prevBalance - debitAmount);
  };

  useEffect(() => {
    const newBalance = creditBalance - debitBalance;
    setAccountBalance(newBalance);
  }, [creditBalance, debitBalance]);




*/