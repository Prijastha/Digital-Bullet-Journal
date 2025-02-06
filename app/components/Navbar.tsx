import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 fixed w-full top-0 z-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Bullet Journal</h1>
        <div className="space-x-6">
          <Link href="#features" className="hover:text-blue-600">Features</Link>
          <Link href="#faq" className="hover:text-blue-600">FAQ</Link>
        </div>
      </div>
    </nav>
  );
}
