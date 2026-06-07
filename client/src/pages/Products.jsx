import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useEffect, useState } from "react";
import axios from "axios";

function Products() {

  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const [editingId, setEditingId] = useState(null);

  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {

    const res = await axios.get("http://localhost:5000/products");

    setProducts(res.data);
  };

  const addProduct = async () => {

    if (!name || !price || !category) {

      alert("Please fill all fields");

      return;
    }

    if (editingId) {

      await axios.put(
        `http://localhost:5000/products/${editingId}`,
        {
          name,
          price,
          category
        }
      );

      setEditingId(null);

    } else {

      await axios.post(
        "http://localhost:5000/products",
        {
          name,
          price,
          category
        }
      );
    }

    fetchProducts();

    setName("");
    setPrice("");
    setCategory("");
  };

  const deleteProduct = async (id) => {

    await axios.delete(
      `http://localhost:5000/products/${id}`
    );

    fetchProducts();
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className="min-h-screen bg-gray-950 text-white flex flex-col">

      {/* NAVBAR */}

      <Navbar />

      {/* MAIN CONTENT */}

      <div className="flex-grow">

        {/* HEADER */}

        <div className="max-w-6xl mx-auto pt-12 pb-8 px-4">

          <h1 className="text-5xl font-bold mb-3 text-blue-500">
            Product Dashboard
          </h1>

          <p className="text-gray-400 text-lg">
            Manage your inventory and products efficiently
          </p>

        </div>

        {/* STATS */}

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">

          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">

            <h2 className="text-gray-400 text-lg">
              Total Products
            </h2>

            <p className="text-4xl font-bold mt-3 text-blue-500">
              {products.length}
            </p>

          </div>

          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">

            <h2 className="text-gray-400 text-lg">
              Categories
            </h2>

            <p className="text-4xl font-bold mt-3 text-green-500">

              {
                [...new Set(
                  products.map((p) => p.category)
                )].length
              }

            </p>

          </div>

          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">

            <h2 className="text-gray-400 text-lg">
              Total Value
            </h2>

            <p className="text-4xl font-bold mt-3 text-yellow-500">

              ₹{
                products.reduce(
                  (total, item) =>
                    total + Number(item.price),
                  0
                )
              }

            </p>

          </div>

        </div>

        {/* FORM */}

        <div className="max-w-6xl mx-auto bg-gray-900 p-8 rounded-2xl shadow-lg mt-10 px-4">

          <h2 className="text-2xl font-semibold mb-6">
            Add New Product
          </h2>

          <div className="grid md:grid-cols-4 gap-4">

            <input
              type="text"
              placeholder="Product Name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="p-3 rounded-lg bg-gray-800 border border-gray-700 outline-none"
            />

            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) =>
                setPrice(e.target.value)
              }
              className="p-3 rounded-lg bg-gray-800 border border-gray-700 outline-none"
            />

            <input
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
              className="p-3 rounded-lg bg-gray-800 border border-gray-700 outline-none"
            />

            <button
              onClick={addProduct}
              className="bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold"
            >

              {
                editingId
                  ? "Update Product"
                  : "Add Product"
              }

            </button>

          </div>

        </div>

        {/* SEARCH */}

        <div className="max-w-6xl mx-auto mt-8 px-4">

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full p-4 rounded-2xl bg-gray-900 border border-gray-800 outline-none"
          />

        </div>

        {/* TABLE */}

        <div className="max-w-6xl mx-auto mt-8 pb-32 px-4">

          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg">

            {/* TABLE HEADER */}

            <div className="grid grid-cols-4 bg-blue-600 p-5 font-semibold text-lg">

              <h2>Product</h2>
              <h2>Price</h2>
              <h2>Category</h2>
              <h2>Actions</h2>

            </div>

            {/* TABLE BODY */}

            {
              filteredProducts.map((product) => (

                <div
                  key={product._id}
                  className="grid grid-cols-4 items-center p-5 border-b border-gray-800 hover:bg-gray-800 transition"
                >

                  <p className="font-medium text-lg">
                    {product.name}
                  </p>

                  <p>
                    ₹{product.price}
                  </p>

                  <p className="text-gray-400">
                    {product.category}
                  </p>

                  <div className="flex gap-3">

                    <button
                      onClick={() => {

                        setName(product.name);

                        setPrice(product.price);

                        setCategory(product.category);

                        setEditingId(product._id);
                      }}
                      className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        deleteProduct(product._id)
                      }
                      className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
                    >
                      Delete
                    </button>

                  </div>

                </div>

              ))
            }

          </div>

        </div>

      </div>

      {/* FOOTER */}

      <Footer />

    </div>

  );
}

export default Products;