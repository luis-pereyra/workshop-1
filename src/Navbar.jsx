import './Navbar.css'

function Navbar() {

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/" className="navbar-logo">
            My Tinerari
          </a>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="/" className="nav-links">Home</a>
            </li>
            <li className="nav-item">
              <a href="/cities" className="nav-links">Cities</a>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-links">Login</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
export default Navbar