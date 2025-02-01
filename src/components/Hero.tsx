const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center my-8">
      <h1 className="text-6xl font-bold text-center">
        Welcome to the Next Ninja!
      </h1>
      <p className="text-center">
        This is a sample app to demonstrate the power of Next.js and Tailwind
        CSS.
      </p>

      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        Get Started
      </button>
    </div>
  );
};

export default Hero;
