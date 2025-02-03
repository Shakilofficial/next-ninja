import Hero from "@/components/Hero";
import Link from "next/link";
interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  quantity: number;
  inStock: boolean;
}
const MainPage = async () => {
  const res = await fetch("http://localhost:5000/products", {
    next: { revalidate: 60 },
  });
  const products = await res.json();
 
  return (
    <div className="flex flex-col items-center justify-center mb-8">
      <Hero />
      <div className="grid grid-cols-3 gap-4 max-w-[90%] mx-auto my-10">
        {products.slice(0, 3).map((prod: Product) => {
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
      <Link href="/products">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View All Products
        </button>
      </Link>
    </div>
  );
};

export default MainPage;
