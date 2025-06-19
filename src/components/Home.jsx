const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center text-white text-center px-4"
    >
      <div className="flex items-end space-x-2 text-6xl md:text-7xl">
        <span className="font-bold font-berkshire leading-none -mb-2">my</span>

        <span className="relative font-cherry group cursor-pointer">
          Portfolio
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full" />
        </span>
      </div>
    </section>
  );
};

export default Home;
