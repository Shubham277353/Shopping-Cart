import { useEffect, useState } from "react";
import { useOutletContext } from "react-router";

export default function Shop() {
  const [products, setProducts] = useState();
  const [popup, setPopup] = useState(false);
  const {
    addedProducts,
    setAddedProducts,
    handleDecrease,
    handleIncrease,
    quantity,
  } = useOutletContext();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  // console.log(products);


  function handleClick(value) {
    const isPresent = addedProducts.some((product) => product.id == value);
    if (isPresent) {
      setPopup(true);

      setTimeout(() => {
        setPopup(false);
      }, 3000);
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
    setAddedProducts(newProduct);
  }

  return (
    <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.isArray(products) && products.length > 0 ? (
        products.map((product) => {
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
                onClick={() => handleClick(product.id)}
                className="mt-4 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
              >
                Add to cart
              </button>
            </div>
          );
        })
      ) : (
        <p className="col-span-full text-center text-xl">Loading...</p>
      )}

      {popup ?
      <div className="fixed right-4 top-4 z-50 rounded-lg border border-amber-300 bg-white px-5 py-3 shadow-xl">
        <p className="font-medium text-amber-700">
          Product is already in the cart
        </p>
      </div>
      : null}

    </div>
  );
}
