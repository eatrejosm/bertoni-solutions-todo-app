import React, { useState } from "react";

const AddTaskForm = props => {
  const initialFormState = { id: null, taskname: "", description: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!user.taskname || !user.description) return;
        props.addTask(user);
        setUser(initialFormState);
      }}
    >
      <label>Task Name</label>
      <input
        type="text"
        name="taskname"
        value={user.taskname}
        onChange={handleInputChange}
      />
      <label>Description</label>
      <input
        type="text"
        name="description"
        value={user.description}
        onChange={handleInputChange}
      />
      <button>Add new task</button>
    </form>
  );
};

export default AddTaskForm;
