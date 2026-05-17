import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../../components/App";
import "@testing-library/jest-dom/vitest";

// Mock fetch for POST request
global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ id: 999, title: "New Transaction" }),
  })
);

test("adds a new transaction and calls POST API", async () => {
  render(<App />);

  const input = screen.getByPlaceholderText(/add transaction/i);
  const button = screen.getByText(/add/i);

  fireEvent.change(input, { target: { value: "New Transaction" } });
  fireEvent.click(button);

  // check UI update
  const newItem = await screen.findByText("New Transaction");
  expect(newItem).toBeInTheDocument();

  // check API called
  await waitFor(() => {
    expect(global.fetch).toHaveBeenCalled();
  });
});
