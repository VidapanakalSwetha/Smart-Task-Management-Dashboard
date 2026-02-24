import TaskCard from "./TaskCard";

function TaskColumn({ title, tasks, deleteTask, updateStatus, setEditingTask }) {
  return (
    <div className="column">
      <h3>{title}</h3>
      {tasks.map(task => (
        <TaskCard
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          updateStatus={updateStatus}
          setEditingTask={setEditingTask}
        />
      ))}
    </div>
  );
}

export default TaskColumn;
