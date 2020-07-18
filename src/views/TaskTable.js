import React from "react";

const TaskTable = props => (
  <table>
    <thead>
      <tr>
        <th>Task Name</th>
        <th>Description</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.tasks.length > 0 ? (
        props.tasks.map(user => (
          <tr key={user.id}>
            <td>{user.taskname}</td>
            <td>{user.description}</td>
            <td>
              <button
                className="button muted-button"
                onClick={() => props.editRow(user)}
              >
                Edit
              </button>
              <button
                className="button muted-button"
                onClick={() => props.deleteTask(user.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No tasks</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default TaskTable;
