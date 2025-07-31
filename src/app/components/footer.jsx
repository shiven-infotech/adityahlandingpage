import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Clinic Info */}
        <div>
          <h2 className="text-xl font-bold mb-3">Aditya Homoeopathic Clinic</h2>
          <p>
            Healing naturally with classical homeopathy. Personalized care for
            all ages and conditions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-yellow-300">Home</a>
            </li>
            <li>
              <a href="/aboutus/aboutus" className="hover:text-yellow-300">About Us</a>
            </li>
            <li>
              <a href="/resources/patientstestimonials" className="hover:text-yellow-300">Resources</a>
            </li>
            <li>
              <a href="/appointment" className="hover:text-yellow-300">Book an Appointment</a>
            </li>
            <li>
              <a href="/contactus/contactus" className="hover:text-yellow-300">Contact us</a>
            </li>
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
          <div className="flex gap-4 text-xl flex-wrap">
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
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              <FaYoutube />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Map */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Find Us</h3>
          <div className="w-full h-48 rounded-md overflow-hidden border-2 border-green-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.1933258210575!2d90.42028971429732!3d23.811062892141926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79f097a1d25%3A0x7f81e76cf960d28b!2sYour%20Clinic%20Location!5e0!3m2!1sen!2sin!4v1629988572356!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location"
            ></iframe>
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
