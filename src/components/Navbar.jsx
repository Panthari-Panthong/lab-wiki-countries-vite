import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
        <Link to="/">
          <h1 className=" text-light">WikiCountries</h1>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
