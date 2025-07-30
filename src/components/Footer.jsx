import React from "react";

export default function Footer() {
    return (
        <footer className="bg-black border-t border-blue-600 py-10 px-6">
            <div className="max-w-7xl mx-auto text-center text-blue-300">
                <p className="mb-4">&copy; {new Date().getFullYear()} SaaSCloner. All rights reserved.</p>

                <div className="flex justify-center space-x-6 mb-6">
                    <a href="https://twitter.com/saascloner" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                        Twitter
                    </a>
                    <a href="https://github.com/neelam682/Sasscloner" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                        GitHub
                    </a>
                    <a href="#contact" className="hover:text-blue-400 transition">
                        Contact
                    </a>
                </div>

                <p className="text-gray-600 text-sm">
                    Built with ❤️ using React, Tailwind CSS, and Firebase.
                </p>
            </div>
        </footer>
    );
}
