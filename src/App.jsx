import { Link, Outlet } from "react-router";
import { useState } from "react";

const App = () => {
  const [addedProducts, setAddedProducts] = useState([]);
  const [quantity, setQuantity] = useState({});

  function handleIncrease(value) {
    setQuantity({ ...quantity, [value]: (quantity[value] || 1) + 1 });
  }
  function handleDecrease(value) {
    quantity[value] > 0
      ? setQuantity({ ...quantity, [value]: (quantity[value] || 0) - 1 })
      : null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-slate-900 text-white shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
          <h1 className="text-2xl font-bold">ShopKart</h1>
          <ul className="mx-auto flex max-w-7xl justify-center gap-8 p-4 text-lg font-medium">
            <li>
              <Link to="/home" className="transition hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="transition hover:text-blue-400">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/cart" className="transition hover:text-blue-400">
                Cart
              </Link>
            </li>
          </ul>
          <div className="font-semibold">Cart ({addedProducts.length})</div>
        </div>
      </nav>

      {/* outlet to render the different pages in between the navbar and the footer. */}
      {/* used context property of the outlet to send addedProducts as props to both shop and cart pages */}

      <main className="flex-1 bg-gray-100">
        <Outlet context={{ addedProducts, setAddedProducts, handleDecrease, handleIncrease, quantity }} />
      </main>

      <footer className="bg-slate-900 px-6 py-8 text-center text-gray-300">
        <p>📞 Phone: 5453485787</p>
        <p>📧 Email: gksjdg@gmail.com</p>
        <p>📍 Address: Jane Street, 12121, California, USA</p>
      </footer>
    </div>
  );
};

export default App;
