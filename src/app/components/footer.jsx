import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Clinic Info */}
        <div>
          <h2 className="text-xl font-bold mb-3">Aditya Homeopathy Clinic</h2>
          <p>
            Healing naturally with classical homeopathy. Personalized care for
            all ages and conditions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-yellow-300">Home</a></li>
            <li><a href="/about" className="hover:text-yellow-300">About Us</a></li>
            <li><a href="/services" className="hover:text-yellow-300">Services</a></li>
            <li><a href="/appointment" className="hover:text-yellow-300">Book Appointment</a></li>
            <li><a href="/contact" className="hover:text-yellow-300">Contact</a></li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <div className="flex items-center gap-2 text-sm mb-2">
            <FaPhoneAlt /> <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-2 text-sm mb-4">
            <FaEnvelope /> <span>info@adityahomeopathy.com</span>
          </div>
          <div className="flex gap-4 text-xl">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              <FaInstagram />
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              <FaWhatsapp />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-green-600 pt-4 text-center text-sm text-green-200">
        © {new Date().getFullYear()} Aditya Homeopathy Clinic. All rights reserved.
      </div>
    </footer>
  );
}
