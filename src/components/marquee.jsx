export default function MarqueeRibbon() {
  return (
    <div className="relative w-full h-40 mt-10 sm:h-48 md:h-60 bg-black flex items-center justify-center overflow-hidden">
      

      <div className="absolute w-[250%] rotate-2 z-0">
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 opacity-30 py-4 sm:py-5 md:py-6 shadow-md"></div>
      </div>

      <div className="absolute w-[250%] -rotate-2 z-10">
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 sm:py-4 md:py-5 px-6 sm:px-8 md:px-10 text-center whitespace-nowrap font-semibold text-sm sm:text-base md:text-lg tracking-wide shadow-lg">
          <span className="mx-2 sm:mx-3 md:mx-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-300">ENGAGING</span>
          <span className="mx-1 sm:mx-2">✨</span>
          <span className="mx-2 sm:mx-3 md:mx-4">ACCESSIBLE</span>
          <span className="mx-1 sm:mx-2">✨</span>
          <span className="mx-2 sm:mx-3 md:mx-4">RESPONSIVE</span>
          <span className="mx-1 sm:mx-2">✨</span>
          <span className="mx-2 sm:mx-3 md:mx-4">DYNAMIC</span>
          <span className="mx-1 sm:mx-2">✨</span>
          <span className="mx-2 sm:mx-3 md:mx-4">SCALABLE</span>
          <span className="mx-1 sm:mx-2">✨</span>
          <span className="mx-2 sm:mx-3 md:mx-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-300">INTERACTIVE</span>
        </div>
      </div>

    </div>
  );
}
