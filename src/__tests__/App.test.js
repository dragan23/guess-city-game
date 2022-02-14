import React from "react";
import { fireEvent, cleanup, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";
import App from "../App";

beforeEach(cleanup);

describe("App", () => {
  it("should render correctly", async () => {
    render(<App />);
    expect(screen.getByText("PLACE")).toBeVisible();
    expect(screen.getByText("0 cities placed")).toBeVisible();
    expect(screen.getByText("1500 kilometers left")).toBeVisible();
  });

  it("should warn the user to place the pin", async () => {
    render(<App />);
    const placeButton = screen.getByText("PLACE");
    expect(placeButton).toBeVisible();

    fireEvent.click(placeButton);

    expect(screen.getByText("Add a pin to the map!!!")).toBeVisible();
  });
});
