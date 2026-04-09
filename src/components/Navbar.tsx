// src/components/Navbar.tsx
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-white py-4 flex justify-between">
            <h1 className="font-bold text-md">FINEX</h1>

            <div className="flex items-center gap-6">
                <Link to="/" className="hover:text-gray-300">Employee</Link>
                <Link to="/plane" className="hover:text-gray-300">Plane</Link>
                <Link to="/weather" className="hover:text-gray-300">Weather</Link>
            </div>
        </nav>
    );
}