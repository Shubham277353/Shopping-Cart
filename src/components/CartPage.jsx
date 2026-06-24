import { useOutletContext } from "react-router";
import { Trash } from "lucide-react";
import { Link } from "react-router";
// import { useState } from "react";

export default function Cart() {
  const {
    addedProducts,
    setAddedProducts,
    handleDecrease,
    handleIncrease,
    quantity,
    message,
    setMessages,
  } = useOutletContext();


  const total = addedProducts.reduce((sum, product) => {
    const currQuantity = quantity[product.id] || 1;
    return sum + product.price * currQuantity;
  }, 0);

  function handleDelete(id) {
    const newProducts = addedProducts.filter((product) => product.id != id);
    setMessages("Product removed from cart.");
    setAddedProducts(newProducts);
  }

  // console.log(addedProducts);

  return (
    <div className="mx-auto max-w-5xl p-6">
      <h1 className="mb-8 text-4xl font-bold">Shopping Cart</h1>

      {addedProducts && addedProducts.length > 0 ? (
        <div className="mx-auto max-w-7xl p-6">
  <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
    
    {/* Products */}
    <div className="flex flex-col gap-4">
      {addedProducts.map((product) => {
        const currQuantity = quantity[product.id] || 1;

        return (
          <div
            key={product.id}
            className="flex items-center gap-6 rounded-xl border border-gray-200 bg-white p-5 shadow-md transition hover:shadow-lg"
          >
            <Trash
              className="cursor-pointer text-red-500 transition hover:scale-110 hover:text-red-700"
              onClick={() => handleDelete(product.id)}
            />

            <div className="flex h-32 w-32 items-center justify-center">
              <img
                src={product.image}
                alt={product.description}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div className="flex-1">
              <h1 className="text-lg font-medium text-gray-800">
                {product.title}
              </h1>

              <h2 className="mt-2 text-2xl font-bold text-green-600">
                ${product.price}
              </h2>
            </div>

            <div className="flex items-center rounded-lg border border-gray-300">
              <button
                onClick={() => handleDecrease(product.id)}
                className="px-4 py-2 text-lg font-bold transition hover:bg-gray-100"
              >
                -
              </button>

              <p className="min-w-12 px-2 text-center font-semibold">
                {currQuantity}
              </p>

              <button
                onClick={() => handleIncrease(product.id)}
                className="px-4 py-2 text-lg font-bold transition hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>
        );
      })}
    </div>

    {/* Order Summary */}
    <div className="h-fit rounded-2xl bg-white p-6 shadow-md lg:sticky lg:top-24">
      <h2 className="mb-6 border-b pb-4 text-2xl font-bold">
        Order Summary
      </h2>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-semibold">
            ${total.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">Items</span>
          <span className="font-semibold">
            {addedProducts.length}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">Shipping</span>
          <span className="font-semibold text-green-600">
            Free
          </span>
        </div>

        <div className="border-t pt-4">
          <div className="mb-6 flex justify-between text-xl font-bold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <Link
            to="/success"
            className="block w-full rounded-xl bg-slate-900 px-8 py-3 text-center font-semibold text-white shadow-md transition hover:bg-slate-800 hover:shadow-lg"
          >
            Proceed to Checkout →
          </Link>
        </div>
      </div>
    </div>

  </div>
</div>
      ) : (
        <div className="rounded-xl bg-white py-20 text-center shadow-md">
          <h1 className="text-3xl font-bold">Your Cart is Empty</h1>

          <p className="mt-3 text-gray-500">
            Add some products to get started.
          </p>
        </div>
      )}

      {message && (
        <div className="fixed right-4 top-4 z-50 rounded-lg border border-amber-300 bg-white px-5 py-3 shadow-xl">
          <p className="font-medium text-amber-700">{message}</p>
        </div>
      )}
    </div>
  );
}
