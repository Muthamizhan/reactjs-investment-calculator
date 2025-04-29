import { useState } from "react";
import Header from "./components/header";
import UserInput from "./components/UserInputs";
import { calculateInvestmentResults } from "./util/investment";
import { InvestmentTable } from "./components/InvestmentTable";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const [results, setResults] = useState([])
  function handleValueChange(value){
    setResults(calculateInvestmentResults(value));
    console.log(results)
  }

  return (
    <>
      <Header />
      <UserInput
        userInputs={userInput}
        onValueChangeCalculation={handleValueChange}
      />
      {results.length > 0 && <InvestmentTable results={results}/>}
    </>
  );
}

export default App;
