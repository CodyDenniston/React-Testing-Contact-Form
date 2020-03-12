import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

test("renders the First Name", () => {

  const { getByText } = render(<App />); 

  const label = getByText("First Name*");

  expect(label).toBeInTheDocument(); 
});

test("renders the Last Name", () => {

  const { getByText } = render(<App />); 

  const label = getByText("Last Name*");

  expect(label).toBeInTheDocument(); 
});

test("clicks submit button", () => {

  const name = getByText('firstname');
  
  const { getByText } = render(<App />); 

  fireEvent.click(submit)

  expect(name).toBeInTheDocument(); 
});


