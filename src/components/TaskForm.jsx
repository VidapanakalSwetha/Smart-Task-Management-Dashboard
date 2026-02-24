import { useState, useEffect } from "react";

function TaskForm({ addTask, editingTask }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "Medium",
    status: "To Do",
    dueDate: ""
  });

  useEffect(() => {
    if (editingTask) setForm(editingTask);
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ ...form, id: form.id || Date.now() });
    setForm({
      title: "",
      description: "",
      priority: "Medium",
      status: "To Do",
      dueDate: ""
    });
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={form.title}
        onChange={e => setForm({ ...form, title: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={form.description}
        onChange={e => setForm({ ...form, description: e.target.value })}
      />
      <select
        value={form.priority}
        onChange={e => setForm({ ...form, priority: e.target.value })}
      >
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
      <input
        type="date"
        value={form.dueDate}
        onChange={e => setForm({ ...form, dueDate: e.target.value })}
        required
      />
      <button type="submit">Save Task</button>
    </form>
  );
}

export default TaskForm;
