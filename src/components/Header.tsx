"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-between items-center p-4 bg-slate-700">
      <h1 className="text-2xl font-bold">Next Ninja</h1>
      <nav className="flex gap-4">
        <Link className={pathname == "/" ? "text-blue-500" : ""} href="/">
          Home
        </Link>
        <Link
          className={pathname == "/products" ? "text-blue-500" : ""}
          href="/products"
        >
          Products
        </Link>
        <Link
          className={pathname == "/about" ? "text-blue-500" : ""}
          href="/about"
        >
          About
        </Link>

        <Link
          className={pathname == "/dashboard" ? "text-blue-500" : ""}
          href="/dashboard"
        >
          Dashboard
        </Link>
        <Link
          className={pathname == "/login" ? "text-blue-500" : ""}
          href="/login"
        >
          Login
        </Link>
      </nav>
    </div>
  );
};

export default Header;
