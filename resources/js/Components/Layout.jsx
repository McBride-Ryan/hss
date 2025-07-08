import React from 'react';
import { Link } from '@inertiajs/react'; // Use Inertia's Link for client-side navigation

export default function Layout({ children }) { // Added 'auth' prop for conditional rendering
    return (
        <div className="min-h-screen flex flex-col bg-gray-100 font-sans antialiased">
            {/* Navigation Bar */}
            <nav className="shadow-md p-4" style={{backgroundColor: '#1E1E1E'}}>
                <div className="container mx-auto flex justify-between items-center">
                    <div>
                        <Link href="/" className="hidden md:flex">
                            <img src="https://homesourcesystems.com/wp-content/uploads/2025/04/logo.svg" alt="" />
                        </Link>
                        <Link href="/" className="flex md:hidden">
                            <img src="https://homesourcesystems.com/wp-content/uploads/2025/05/MobileLogo.svg" alt="" />
                        </Link>
                    </div>
                    <div className="space-x-4">
                        <Link href="/" className="text-gray-100 hover:text-indigo-600 font-medium transition-colors duration-300 px-3 py-2 rounded-md hover:bg-gray-200">
                            Home
                        </Link>
                        <Link href="/dashboard" className="text-gray-100 hover:text-indigo-600 font-medium transition-colors duration-300 px-3 py-2 rounded-md hover:bg-gray-200">
                            Dashboard
                        </Link>
                        <Link href="/about" className="text-gray-100 hover:text-indigo-600 font-medium transition-colors duration-300 px-3 py-2 rounded-md hover:bg-gray-200">
                            About
                        </Link>
                        {/* Conditional links based on authentication status */}
                        {/* {auth && auth.user ? (
                            <Link href="/logout" method="post" as="button" className="text-red-600 hover:text-red-800 font-medium transition-colors duration-300 px-3 py-2 rounded-md hover:bg-gray-200">
                                Logout
                            </Link>
                        ) : (
                            <Link href="/login" className="text-green-600 hover:text-green-800 font-medium transition-colors duration-300 px-3 py-2 rounded-md hover:bg-gray-200">
                                Login
                            </Link>
                        )} */}
                    </div>
                </div>
            </nav>

            {/* Main Content Area */}
            <main className="flex-grow container mx-auto p-6">
                {children}
            </main>

            {/* Footer */}
            <footer className="text-white p-6 mt-8 shadow-inner" style={{backgroundColor: '#1E1E1E'}}>
                <div className="container mx-auto text-center">
                    <p>&copy; {new Date().getFullYear()} My Inertia App. All rights reserved.</p>
                    <div className="flex justify-center space-x-4 mt-2">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
