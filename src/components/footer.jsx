import bg from "../assets/bg2.avif";
import logo from "../assets/techbeedi.png";

export default function Footer() {
    return (
        <div className="relative w-full min-h-screen overflow-hidden bg-black flex flex-col">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.3,
                    zIndex: 0,
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-70 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

            <div className="relative z-20 px-4 pt-20 flex flex-col items-center text-center gap-4">
                <img
                    src={logo}
                    alt="Techbeedi Logo"
                    className="w-24 sm:w-28 md:w-32"
                    loading="lazy"
                />
                <h1 className="text-3xl sm:text-4xl font-bold  text-white">
                    Turning Ideas Into <span className="font-medium italic">Reality</span>
                </h1>
                <h1 className="text-3xl sm:text-4xl font-bold  text-white">
                    <span className=" font-medium italic">Let’s Build</span> Something Great Together
                </h1>

                <div className="mt-10">
                    <h1 className="font-bold text-xl">I'm open to full-time opportunities and freelance collaborations.</h1>
                    <p className="mt-4">I specialize in building responsive web applicationsand creating intuitive <br /> engaging user experiences.</p>
                </div>
            </div>

            <footer className="relative z-20 mt-auto border-t border-white/30 px-4 py-6 sm:px-6 md:px-8 max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 text-white">
                <div className="flex-shrink-0 mb-4 md:mb-0 flex justify-center md:justify-start w-full md:w-auto">
                    <img
                        src={logo}
                        alt="Techbeedi Logo"
                        className="w-24 sm:w-28 md:w-32"
                        loading="lazy"
                    />
                </div>
                <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 sm:gap-8 text-center sm:text-left w-full md:w-auto text-sm sm:text-base">
                    <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <a href="tel:+919108591464" className="hover:underline block">
                            +91 9108591464
                        </a>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <a href="mailto:ghyanesh.co@gmail.com" className="hover:underline block">
                            ghyanesh.co@gmail.com
                        </a>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-1">Address</h3>
                        <p>Mangalore 574224</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
