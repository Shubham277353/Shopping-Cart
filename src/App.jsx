import { Link, Outlet } from "react-router";

const App = () => {
  return (
    <div className="Full-Page">
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Phone: 5453485787</p>
        <p>Email: gksjdg@gmail.com</p>
        <p>Address: Jane Street, 12121,California,USA</p>
      </footer>
    </div>
  );
};

export default App;
