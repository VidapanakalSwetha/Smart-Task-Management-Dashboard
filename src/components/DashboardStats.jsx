function DashboardStats({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter(t => t.status === "Completed").length;
  const pending = total - completed;

  return (
    <div className="stats">
      <div className="stat-card">Total: {total}</div>
      <div className="stat-card green">Completed: {completed}</div>
      <div className="stat-card orange">Pending: {pending}</div>
    </div>
  );
}

export default DashboardStats;
