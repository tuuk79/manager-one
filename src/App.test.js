import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import Project from "./Project/Project";

it("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

it("renders a project card", () => {
  const project = render(<Project />);
  expect(project).not.toBeNull();
});
