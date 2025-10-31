import { SocialLinks } from "@/general/constants/Constants";
import { FaInstagram, FaLinkedin, FaFacebook, FaWhatsapp, FaGithub, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
    const socialLinks = [
        { icon: FaLinkedin, label: "LinkedIn", href: SocialLinks.LINKEDIN },
        { icon: SiLeetcode, label: "Leetcode", href: SocialLinks.LEETCODE },
        { icon: FaGithub, label: "Github", href: SocialLinks.GITHUB },
        { icon: FaInstagram, label: "Instagram", href: SocialLinks.INSTAGRAM },
        { icon: FaFacebook, label: "Facebook", href: SocialLinks.FACEBOOK },
        { icon: FaWhatsapp, label: "WhatsApp", href: SocialLinks.WHATSAPP },
        // { icon: FaTwitter, label: "Twitter", href: SocialLinks.TWITTER },
    ];
    
    return (
        <footer className="w-full bg-black text-gray-200 py-8 pt-20 text-sm">
            <div className="max-w-7xl mx-auto px-4">
                {/* Main Footer Content */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Navigation Links */}
                    <div className="flex space-x-8">
                        <a href="#" className="hover:text-white transition-colors">Home</a>
                        <a href="#" className="hover:text-white transition-colors">About</a>
                        <a href="#" className="hover:text-white transition-colors">Gallery</a>
                        <a href="#" className="hover:text-white transition-colors">Contact</a>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex items-center space-x-4">
                        {socialLinks.map(({ icon: Icon, label, href }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                title={label}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors"
                            >
                                <Icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 mt-6 pt-6 text-center text-xs text-gray-400">
                    <div className="uppercase">naswih_mohd__ ALL RIGHTS RESERVED</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
