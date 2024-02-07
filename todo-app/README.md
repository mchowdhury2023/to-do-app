# Todo App

## Introduction

This Todo App is a full-stack application built using React for the frontend, MySQL for the database, and Tailwind CSS for styling. It allows users to manage their tasks efficiently with features such as adding, editing, deleting, and filtering tasks by status. Additionally, the app supports user registration and login functionalities, ensuring secure access through password hashing with bcrypt in the backend.

## Features

- **Task Management:** Users can add, edit, delete, and filter tasks by status (pending or completed).
- **User Authentication:** Secure registration and login system using bcrypt for password hashing.
- **Responsive Design:** Crafted with Tailwind CSS, the app is fully responsive and provides a seamless experience on both desktop and mobile devices.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js
- MySQL

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/mchowdhury2023/to-do-app
   cd yourprojectfolder
   ```

2. **Install dependencies:**

   Navigate to the project directory and install the required dependencies:

   ```bash
   npm install
   ```

3. **Set up the MySQL database:**

   Create a MySQL database and import the provided SQL schema. Configure your database connection settings in your backend code.

4. **Start the backend server:**

   Ensure the backend server is running. Navigate to the backend directory and start the server:

   ```bash
   npm start
   ```

5. **Launch the frontend application:**

   In a new terminal window, navigate to the frontend directory and start the React application:

   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000`.

## Usage

- **Register/Login:** To access the app, users must register and log in. The authentication system uses bcrypt to hash passwords, ensuring security.
- **Adding a Task:** Click on the "Add Task" button, fill in the task name and description, and submit.
- **Editing a Task:** Click on the "Edit" button next to a task, modify the details, and save.
- **Deleting a Task:** Click on the "Delete" button next to a task to remove it from the list.
- **Filtering Tasks:** Use the dropdown menu to filter tasks by their status (All, Pending, Completed).

## Contributing

We welcome contributions to this project! Please consider the following steps for contributing:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Project Link: [https://github.com/mchowdhury2023/to-do-app](https://github.com/mchowdhury2023/to-do-app)
