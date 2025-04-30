import { calculateInvestmentResults, formatter } from "../util/investment";

export function InvestmentTable({ userInput }) {
  let results = calculateInvestmentResults(userInput);

  return (
    <table id="result">
      <thead className="thead">
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Intrest(Year)</th>
          <th>Total Intrest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody className="tbody">
        {results.map((result) => {
          let totalIntrest =
            result.valueEndOfYear -
            result.annualInvestment * result.year -
            userInput.initialInvestment;

          const totalAmountInvested = result.valueEndOfYear - totalIntrest;
          return (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>{formatter.format(result.annualInvestment)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(totalIntrest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
