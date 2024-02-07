// Import statements for Vitest, React Testing Library, and the component
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import AddTask from "./AddTask";

// Mock the fetch API
global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
);

describe("AddTask Component", () => {
  it("renders correctly", () => {
    render(<AddTask />);
    expect(screen.getByLabelText(/Task Name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Description:/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  it("updates input fields on user input", () => {
    render(<AddTask />);
    const nameInput = screen.getByLabelText(/Task Name:/i);
    const descriptionTextarea = screen.getByLabelText(/Description:/i);

    // Simulate user typing into the input fields
    fireEvent.change(nameInput, { target: { value: "New Task" } });
    fireEvent.change(descriptionTextarea, {
      target: { value: "New Task Description" },
    });

    // Assert the input fields are updated
    expect(nameInput.value).toBe("New Task");
    expect(descriptionTextarea.value).toBe("New Task Description");
  });

  // it("clears input fields upon form submission", async () => {
  //   render(<AddTask />);
  //   const nameInput = screen.getByLabelText(/Task Name:/i);
  //   const descriptionTextarea = screen.getByLabelText(/Description:/i);
  //   const submitButton = screen.getByRole("button", { name: /submit/i });

  //   // Fill out and submit the form
  //   fireEvent.change(nameInput, { target: { value: "New Task" } });
  //   fireEvent.change(descriptionTextarea, {
  //     target: { value: "New Task Description" },
  //   });
  //   fireEvent.click(submitButton);

  //   // Wait for the fetch to be called
  //   await vi.waitFor(() => expect(fetch).toHaveBeenCalled());

  //   // Assert the input fields are cleared after submission
  //   expect(nameInput.value).toBe("");
  //   expect(descriptionTextarea.value).toBe("");
  // });
});
