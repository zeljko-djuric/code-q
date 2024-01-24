import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBar from "../components/SearchBar";

describe("SearchBar Component", () => {
  const mockSearchTerm = "test";

  it("renders SearchBar component correctly", () => {
    render(<SearchBar searchTerm={mockSearchTerm} />);
    expect(screen.getByDisplayValue(mockSearchTerm)).toBeInTheDocument();
  });

  it("calls onSearchChange prop when input changes", () => {
    const mockOnChange = jest.fn();
    render(
      <SearchBar searchTerm={mockSearchTerm} onSearchChange={mockOnChange} />
    );

    const newSearchTerm = "new test";
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: newSearchTerm },
    });

    expect(mockOnChange).toHaveBeenCalledWith(newSearchTerm);
  });
});
