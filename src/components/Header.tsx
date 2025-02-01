import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold">Next Ninja</h1>
      <nav className="flex gap-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/auth">Auth</Link>
      </nav>
    </div>
  );
};

export default Header;
