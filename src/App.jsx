import ProgressBar from "./components/ProgressBar";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import DashboardStats from "./components/DashboardStats";

function App() {
  const [tasks, setTasks] = useState(() => {
  try {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
});
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterPriority, setFilterPriority] = useState("All");
  const [editingTask, setEditingTask] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    if (editingTask) {
      setTasks(tasks.map(t => t.id === editingTask.id ? task : t));
      setEditingTask(null);
    } else {
      setTasks([...tasks, task]);
    }
    setShowForm(false);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const updateStatus = (id, status) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, status } : task
    ));
  };

  const priorityOrder = {
  High: 3,
  Medium: 2,
  Low: 1
  };

  const filteredTasks = tasks
    .filter(task =>
      filterStatus === "All" ? true : task.status === filterStatus
     )
    .filter(task =>
      filterPriority === "All" ? true : task.priority === filterPriority
     )
    .sort((a, b) => {
 
  const priorityDiff =
    priorityOrder[b.priority] - priorityOrder[a.priority];

  if (priorityDiff !== 0) {
    return priorityDiff;
  }

  return new Date(a.dueDate) - new Date(b.dueDate);
});


  return (
    <div className="layout">
      <div className="sidebar">
        <h2>TaskFlow</h2>

        <button
          className="add-btn"
          onClick={() => {
            setEditingTask(null);
            setShowForm(true);
          }}
        >
          + Add Task
        </button>

        <div className="sidebar-section">
          <p onClick={() => setFilterStatus("All")}>All Tasks</p>
          <p onClick={() => setFilterStatus("To Do")}>To Do</p>
          <p onClick={() => setFilterStatus("In Progress")}>In Progress</p>
          <p onClick={() => setFilterStatus("Completed")}>Completed</p>
        </div>
      </div>

      <div className="main">
        <Header />
        <ProgressBar tasks={tasks} />
        <DashboardStats tasks={tasks} />

        {showForm && (
          <TaskForm
            addTask={addTask}
            editingTask={editingTask}
          />
        )}

        <div className="board">

          {(filterStatus === "All" || filterStatus === "To Do") && (
            <TaskColumn
              title="To Do"
              tasks={filteredTasks.filter(t => t.status === "To Do")}
              deleteTask={deleteTask}
              updateStatus={updateStatus}
              setEditingTask={(task) => {
                setEditingTask(task);
                setShowForm(true);
              }}
            />
          )}

          {(filterStatus === "All" || filterStatus === "In Progress") && (
            <TaskColumn
              title="In Progress"
              tasks={filteredTasks.filter(t => t.status === "In Progress")}
              deleteTask={deleteTask}
              updateStatus={updateStatus}
              setEditingTask={(task) => {
                setEditingTask(task);
                setShowForm(true);
              }}
            />
          )}

          {(filterStatus === "All" || filterStatus === "Completed") && (
            <TaskColumn
              title="Completed"
              tasks={filteredTasks.filter(t => t.status === "Completed")}
              deleteTask={deleteTask}
              updateStatus={updateStatus}
              setEditingTask={(task) => {
                setEditingTask(task);
                setShowForm(true);
              }}
            />
          )}

        </div>
      </div>
    </div>
  );
}

export default App;
