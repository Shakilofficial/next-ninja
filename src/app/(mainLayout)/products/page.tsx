import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "Products page",
};

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  quantity: number;
  inStock: boolean;
}

const ProductsPage = async () => {
  const res = await fetch("http://localhost:5000/products", {
    cache: "no-store",
  });
  const prodtucts = await res.json();
  console.log(prodtucts);
  return (
    <div className="max-w-[90%] mx-auto my-10">
      <h1 className="text-center my-4">This is the Products page component</h1>
      <div className="grid grid-cols-3 gap-4">
        {prodtucts.map((prod: Product) => {
          return (
            <div
              className="border border-slate-400 rounded-lg p-4"
              key={prod.id}
            >
              <h2>{prod.title}</h2>
              <p>{prod.description}</p>
              <p>Price: {prod.price}</p>
              <p>Category: {prod.category}</p>
              <p>Quantity: {prod.quantity}</p>
              <p>In Stock: {prod.inStock ? "Yes" : "No"}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsPage;
