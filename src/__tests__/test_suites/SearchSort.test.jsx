import { render, screen, fireEvent } from "@testing-library/react";
import App from "../../components/App";
import "@testing-library/jest-dom/vitest";

test("filters transactions when searching", async () => {
  render(<App />);

  const searchInput = screen.getByPlaceholderText(/search/i);

  fireEvent.change(searchInput, { target: { value: "rent" } });

  const results = await screen.findAllByTestId("transaction");

  results.forEach((item) => {
    expect(item.textContent.toLowerCase()).toContain("rent");
  });
});
