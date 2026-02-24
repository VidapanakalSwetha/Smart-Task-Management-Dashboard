function Filters({ setFilterStatus, setFilterPriority, setSortOrder }) {
  return (
    <div className="filters">
      <select onChange={e => setFilterStatus(e.target.value)}>
        <option>All</option>
        <option>To Do</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>

      <select onChange={e => setFilterPriority(e.target.value)}>
        <option>All</option>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <select onChange={e => setSortOrder(e.target.value)}>
        <option value="asc">Due Date ↑</option>
        <option value="desc">Due Date ↓</option>
      </select>
    </div>
  );
}

export default Filters;
