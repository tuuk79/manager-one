import React from "react";
import { render } from "@testing-library/react";
import Project from "./Project";

it("renders a project card", () => {
  const { getByText } = render(<Project />);
  const linkElement = getByText(/doy/i);
  expect(linkElement).toBeInTheDocument();
});
