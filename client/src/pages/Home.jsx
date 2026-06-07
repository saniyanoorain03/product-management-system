import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import shopImage from "../assets/shop.jpg";

function Home() {

  return (

    <div className="min-h-screen bg-gray-950 text-white flex flex-col">

      <Navbar />

      {/* HERO SECTION */}

      <div className="flex-grow max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}

        <div>

          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-8">

            Smart Product <br />

            <span className="text-blue-500">
              Management System
            </span>

          </h1>

          <p className="text-gray-400 text-xl leading-9 mb-10 max-w-2xl">

            A modern MERN Stack inventory and product
            management dashboard for businesses to manage
            products, monitor analytics, and track inventory efficiently.

          </p>

          <div className="flex flex-wrap gap-6">

            <Link
              to="/products"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl text-lg font-semibold transition"
            >
              Open Dashboard
            </Link>

            <Link
              to="/about"
              className="border border-gray-700 hover:bg-gray-800 px-8 py-4 rounded-2xl text-lg transition"
            >
              Learn More
            </Link>

          </div>

        </div>

        {/* RIGHT SIDE IMAGE */}

        <div className="bg-gray-900 p-6 rounded-3xl border border-gray-800 shadow-2xl">

          <img
            src={shopImage}
            alt="shop"
            className="rounded-3xl w-full h-[500px] object-cover"
          />

        </div>

      </div>

      {/* FEATURES SECTION */}

      <div className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-8">

        <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800 hover:border-blue-500 transition">

          <h2 className="text-3xl font-bold text-blue-500 mb-5">
            Easy Product Management
          </h2>

          <p className="text-gray-400 text-lg leading-8">

            Add, update, search, and delete products easily
            with a clean and responsive dashboard interface.

          </p>

        </div>

        <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800 hover:border-green-500 transition">

          <h2 className="text-3xl font-bold text-green-500 mb-5">
            Real-Time Analytics
          </h2>

          <p className="text-gray-400 text-lg leading-8">

            Monitor inventory statistics, product categories,
            and business insights visually.

          </p>

        </div>

        <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800 hover:border-yellow-500 transition">

          <h2 className="text-3xl font-bold text-yellow-500 mb-5">
            MERN Stack Powered
          </h2>

          <p className="text-gray-400 text-lg leading-8">

            Built using MongoDB, Express.js, React.js,
            and Node.js with scalable backend architecture.

          </p>

        </div>

      </div>

      <Footer />

    </div>

  );
}

export default Home;