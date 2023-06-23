import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import Home from "./Home";
import Credit from "./Credit";
import Debit from "./Debit";

function BankContainer() {
  const [debitBalance, setDebitBalance] = useState(null);
  const [creditBalance, setCreditBalance] = useState(null);
  const [balance, setBalance] = useState(0);
  const [debitExpenses, setDebitExpenses] = useState([]);
  const [creditExpenses, setCreditExpenses] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        //retrieves data from /credits
        const creditData = await axios.get(
          "https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/credits"
        );
        setCreditBalance(creditData.data);

        //retrieves data from /debits
        const debitData = await axios.get(
          "https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/debits"
        );
        setDebitBalance(debitData.data);

        setBalance(Number(creditData.data - debitData.data));
      } catch (error) {
        console.log(error);
        alert("Could not retrieve information, please try again.");
      }
    }
    fetchData();
  }, []);

  const addDebit = (debitBalance) => {
    setDebitBalance(
      (previousDebit) => Number(previousDebit) + Number(debitBalance.amount)
    );
    setBalance((previousBalance) => previousBalance - debitBalance.amount);
    setDebitExpenses([...debitExpenses, debitBalance]);
  };

  const addCredit = (creditBalance) => {
    setCreditBalance(
      (previousCredit) => Number(previousCredit) + Number(creditBalance.amount)
    );
    setBalance(
      (previousBalance) => previousBalance + Number(creditBalance.amount)
    );
    setCreditExpenses([...creditExpenses, creditBalance]);
  };

  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <nav>
          <ul>
            <li>
              <h1>Balance: {balance}</h1>
            </li>
            <li>
              <Link to="/Bank-Nav/">Home</Link>
            </li>
            <li>
              <Link to="/Bank-Nav/credit">Credit</Link>
            </li>
            <li>
              <Link to="/Bank-Nav/debit">Debit</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/Bank-Nav/" element={<Home />} />
          <Route
            path="/Bank-Nav/credit/*"
            element={
              <Credit
                addCredit={addCredit}
                creditBalance={creditBalance}
                creditExpenses={creditExpenses}
              />
            }
          />
          <Route
            path="/Bank-Nav/debit/*"
            element={
              <Debit
                addDebit={addDebit}
                debitBalance={debitBalance}
                debitExpenses={debitExpenses}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default BankContainer;

/*

make all api calls here
pass them down
all state variables


look up async

for deployment
/Bank-Nav

*/
