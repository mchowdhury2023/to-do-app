import React, { useEffect, useState } from "react";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [filterStatus, setFilterStatus] = useState("");

  useEffect(() => {
    fetchTasks(filterStatus);
  }, [filterStatus]);

  const fetchTasks = async (status = "") => {
    const url = `http://localhost:3000/tasks${
      status ? `?status=${status}` : ""
    }`;
    const response = await fetch(url);
    const data = await response.json();
    setTasks(data);
  };

  const editTask = async (task) => {
    const newName = prompt("New name", task.name);
    const newDescription = prompt("New description", task.description);

    if (newName && newDescription) {
      await fetch(`http://localhost:3000/tasks/update/${task.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: newName,
          description: newDescription,
          status: task.status, // Keep the existing status
        }),
      });
      fetchTasks(filterStatus);
    }
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE",
    });
    fetchTasks(filterStatus);
  };

  const updateTaskStatus = async (id, newStatus) => {
    const response = await fetch(`http://localhost:3000/tasks/status/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: newStatus }),
    });

    if (response.ok) {
      // Optimistically update the UI
      setTasks(
        tasks.map((task) => {
          if (task.id === id) {
            return { ...task, status: newStatus };
          }
          return task;
        })
      );
    } else {
      alert("Failed to update task status.");
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <h3 className="text-center text-3xl mb-10 mt-10">My Task</h3>
      <div>
        <label htmlFor="statusFilter">Filter by Status:</label>
        <select
          id="statusFilter"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="mx-2"
        >
          <option value="">All</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left whitespace-no-wrap">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Action</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr
                key={task.id}
                data-testid={`task-${task.id}`}
                className="border-b"
              >
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{task.name}</td>
                <td className="px-4 py-2">{task.description}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => editTask(task)}
                    className="mr-2 px-2 py-1 bg-blue-500 text-white rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="px-2 py-1 bg-red-500 text-white rounded"
                  >
                    Delete
                  </button>
                  {/* Status dropdown remains unchanged */}
                </td>
                <td className="px-4 py-2">
                  <select
                    value={task.status}
                    onChange={(e) => updateTaskStatus(task.id, e.target.value)}
                    className="border border-gray-300 rounded-md"
                  >
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
