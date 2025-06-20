import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-purple-800 via-indigo-900 to-black p-5 sticky top-0 z-50 shadow-lg">
      <ul className="flex justify-center space-x-12 text-white text-xl font-semibold">
        <li>
          <Link to="/" className="hover:text-pink-400 transition duration-300">Home</Link>
        </li>
        <li>
          <Link to="/surahs" className="hover:text-pink-400 transition duration-300">Surahs</Link>
        </li>
        <li>
          <Link to="/hadiths" className="hover:text-pink-400 transition duration-300">Hadiths</Link>
        </li>
        <li>
          <Link to="/Duas" className="hover:text-pink-400 transition duration-300">Duas</Link>
        </li>
        <li>
          <Link to="/tajwid" className="hover:text-pink-400 transition duration-300">Tajwid</Link>
        </li>
      </ul>
    </nav>
  );
}
