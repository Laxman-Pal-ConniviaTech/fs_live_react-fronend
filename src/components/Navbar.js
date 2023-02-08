import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
    <div className="container">
      <a className="navbar-brand" href="http://192.168.1.31/fs_live">
        <img
          src=""
          className="w-25"
          alt="FPO"
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        {/* Left Side Of Navbar  */}
        <ul className="navbar-nav me-auto"></ul>

        {/* Right Side Of Navbar  */}
        <ul className="navbar-nav ms-auto">
          {/* Authentication Links  */}
          <li className="nav-item">
            <a
              className="nav-link"
              href="http://192.168.1.31/fs_live/login"
            >
              Login
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  )
}

export default Navbar
