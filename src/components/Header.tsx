import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-slate-700">
      <h1 className="text-2xl font-bold">Next Ninja</h1>
      <nav className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/about">About</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/login">Login</Link>
      </nav>
    </div>
  );
};

export default Header;
