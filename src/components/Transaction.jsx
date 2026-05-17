import React from "react";

function Transaction({transaction}) {
  return (
    <tr data-testid="transaction">
      <td>{transaction.date}</td>
      <td>{transaction.description || transaction.title}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
    </tr>
  );
}

export default Transaction;
