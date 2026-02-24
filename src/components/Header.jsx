function Header() {
  const today = new Date().toLocaleDateString();

  return (
    <div className="header">
      <div>
        <h1>Smart Task Management Dashboard</h1>
        <p className="subtitle">
          Organize your tasks, track progress, and stay productive.
        </p>
      </div>

      <div className="date-box">
        <span>{today}</span>
      </div>
    </div>
  );
}

export default Header;
