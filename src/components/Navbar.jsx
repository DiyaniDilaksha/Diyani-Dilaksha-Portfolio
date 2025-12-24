import logo from "/logo.png";

const Navbar = () => {
  const closeNavbar = () => {
    const navbar = document.getElementById("navbarNav");
    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  };
  return (
    <nav className="navbar navbar-expand-lg shadow-sm fixed-top">
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="#hero" onClick={closeNavbar}>
          <img
            src={logo}
            height="50"
            className="d-inline-block align-text-top"
            alt="Logo"
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav gap-3 text-center">
            <li className="nav-item">
              <a
                className="nav-link text-white fs-5"
                href="#hero"
                onClick={closeNavbar}
              >
                Home
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link text-white fs-5"
                href="#about"
                onClick={closeNavbar}
              >
                About me
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link text-white fs-5"
                href="#services"
                onClick={closeNavbar}
              >
                Services
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link text-white fs-5"
                href="#portfolio"
                onClick={closeNavbar}
              >
                Portfolio
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link text-white fs-5"
                href="#contact"
                onClick={closeNavbar}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="d-none d-lg-block">
          <a className="btn connect-btn px-4 fs-5" href="#contact">
            Connect with me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
