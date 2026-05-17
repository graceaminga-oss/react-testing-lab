import { render, screen } from "@testing-library/react";
import App from "../../components/App";
import "@testing-library/jest-dom/vitest";

test("displays transactions on startup", async () => {
  render(<App />);

  // expects transactions to already be rendered
  const transactions = await screen.findAllByTestId("transaction");

  expect(transactions.length).toBeGreaterThan(0);
});
