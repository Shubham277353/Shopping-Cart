import { useEffect, useState } from "react";

export default function Shop() {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  console.log(products);
  return (
    <div>
      {Array.isArray(products) && products.length > 0 ? (
        products.map((product) => {
          return (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.description} />
              <h1>{product.title}</h1>
              <h2>{product.price}</h2>
            </div>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
