import React, { useEffect, useState } from 'react';

function Balance({ creditBalance, debitBalance }) {
  const [accountBalance, setAccountBalance] = useState(0);

  useEffect(() => {
    const newBalance = creditBalance - debitBalance;
    setAccountBalance(newBalance);
  }, [creditBalance, debitBalance]);

  return <div>Current Balance: {accountBalance}</div>;
}

export default Balance;