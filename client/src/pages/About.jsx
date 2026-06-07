import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {

  return (

    <div className="min-h-screen bg-gray-950 text-white flex flex-col">

      <Navbar />

      <div className="flex-grow max-w-6xl mx-auto px-6 py-20">

        {/* HEADING */}

        <div className="text-center mb-20">

          <h1 className="text-6xl font-bold text-blue-500 mb-6">
            About ProductHub
          </h1>

          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-9">

            ProductHub is a modern MERN Stack based product
            management dashboard developed to help businesses
            manage inventory, monitor analytics, and organize
            products efficiently.

          </p>

        </div>

        {/* ABOUT CARDS */}

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800 hover:border-blue-500 transition">

            <h2 className="text-3xl font-bold text-blue-500 mb-5">
              Inventory Management
            </h2>

            <p className="text-gray-400 leading-8 text-lg">

              Easily add, update, delete, and organize
              products using a clean dashboard interface.

            </p>

          </div>

          <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800 hover:border-green-500 transition">

            <h2 className="text-3xl font-bold text-green-500 mb-5">
              Real-Time Analytics
            </h2>

            <p className="text-gray-400 leading-8 text-lg">

              Track product categories, monthly sales,
              and business growth through interactive charts.

            </p>

          </div>

          <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800 hover:border-yellow-500 transition">

            <h2 className="text-3xl font-bold text-yellow-500 mb-5">
              MERN Stack Project
            </h2>

            <p className="text-gray-400 leading-8 text-lg">

              Developed using MongoDB, Express.js,
              React.js, and Node.js with scalable architecture.

            </p>

          </div>

        </div>

        {/* EXTRA SECTION */}

        <div className="bg-gray-900 mt-20 p-10 rounded-3xl border border-gray-800">

          <h2 className="text-4xl font-bold mb-6">
            Project Objective
          </h2>

          <p className="text-gray-400 text-lg leading-9">

            The objective of this project is to simplify
            inventory handling and product tracking for businesses
            using a responsive and interactive web dashboard.
            The system provides efficient CRUD functionality,
            analytics visualization, and user-friendly UI design.

          </p>

        </div>

      </div>

      <Footer />

    </div>

  );
}

export default About;