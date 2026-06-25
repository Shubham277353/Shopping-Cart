import { useContext, useEffect, useState } from "react";
// import { useOutletContext } from "react-router";
import { ShopContext } from "../context/ShopContext";

export default function Shop() {
  const [products, setProducts] = useState();
  const {
    addedProducts,
    setAddedProducts,
    handleDecrease,
    handleIncrease,
    quantity,
    message,
    setMessages,
  } = useContext(ShopContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (res.status >= 400) {
          throw new Error("Api Resoponse is null");
        }
        return res.json();
      })
      .then((json) => setProducts(json))
      .catch((error) => console.log(error));
  }, []);
  // console.log(products);

  function handleClick(value) {
    const isPresent = addedProducts.some((product) => product.id == value);
    if (isPresent) {
      setMessages("Product already in the cart");
      return null;
    }
    const product = products.find((product) => product.id === value);
    const newProduct = [
      ...addedProducts,
      {
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        quantity: quantity[value] || 1,
      },
    ];
    setMessages("Product added to cart.");
    setAddedProducts(newProduct);
  }

  return (
    <div className="bg-slate-50 p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900">Featured Products</h1>

        <p className="mt-2 text-gray-500">Discover our latest collection.</p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.isArray(products) && products.length > 0
          ? products.map((product) => {
              const currQuantity = quantity[product.id] || 1;
              return (
                <div
                  key={product.id}
                  className="group flex flex-col rounded-2xl bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex flex-1 items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.description}
                      className="h-64 w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <h1 className="mt-5 line-clamp-2 text-base font-medium text-slate-800">
                    {product.title}
                  </h1>

                  <h2 className="mt-3 text-3xl font-bold text-green-600">
                    ${product.price}
                  </h2>

                  <div className="mt-4 mx-auto flex w-fit items-center rounded-lg border">
                    <button
                      onClick={() => handleDecrease(product.id)}
                      className="px-3 py-2 text-lg w-10 h-10 font-bold transition hover:bg-gray-100 md:px-4"
                    >
                      -
                    </button>

                    <p className="min-w-12 px-2 text-center font-semibold">
                      {currQuantity}
                    </p>

                    <button
                      onClick={() => handleIncrease(product.id)}
                      className="px-3 py-2 text-lg font-bold transition hover:bg-gray-100 md:px-4"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      handleClick(product.id);
                    }}
                    className="mt-2 rounded-xl bg-slate-900 px-4 py-3 font-medium text-white transition hover:bg-slate-800"
                  >
                    Add to Cart
                  </button>
                </div>
              );
            })
          : [...Array(8)].map((_, index) => (
              <div
                key={index}
                className="animate-pulse rounded-2xl bg-white p-5 shadow-sm"
              >
                <div className="h-64 w-full rounded-xl bg-gray-200"></div>

                <div className="mt-5 h-5 w-full rounded bg-gray-200"></div>
                <div className="mt-2 h-5 w-3/4 rounded bg-gray-200"></div>

                <div className="mt-4 h-8 w-1/3 rounded bg-gray-200"></div>

                <div className="mt-6 h-12 w-full rounded-xl bg-gray-200"></div>
              </div>
            ))}

        {message && (
          <div
            className={`fixed right-4 top-4 z-50 rounded-lg px-5 py-3 shadow-xl ${
              message === "Product added to cart."
                ? "border border-green-300 bg-green-500 text-white"
                : "border border-amber-300 bg-amber-50 text-amber-800"
            }`}
          >
            <p className="font-medium">{message}</p>
          </div>
        )}
      </div>
    </div>
  );
}
