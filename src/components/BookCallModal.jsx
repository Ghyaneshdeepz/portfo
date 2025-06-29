
import React from "react";

const BookCallModal = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 backdrop-blur-sm" onClick={onClose}>
            <div className="w-[30rem] rounded-t-2xl bg-[#121212] border border-[#2b2b2b] px-3 pb-5" onClick={(e) => e.stopPropagation()}>
                <div className="mt-5 w-full flex items-center justify-center">
                    <div className="bg-[#262626] w-24 h-1.5 rounded-2xl"></div>
                </div>

                <div className="w-full mt-6 h-12 flex justify-between rounded-lg py-2 bg-[#1c1c1c] px-3">
                    <input
                        type="text"
                        placeholder="Send Message"
                        className="h-full w-3/4 bg-transparent text-white ring-0 focus:outline-none caret-white"
                    />
                    <button className="h-full bg-[#262626] text-white cursor-pointer rounded-md font-bold px-3">
                        Submit
                    </button>
                </div>

                <div className="grid grid-cols-2 gap-5 mt-4">
                    <div className="bg-[#181818] rounded-2xl border border-[#2b2b2b] h-[25vh]">
                        <div className="h-16 rounded-t-2xl border-b border-[#2b2b2b] w-full bg-gradient-to-r from-[#181d2e] to-transparent text-white font-bold p-5">
                            Call Now
                        </div>
                        <div className="w-full h-auto p-4 py-6">
                            <h1 className="text-white font-bold">+91 9108591464</h1>
                            <p className="text-[#727272] font-semibold text-sm">Can call 24 * 7</p>
                        </div>
                    </div>

                    <div className="bg-[#181818] rounded-2xl border border-[#2b2b2b] h-[25vh]">
                        <div className="h-16 rounded-t-2xl border-b border-[#2b2b2b] w-full bg-gradient-to-r from-[#24172d] to-transparent text-white font-bold p-5">
                            Do Mail
                        </div>
                        <div className="w-full h-auto p-4 py-6 break-words">
                            <h1 className="text-white font-bold break-all">ghyanesh.co@gmail.com</h1>
                            <p className="text-[#727272] font-semibold text-sm">Send me an mail directly</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCallModal;
