// pages/index.js
import Navbar from "../components/Navbar";

export default function Hero() {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero.jpg')", // ✅ Correct
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Navbar */}
      {/* <Navbar /> */}

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex items-center h-full px-6">
        <div className="flex-1 text-white">
          <h1 className="text-4xl font-bold">Lorem Ipsum</h1>
          <p className="mt-4 max-w-xl text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-black rounded-md shadow hover:bg-gray-200">
            Read More
          </button>
        </div>

        {/* Right-side image */}
        <div className="hidden md:block w-80 ml-8">
          <div className="bg-[#6b3f2d] p-2">
            <img
              src="/actor.png"
              alt="Person"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
