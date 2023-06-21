import React, { useEffect, useState } from 'react';
import Debit from './Debit';
import Credit from './Credit';

function Balance() {
  const [creditBalance, setCreditBalance] = useState(0);
  const [debitBalance, setDebitBalance] = useState(0);
  const [accountBalance, setAccountBalance] = useState(0);



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

  return (
    <div>
      <h1>Balance: {accountBalance}</h1>
      <Debit handleDebit={handleDebit} />
      <Credit handleCredit={handleCredit} />
    </div>
  );
}

export default Balance;

/*




*/