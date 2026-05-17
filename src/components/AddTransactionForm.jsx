import React from "react";

function AddTransactionForm({ postTransaction }) {
  function submitForm(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const newTransaction = {
      date: formData.get("date"),
      description: formData.get("description"),
      category: formData.get("category"),
      amount: Number(formData.get("amount")),
    };

    postTransaction(newTransaction);
    e.currentTarget.reset();
  }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={submitForm}>
        <div className="inline fields">
          <input type="date" name="date" data-testid="date-input" />

          <input
            type="text"
            name="description"
            placeholder="Add Transaction Description"
            data-testid="description-input"
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            data-testid="category-input"
          />

          <input
            type="number"
            name="amount"
            placeholder="Amount"
            step="0.01"
            data-testid="amount-input"
          />
        </div>

        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
