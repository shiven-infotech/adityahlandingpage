import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className=" sticky top-0 z-50 flex justify-between items-center px-10 py-4 bg-green-700 text-white">
      <div className="flex items-center space-x-2">
        <Image
          src="/logo.png" // ✅ Corrected path
          alt="Logo for Aditya Homoeopathy"
          width={40}
          height={40}
          className="object-contain"
        />
        <span className="text-xl font-bold"> ADITYA HOMOEOPATHY</span>
      </div>
      <ul className="flex space-x-6">
        <li>Home</li>
        <li>Services</li>
        <li>Contacts</li>
        <li>Doctors</li>
        <li>About Us</li>
      </ul>
    </nav>
  );
}
