import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-dark bg-primary p-3">
      <Link to="/">
        <h1 className=" text-light">WikiCountries</h1>
      </Link>
    </nav>
  );
};

export default Navbar;
