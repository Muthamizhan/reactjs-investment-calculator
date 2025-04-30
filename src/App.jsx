import { useState } from "react";
import Header from "./components/header";
import UserInput from "./components/UserInputs";
import { calculateInvestmentResults } from "./util/investment";
import { InvestmentTable } from "./components/InvestmentTable";

const initialValue = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInput, setUserInput] = useState(initialValue);

  function handleChange(key, value) {
    setUserInput((prevValue) => {
      const newValue = { ...prevValue, [key]: +value };
      return newValue;
    });
  }

  return (
    <>
      <Header />
      <UserInput
        userInitialInput={userInput}
        onValueChangeCalculation={handleChange}
      />
      <InvestmentTable userInput={userInput} />
    </>
  );
}

export default App;
