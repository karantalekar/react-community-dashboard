import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-dark text-white p-3 vh-100" style={{ width: "220px" }}>
      <h6 className="text-secondary mb-3">MENU</h6>
      <ul className="nav flex-column gap-2">
        <li>Dashboard</li>
        <li>Members</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
