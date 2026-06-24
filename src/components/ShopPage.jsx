import { useEffect, useState } from "react";
import { useOutletContext } from "react-router";

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
  } = useOutletContext();

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
    <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.isArray(products) && products.length > 0
        ? products.map((product) => {
            const currQuantity = quantity[product.id] || 1;
            return (
              <div
                key={product.id}
                className="flex flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-md transition hover:shadow-xl"
              >
                <img
                  src={product.image}
                  alt={product.description}
                  className="h-60 w-full object-contain"
                />

                <h1 className="mt-4 line-clamp-2 text-lg font-semibold">
                  {product.title}
                </h1>

                <h2 className="mt-2 text-2xl font-bold text-green-600">
                  ${product.price}
                </h2>

                <div className="mt-4 flex items-center justify-center gap-4">
                  <button
                    onClick={() => handleDecrease(product.id)}
                    className="h-10 w-10 rounded-lg bg-gray-200 text-xl font-bold hover:bg-gray-300"
                  >
                    {"<"}
                  </button>

                  <p className="text-lg font-semibold">{currQuantity}</p>

                  <button
                    onClick={() => handleIncrease(product.id)}
                    className="h-10 w-10 rounded-lg bg-gray-200 text-xl font-bold hover:bg-gray-300"
                  >
                    {">"}
                  </button>
                </div>
                <button
                  onClick={() => {
                    handleClick(product.id);
                  }}
                  className="mt-4 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
                >
                  Add to cart
                </button>
              </div>
            );
          })
        : [...Array(8)].map((_, index) => (
            <div key={index} className="animate-pulse rounded-xl border border-gray-200 bg-white p-4 shadow-md">
              <div className="h-60 w-full rounded bg-gray-200"></div>

              <div className="mt-4 h-5 w-full rounded bg-gray-200"></div>
              <div className="mt-2 h-5 w-3/4 rounded bg-gray-200"></div>

              <div className="mt-4 h-8 w-1/3 rounded bg-gray-200"></div>

              <div className="mt-4 flex items-center justify-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-gray-200"></div>

                <div className="h-6 w-8 rounded bg-gray-200"></div>

                <div className="h-10 w-10 rounded-lg bg-gray-200"></div>
              </div>
              
              <div className="mt-4 h-10 w-full rounded-lg bg-gray-200"></div>
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
  );
}
