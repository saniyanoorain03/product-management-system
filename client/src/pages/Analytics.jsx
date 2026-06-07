import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";

function Analytics() {

  const data = [
    { name: "Mobiles", value: 400 },
    { name: "Laptops", value: 300 },
    { name: "Accessories", value: 200 },
    { name: "Appliances", value: 150 }
  ];

  const salesData = [
    { month: "Jan", sales: 2400 },
    { month: "Feb", sales: 1398 },
    { month: "Mar", sales: 9800 },
    { month: "Apr", sales: 3908 },
    { month: "May", sales: 4800 }
  ];

  const COLORS = [
    "#2563eb",
    "#22c55e",
    "#eab308",
    "#ef4444"
  ];

  return (

    <div className="min-h-screen bg-gray-950 text-white flex flex-col">

      <Navbar />

      <div className="flex-grow max-w-6xl mx-auto px-4 py-16">

        <h1 className="text-6xl font-bold text-blue-500 mb-6">
          Analytics
        </h1>

        <p className="text-gray-400 text-lg mb-12">
          Track product performance and inventory insights
        </p>

        {/* STATS */}

        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">

            <h2 className="text-gray-400 text-lg">
              Best Selling
            </h2>

            <p className="text-3xl font-bold mt-3 text-green-500">
              iPhone
            </p>

          </div>

          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">

            <h2 className="text-gray-400 text-lg">
              Revenue Growth
            </h2>

            <p className="text-3xl font-bold mt-3 text-yellow-500">
              +24%
            </p>

          </div>

          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">

            <h2 className="text-gray-400 text-lg">
              Monthly Orders
            </h2>

            <p className="text-3xl font-bold mt-3 text-blue-500">
              120
            </p>

          </div>

        </div>

        {/* CHARTS */}

        <div className="grid md:grid-cols-2 gap-8">

          {/* PIE CHART */}

          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">

            <h2 className="text-3xl font-bold mb-8">
              Product Categories
            </h2>

            <ResponsiveContainer width="100%" height={300}>

              <PieChart>

                <Pie
                  data={data}
                  dataKey="value"
                  outerRadius={100}
                  label
                >

                  {
                    data.map((entry, index) => (

                      <Cell
                        key={index}
                        fill={COLORS[index % COLORS.length]}
                      />

                    ))
                  }

                </Pie>

                <Tooltip />

              </PieChart>

            </ResponsiveContainer>

          </div>

          {/* BAR CHART */}

          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">

            <h2 className="text-3xl font-bold mb-8">
              Monthly Sales
            </h2>

            <ResponsiveContainer width="100%" height={300}>

              <BarChart data={salesData}>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="month" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="sales"
                  fill="#2563eb"
                  radius={[10, 10, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>

      <Footer />

    </div>

  );
}

export default Analytics;