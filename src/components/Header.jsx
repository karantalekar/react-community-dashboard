import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand bg-primary px-4">
      <span className="navbar-brand text-white fw-bold">
        Community Dashboard
      </span>

      <div className="ms-auto">
        <span className="text-white me-3">Login</span>
        <span className="text-white">Sign Up</span>
      </div>
    </nav>
  );
};

export default Header;
