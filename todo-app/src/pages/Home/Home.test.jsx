// Import testing utilities
import "@testing-library/jest-dom";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import Home from "./Home";

// Sample tasks data
const tasks = [
  { id: 1, name: "Task 1", description: "Description 1", status: "pending" },
  { id: 2, name: "Task 2", description: "Description 2", status: "completed" },
];

// Mock the global fetch API
global.fetch = vi.fn((url) =>
  Promise.resolve({
    json: () =>
      Promise.resolve(
        url.includes("?status=")
          ? tasks.filter((t) => t.status === url.split("=")[1])
          : tasks
      ),
  })
);

describe("Home Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("fetches and displays tasks", async () => {
    render(<Home />);
    // Assert tasks are fetched and displayed
    await screen.findByText("Task 1");
    expect(screen.getByText("Description 1")).toBeInTheDocument();
    expect(screen.getByText("Task 2")).toBeInTheDocument();
  });

  it("allows updating a task's status", async () => {
    render(<Home />);
    await screen.findByText("Task 1");

    // Assuming we want to update the status for the task with ID 1
    const taskIdToUpdate = 1;
    const taskRow = screen.getByTestId(`task-${taskIdToUpdate}`);
    const statusSelect = within(taskRow).getByRole("combobox");

    fireEvent.change(statusSelect, { target: { value: "completed" } });

    expect(fetch).toHaveBeenCalledWith(
      `http://localhost:3000/tasks/status/${taskIdToUpdate}`,
      expect.objectContaining({
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "completed" }),
      })
    );
  });

  it("allows deleting a task", async () => {
    render(<Home />);
    // Find the delete button for the first task and click it
    const deleteButton = await screen.findAllByText("Delete");
    fireEvent.click(deleteButton[0]);

    // Similar to updating a task's status, check if fetch was called correctly
    expect(fetch).toHaveBeenCalledWith(expect.any(String), {
      method: "DELETE",
    });
  });
});
