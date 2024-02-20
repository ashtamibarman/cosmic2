import logo from "./image/cosmic.png";

const Header = ({ selectedTab, setSelectedTab }) => {
  return (
    <>
      <header className="" id="navbar">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <img src={logo} alt="" height={90} width={100} className="logo" />
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
            >
              <svg
                className="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              >
                <use xlinkHref="#bootstrap"></use>
              </svg>
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li
                onClick={() => {
                  setSelectedTab("Home");
                  console.log("helllo");
                }}
              >
                <a
                  href="#"
                  className={`nav-link px-2 ${
                    selectedTab === "Home" && " link-secondary"
                  }`}
                  id="white"
                >
                  Home
                </a>
              </li>
              <li
                onClick={() => {
                  setSelectedTab("Explore");
                }}
              >
                <a
                  href="#"
                  className={`nav-link px-2 ${
                    selectedTab === "Explore" && " link-secondary"
                  }`}
                  id="white"
                >
                  Explore
                </a>
              </li>
              <li
                onClick={() => {
                  setSelectedTab("Gallery");
                }}
              >
                <a
                  href="#"
                  className={`nav-link px-2 ${
                    selectedTab === "Gallery" && " link-secondary"
                  }`}
                  id="white"
                >
                  Gallery
                </a>
              </li>
              <li
                onClick={() => {
                  setSelectedTab("Blog");
                }}
              >
                <a
                  href="#"
                  className={`nav-link px-2 ${
                    selectedTab === "Blog" && " link-secondary"
                  }`}
                  id="white"
                >
                  Blog
                </a>
              </li>
            </ul>

            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            ></form>

            <div className="dropdown text-end">
              <a
                href="#"
                className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></a>
              <ul className="dropdown-menu text-small">
                <li>
                  <a className="dropdown-item" href="#">
                    New project...
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
