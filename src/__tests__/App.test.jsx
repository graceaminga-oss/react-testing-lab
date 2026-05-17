import { render, screen } from "@testing-library/react";
import App from "../components/App";
import "@testing-library/jest-dom/vitest";

test("renders the bank heading", () => {
  render(<App />);

  expect(screen.getByText("The Royal Bank of Flatiron")).toBeInTheDocument();
});
