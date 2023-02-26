import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders headline", async () => {
    render(<App />);

    const header = await screen.findByText("Games");
    //expect(header).toBeVisible();
  });

  it("contains footer", async () => {
    render(<App />);

    const footer = await screen.findByText((text) =>
      text.includes("Build version:")
    );
    //expect(footer).toBeVisible();
  });
});
