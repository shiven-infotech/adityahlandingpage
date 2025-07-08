import { FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white py-10 px-6">
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
            <li><a href="/" className="hover:text-green-200">Home</a></li>
            <li><a href="/about" className="hover:text-green-200">About Us</a></li>
            <li><a href="/services" className="hover:text-green-200">Services</a></li>
            <li><a href="/appointment" className="hover:text-green-200">Book Appointment</a></li>
            <li><a href="/contact" className="hover:text-green-200">Contact</a></li>
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
          <div className="flex gap-4">
            <a href="#" className="hover:text-green-200">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-green-200">
              <FaInstagram />
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
