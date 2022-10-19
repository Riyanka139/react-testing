import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("routeing", () => {
  it("WHEN user is in index route(/) THEN render login component", () => {
    window.history.pushState({}, "", "/");

    render(<App />);

    expect(screen.getByTestId("login")).toBeInTheDocument();
  });

  it("WHEN user is in index route(/wel) THEN render welcome component", () => {
    window.history.pushState({}, "", "/wel");

    render(<App />);

    expect(screen.getByTestId("wel")).toBeInTheDocument();
  });

  it("when user click submit button", async () => {
    window.history.pushState({}, "", "/");

    render(<App />);
    const link = screen.getByText("submit");
    expect(link).toBeInTheDocument();

    await userEvent.click(link);
    // await fireEvent.click(link);
    // await screen.findByText("Welcome");
    expect(document.body.textContent).toBe("Welcome");
  });
});
