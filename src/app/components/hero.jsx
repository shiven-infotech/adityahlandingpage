export default function Hero() {
  return (
  <div className="relative w-full h-[650px]">
      <img
        src="https://www.canadiancmc.com/wp-content/uploads/2015/09/HP03.webp"
        alt="Background"
        className="object-cover w-full h-[650px] absolute inset-0"
      />
      <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-[#FFFDD0] text-6xl font-bold mb-4">Welcome to Aditya Homeopathy</h1>
        <p className="text-[#FFFDD0] text-2xl mb-6">Natural Healing with Aditya Homeopathy</p>
        <button className="bg-green-700 hover:bg-yellow-300 text-white px-6 py-2 rounded-xl ">
          Book Appointment
        </button>
      </div>
    </div>
  );
}