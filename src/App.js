import React, { useState } from "react";
import TaskTable from "./views/TaskTable";
import AddTaskForm from "./controllers/AddTaskForm";
import EditTaskForm from "./controllers/EditTaskForm";

const App = () => {
  const tasksData = [
    { id: 1, taskname: "Task 1", description: "Task 1 description" },
    { id: 2, taskname: "Task 2", description: "Task 2 description" },
    { id: 3, taskname: "Task 3", description: "Task 3 description" }
  ];

  const [tasks, setTasks] = useState(tasksData);

  const addTask = task => {
    task.id = tasks.length + 1;
    setTasks([...tasks, task]);
  };

  const deleteTask = id => {
    setTasks(tasks.filter(user => user.id !== id));
  };

  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, taskname: "", description: "" };
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = user => {
    setEditing(true);
    setCurrentUser({ id: user.id, taskname: user.taskname, description: user.description });
  };

  const updateUser = (id, updateUser) => {
    setEditing(false);
    setTasks(tasks.map(user => (user.id === id ? updateUser : user)));
  };

  return (
    <div className="container">
      <h1>ToDo App Bertoni</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit task</h2>
              <EditTaskForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add task</h2>
              <AddTaskForm addTask={addTask} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View task</h2>
          <TaskTable tasks={tasks} deleteTask={deleteTask} editRow={editRow} />
        </div>
      </div>
    </div>
  );
};

export default App;
