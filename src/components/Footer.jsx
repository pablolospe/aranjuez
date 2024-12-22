import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-yellow-400 text-gray-800 p-8 text-center">
            <div className="max-w-6xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-orange-600"><span>Aranjuez</span> Music</h1>
                    <p className="mt-4">
                        Aranjuez Music is a platform dedicated to bringing you the best music from around the world.
                    </p>
                </div>
                <div className="mb-8">
                    <div className="mb-4">
                        <span className="block text-lg"><i className="fas fa-phone"></i> &nbsp; +123-456-789</span>
                        <span className="block text-lg"><i className="fas fa-envelope"></i> &nbsp; info@aranjuezmusic.com</span>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <a href="#" className="text-gray-800 hover:text-orange-600"><i className="fab fa-facebook"></i></a>
                        <a href="#" className="text-gray-800 hover:text-orange-600"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="text-gray-800 hover:text-orange-600"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;