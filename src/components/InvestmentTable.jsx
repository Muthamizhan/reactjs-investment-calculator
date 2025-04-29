export function InvestmentTable({ results }) {
  let totalIntrest = 0;
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
          totalIntrest +=result.interest;
          return (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>{result.annualInvestment.toFixed(2)}</td>
              <td>{result.interest.toFixed(2)}</td>
              <td>{totalIntrest.toFixed(2) }</td>
              <td>{result.annualInvestment * result.year}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
