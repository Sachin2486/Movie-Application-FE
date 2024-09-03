import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-white text-3xl">Netflix Clone</h1>
        <div>
          <Link href="/login">
            <a className="text-white mr-4">Login</a>
          </Link>
          <Link href="/signup">
            <a className="text-white">Sign Up</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
