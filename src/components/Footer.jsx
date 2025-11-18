
import logo from '../assets/perfume-logo.jpg'
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className='bg-primary text-white'>
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <img className='w-24 rounded-sm mb-1' src={logo} alt="logo" />
                        <p className="text-gray-400 text-sm">
                            Your one stop perfume plug. Discover luxury fragrances from the world's most prestigious brands.
                        </p>
                    </div>
                    {/* Quick Links */}
                    <div>
                        <h4 className="uppercase tracking-wider text-sm mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-accent transition-colors text-sm">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-accent transition-colors text-sm">Contact</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-accent transition-colors text-sm">FAQ</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-accent transition-colors text-sm">Store Locator</a></li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h4 className="uppercase tracking-wider text-sm mb-4">Customer Service</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-accent transition-colors text-sm">Shipping Info</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-accent transition-colors text-sm">Returns</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-accent transition-colors text-sm">Track Order</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-accent transition-colors text-sm">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Social & Payment */}
                    <div>
                        <h4 className="uppercase tracking-wider text-sm mb-4">Follow Us</h4>
                        <div className="flex gap-4 mb-6">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent transition-colors flex items-center justify-center">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent transition-colors flex items-center justify-center">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent transition-colors flex items-center justify-center">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent transition-colors flex items-center justify-center">
                                <FaWhatsapp className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">We Accept</p>
                    <div className="flex gap-2">
                        <div className="bg-white/10 px-2 py-1 rounded text-xs">VISA</div>
                        <div className="bg-white/10 px-2 py-1 rounded text-xs">MC</div>
                        <div className="bg-white/10 px-2 py-1 rounded text-xs">OPAY</div>
                    </div>

                </div>
                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-400">
                        © 2025 Lolly's Hub. All rights reserved.
                    </p>
                    <p className="text-sm text-gray-400">
                        Your one stop perfume plug
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer