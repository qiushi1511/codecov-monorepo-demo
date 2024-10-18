import { describe, expect, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import Home from "./home";

describe("Page", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
