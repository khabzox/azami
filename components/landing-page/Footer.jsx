export function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8 mt-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row md:justify-between">
                    {/* Footer Left Section */}
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold mb-2">Azami</h2>
                        <p className="text-gray-400 mb-4">
                            Building the future with innovative solutions.
                        </p>
                        <p className="text-gray-400 mb-2">1234 Street Address</p>
                        <p className="text-gray-400 mb-2">City, State, ZIP</p>
                        <p className="text-gray-400">Email: info@yourcompany.com</p>
                    </div>

                    {/* Footer Center Section */}
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul>
                            <li><a href="/" className="hover:underline">Home</a></li>
                            <li><a href="/about" className="hover:underline">About Us</a></li>
                            <li><a href="/services" className="hover:underline">Services</a></li>
                            <li><a href="/projects" className="hover:underline">Projects</a></li>
                            <li><a href="/contact" className="hover:underline">Contact</a></li>
                        </ul>
                    </div>

                    {/* Footer Right Section */}
                    <div className="flex flex-col">
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                                <i className="fab fa-facebook-f"></i>  {/* Add Font Awesome icon */}
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                                <i className="fab fa-twitter"></i>  {/* Add Font Awesome icon */}
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                                <i className="fab fa-linkedin-in"></i>  {/* Add Font Awesome icon */}
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                                <i className="fab fa-instagram"></i>  {/* Add Font Awesome icon */}
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-4 text-center">
                    <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Azami.</p>
                </div>
            </div>
        </footer>
    );
}
