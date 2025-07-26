import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube, FaWhatsapp, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full bg-black text-gray-200 pt-16 pb-6 text-sm">
            <div className="max-w-7xl mx-auto px-4">
                {/* Top: Columns */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 border-b border-gray-700 pb-8">
                    {/* COMPANY */}
                    <div>
                        <h3 className=" font-medium mb-4 text-white text-base">COMPANY</h3>
                        <ul className="space-y-2 font-extralight text-white/70">
                            <li><a href="#" className="hover:underline">Home</a></li>
                            <li><a href="#" className="hover:underline">Industry</a></li>
                            <li><a href="#" className="hover:underline">Portfolio</a></li>
                            <li><a href="#" className="hover:underline">Blog</a></li>
                            <li><a href="#" className="hover:underline">About</a></li>
                            <li><a href="#" className="hover:underline">Career</a></li>
                            <li><a href="#" className="hover:underline">Contact</a></li>
                        </ul>
                    </div>
                    {/* SERVICE */}
                    <div>
                        <h3 className=" font-medium mb-4 text-white text-base">SERVICE</h3>
                        <ul className="space-y-2 font-extralight text-white/70">
                            <li><a href="#" className="hover:underline">App Development</a></li>
                            <li><a href="#" className="hover:underline">Web Development</a></li>
                            <li><a href="#" className="hover:underline">UI/UX Designing</a></li>
                            <li><a href="#" className="hover:underline">Software Development</a></li>
                        </ul>
                    </div>
                    {/* OTHERS */}
                    <div>
                        <h3 className=" font-medium mb-4 text-white text-base">OTHERS</h3>
                        <ul className="space-y-2 font-extralight text-white/70">
                            <li><a href="#" className="hover:underline">Testimonials</a></li>
                            <li><a href="#" className="hover:underline">Meet Our Team</a></li>
                            <li><a href="#" className="hover:underline">Collaborate With</a></li>
                            <li><a href="#" className="hover:underline">FAQ</a></li>
                            <li><a href="#" className="hover:underline">Trusted Clients</a></li>
                            <li><a href="#" className="hover:underline">Latest Project</a></li>
                        </ul>
                    </div>
                    {/* CONTACT */}
                    <div className="">
                        <h3 className="font-medium mb-4 text-white text-base">CONTACT</h3>
                        <ul className="space-y-2 font-extralight text-white/70">
                            <li>General : <a href="tel:+9197902524202" className="hover:underline">+91 7902 524 202</a></li>
                            <li>Sales : <a href="tel:+916282963451" className="hover:underline">+91 6282 963 451</a></li>
                            <li>HR : <a href="tel:+916282936455" className="hover:underline">+91 6282 936 455</a></li>
                            <li>Email : <a href="mailto:info@totalx.io" className="hover:underline">info@totalx.io</a></li>
                            <li>WhatsApp : <a href="https://wa.me/917902524202" className="hover:underline">+91 7902 524 202</a></li>
                        </ul>
                    </div>
                </div>
                {/* Middle: Addresses & Socials */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 py-8 border-b border-gray-700">
                    <div className="flex-1 max-w-sm w-full">
                        <div className="mb-4 font-bold text-white">Office Address</div>
                        <div>Total X Software, 3rd Floor, Hi LITE Business Park, HILITE City, Calicut, Kerala, India, PIN Code: 673014</div>
                    </div>
                    <div className="flex items-center space-x-4 mt-6 md:mt-0">
                        <a href="#" aria-label="Instagram" className="hover:text-white"><FaInstagram size={22} /></a>
                        <a href="#" aria-label="LinkedIn" className="hover:text-white"><FaLinkedin size={22} /></a>
                        <a href="#" aria-label="Facebook" className="hover:text-white"><FaFacebook size={22} /></a>
                        <a href="#" aria-label="YouTube" className="hover:text-white"><FaYoutube size={22} /></a>
                        <a href="#" aria-label="WhatsApp" className="hover:text-white"><FaWhatsapp size={22} /></a>
                        <a href="#" aria-label="GitHub" className="hover:text-white"><FaGithub size={22} /></a>
                        <a href="#" aria-label="Twitter" className="hover:text-white"><FaTwitter size={22} /></a>
                    </div>
                </div>
                {/* Bottom: Policies & Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-xs text-gray-400">
                    <div className="flex space-x-6 mb-2 md:mb-0">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <a href="#" className="hover:underline">Terms And Condition</a>
                    </div>
                    <div className="uppercase">naswih_mohd__ ALL RIGHTS RESERVED</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
