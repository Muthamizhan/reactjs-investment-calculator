import { useState } from "react";

export default function UserInput({ userInputs, onValueChangeCalculation }) {
  const [userInitialInput, setUserInitialInput] = useState(userInputs);

  function handleChange(key, value) {
    setUserInitialInput((prevValue) => {
      const newValue = { ...prevValue, [key]: +value };
      console.log(newValue);
      return newValue;
    });
  }

  function handleClick() {
    setUserInitialInput(userInputs);
    onValueChangeCalculation(userInitialInput);
  }
  return (
    <section id="user-input">
      <div className="input-group">
        <div>
          <label>Initial Investment</label>
          <input
            type="number"
            onChange={() =>
              handleChange("initialInvestment", event.target.value)
            }
            value={userInitialInput.initialInvestment}
          />
        </div>
        <div>
          <label>Annual Investment</label>
          <input
            type="number"
            onChange={() =>
              handleChange("annualInvestment", event.target.value)
            }
            value={userInitialInput.annualInvestment}
          />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label>Expected Return</label>
          <input
            type="number"
            onChange={() => handleChange("expectedReturn", event.target.value)}
            value={userInitialInput.expectedReturn}
          />
        </div>
        <div>
          <label>Duration</label>
          <input
            type="number"
            onChange={() => handleChange("duration", event.target.value)}
            value={userInitialInput.duration}
          />
        </div>
      </div>

      <div className="input-group">
        <button onClick={handleClick}>Calculate</button>
      </div>
    </section>
  );
}
