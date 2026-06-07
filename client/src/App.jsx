import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Analytics from "./pages/Analytics";
import About from "./pages/About";

import "./index.css";

function App() {

  return (

    <BrowserRouter>

      <div className="bg-gray-950 min-h-screen text-white">

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/products"
            element={<Products />}
          />

          <Route
            path="/analytics"
            element={<Analytics />}
          />

          <Route
            path="/about"
            element={<About />}
          />

        </Routes>

      </div>

    </BrowserRouter>

  );
}

export default App;