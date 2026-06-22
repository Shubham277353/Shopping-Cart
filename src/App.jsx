import { Link, Outlet } from "react-router";
import { useState } from "react";

const App = () => {
  const [addedProducts, setAddedProducts] = useState([]);
  const [quantity, setQuantity] = useState({});
  const [message, setMessage] = useState("");

    function setMessages(value) {
    setMessage(value);

    setTimeout(() => {
      setMessage("");
    }, 2000);
  }

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
      <nav className="sticky top-0 z-50 bg-slate-900 text-white shadow-md">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 p-4 md:flex-row md:justify-between">
          <h1 className="cursor-pointer text-2xl font-extrabold tracking-wide">
            <Link to="/home">DaLimit</Link>
          </h1>
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
              <Link
                to="/cart"
                className="relative transition hover:text-blue-400"
              >
                Cart
                {addedProducts.length > 0 && (
                  <span className="absolute -right-4 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                    {addedProducts.length}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* outlet to render the different pages in between the navbar and the footer. */}
      {/* used context property of the outlet to send addedProducts as props to both shop and cart pages */}

      <main className="flex-1 bg-gray-100">
        <Outlet
          context={{
            addedProducts,
            setAddedProducts,
            handleDecrease,
            handleIncrease,
            quantity,
            message,
            setMessage,
            setMessages
          }}
        />
      </main>

      <footer className="bg-slate-900 text-gray-300">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-3 text-xl font-bold text-white">DaLimit</h3>
              <p className="text-sm text-gray-400">
                Your one-stop destination for quality products at affordable
                prices.
              </p>
            </div>

            <div>
              <h4 className="mb-3 font-semibold text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/home" className="hover:text-blue-400">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="hover:text-blue-400">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link to="/cart" className="hover:text-blue-400">
                    Cart
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 font-semibold text-white">Contact</h4>
              <div className="space-y-2 text-sm">
                <p>📞 +1 (555) 123-4567</p>
                <p>📧 support@dalimit.com</p>
                <p>📍 California, USA</p>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-700 pt-6 text-center text-sm text-gray-500">
            © 2026 DaLimit. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
