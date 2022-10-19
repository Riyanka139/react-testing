import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Login from "./Login";

test("it expands when the button is clicked", async () => {
  // in a real test a renderer like "@testing-library/react"
  // would take care of setting up the DOM elements
  const root = document.createElement("div");
  document.body.appendChild(root);

  render(
    <MemoryRouter initialEntries={["/"]}>
      <Login />
    </MemoryRouter>,
    root
  );
  const link = screen.getByText("submit");
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", "/wel");
});
