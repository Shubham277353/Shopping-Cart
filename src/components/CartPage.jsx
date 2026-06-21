import { useOutletContext } from "react-router";

export default function Cart() {
  const { addedProducts } = useOutletContext();
  return (
    <div>
      {addedProducts ? addedProducts.map((product, index) => (
        <div key={product.id} className="card-contianer">
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
        </div>
      )) : 
      null
      }
    </div>
  );
}
