export default function ContactUS() {
    return (
        <div className="max-w-screen  mx-auto px-6 py-12 bg-[#FFFDD0]">
        <h1 className="text-3xl font-bold text-green-700 mb-10 text-center">
            Contact Us
        </h1>
        <div className="bg-[#FFFDD0] rounded-lg shadow-lg p-8">
            <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded-lg p-4 w-full"
                required
                />
                <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded-lg p-4 w-full"
                required
                />
            </div>
            <textarea
                placeholder="Your Message"
                className="border border-gray-300 rounded-lg p-4 w-full h-32 mb-6"
                required
            ></textarea>
            <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition"
            >
                Send Message
            </button>
            </form>
        </div>
        </div>
    );
}