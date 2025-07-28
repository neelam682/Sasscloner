import React, { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    // Placeholder function to open login popup
    const handleLoginOpen = () => {
        // Replace with your actual login popup logic
        console.log("Open login popup");
        // Example: setShowLoginModal(true)
    };

    return (
        <header className="sticky top-0 left-0 w-full z-50 bg-transparent border-b-[0.2px] border-gray-900">
            <div className="max-w-7xl mx-auto px-6 py-7 flex items-center justify-between">

                {/* Left: Logo */}
                <div className="text-white font-extrabold text-2xl tracking-tight">
                    SaaScloner
                </div>

                {/* Center: Rounded Nav Links (desktop only) */}
                <nav className="hidden md:flex space-x-6 bg-transparent border border-gray-900 px-6 py-2.5 rounded-full text-sm text-white font-medium">
                    <a href="#" className="hover:text-blue-400 transition">Pricing</a>
                    <a href="#" className="hover:text-blue-400 transition">Blog</a>
                    <a href="#" className="hover:text-blue-400 transition">Docs</a>
                </nav>

                {/* Right: Buttons */}
                <div className="flex items-center space-x-4">

                    {/* Desktop buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button onClick={handleLoginOpen} className="text-white font-medium text-sm hover:text-blue-400 transition">
                            Login
                        </button>
                        <button className="btn btn-primary">Start for Free</button>
                    </div>

                    {/* Mobile: Primary button + Hamburger */}
                    <div className="flex md:hidden items-center space-x-2">
                        <button onClick={handleLoginOpen} className="btn btn-primary text-sm px-4 py-1">
                            Login
                        </button>
                        <button
                            onClick={() => setOpen(!open)}
                            className="text-white focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 24 24"
                            >
                                {open ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M3 12h18M3 6h18M3 18h18" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {open && (
                <nav className="md:hidden bg-transparent border-t border-blue-400 px-6 py-4 space-y-3 text-white font-medium text-center">
                    <a href="#" className="block hover:text-blue-400 transition">Pricing</a>
                    <a href="#" className="block hover:text-blue-400 transition">Blog</a>
                    <a href="#" className="block hover:text-blue-400 transition">Docs</a>
                </nav>
            )}
        </header>
    );
}
