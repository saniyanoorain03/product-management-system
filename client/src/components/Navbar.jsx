import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav className="bg-gray-900 border-b border-gray-800 px-10 py-5 flex justify-between items-center">

      <Link
        to="/"
        className="text-3xl font-bold text-blue-500"
      >
        ProductHub
      </Link>

      <div className="flex gap-8 text-gray-300">

        <Link
          to="/"
          className="hover:text-blue-500 transition"
        >
          Home
        </Link>

        <Link
          to="/products"
          className="hover:text-blue-500 transition"
        >
          Products
        </Link>

        <Link
          to="/analytics"
          className="hover:text-blue-500 transition"
        >
          Analytics
        </Link>

        <Link
          to="/about"
          className="hover:text-blue-500 transition"
        >
          About
        </Link>

      </div>

    </nav>

  );
}

export default Navbar;