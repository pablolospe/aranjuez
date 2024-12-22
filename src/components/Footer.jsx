
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-stone-800 text-stone-200 px-4 py-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-center md:text-left">
                    <h3 className="font-serif text-xl mb-2">Aranjuez</h3>
                    <p className="text-stone-400">Country Club - Buenos Aires, Argentina</p>
                </div>
                <div className="flex items-center space-x-6">
                    <a href="#" className="flex items-center hover:text-white">
                        <Phone className="h-5 w-5 mr-2" />
                        <span>+54 11 4444-5555</span>
                    </a>
                    <a href="#" className="hover:text-white">
                        <Instagram className="h-6 w-6" />
                    </a>
                </div>
            </div>
        </footer>
    );

};

export default Footer;