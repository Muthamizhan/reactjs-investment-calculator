export default function UserInput({
  userInitialInput,
  onValueChangeCalculation,
}) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            onChange={(event) =>
              onValueChangeCalculation("initialInvestment", event.target.value)
            }
            value={userInitialInput.initialInvestment}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            onChange={(event) =>
              onValueChangeCalculation("annualInvestment", event.target.value)
            }
            value={userInitialInput.annualInvestment}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            onChange={(event) =>
              onValueChangeCalculation("expectedReturn", event.target.value)
            }
            value={userInitialInput.expectedReturn}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            onChange={(event) =>
              onValueChangeCalculation("duration", event.target.value)
            }
            value={userInitialInput.duration}
          />
        </p>
      </div>

    </section>
  );
}
