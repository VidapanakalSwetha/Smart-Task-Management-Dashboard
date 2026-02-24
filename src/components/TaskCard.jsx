function TaskCard({ task, deleteTask, updateStatus, setEditingTask }) {
  return (
    <div className="task-card">
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <p>Due: {task.dueDate}</p>
      <p className={`priority ${task.priority}`}>
        {task.priority}
      </p>

      <select
        value={task.status}
        onChange={e => updateStatus(task.id, e.target.value)}
      >
        <option>To Do</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>

      <div className="card-buttons">
        <button onClick={() => setEditingTask(task)}>Edit</button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TaskCard;
