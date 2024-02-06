import React, { useEffect, useState } from "react";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await fetch("http://localhost:3000/tasks");
    const data = await response.json();
    setTasks(data);
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE",
    });
    fetchTasks(); // Refresh the tasks list
  };

  const editTask = async (task) => {
    const newName = prompt("Enter new name:", task.name);
    const newDescription = prompt("Enter new description:", task.description);
    if (newName && newDescription) {
      await fetch(`http://localhost:3000/tasks/${task.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...task,
          name: newName,
          description: newDescription,
        }),
      });
      fetchTasks(); // Refresh the tasks list
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <h3 className="text-center text-3xl mb-10 mt-10">My Task</h3>
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
              <tr key={task.id} className="border-b">
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
                </td>
                <td className="px-4 py-2">{task.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
