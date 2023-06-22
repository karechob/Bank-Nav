
function Credit({preps}) {

  return (
    <div>
      <h1>Credit Amount: {preps}</h1>
      <p>Add Amount:</p>
      <input type="number" value={preps} onChange={preps} />
      <button onClick={preps}>Submit</button>
    </div>
  );
}

export default Credit;

/**
 *          // const [creditBalance, setCreditBalance] = useState(0);
  // const [withdrawAmount, setWithdrawAmount] = useState(0);

  // useEffect(() => {
  //   axios
  //     .get('https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/credits')
  //     .then(response => {
  //       setCreditBalance(response.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, []);

  // function addCredit() {
  //   handleCredit(withdrawAmount);
  //   setWithdrawAmount(0);
  // }

  // function handleWithdrawAmountChange(event) {
  //   setWithdrawAmount(Number(event.target.value));
  // }
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */