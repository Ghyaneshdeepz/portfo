import React, { useState } from "react";
import { fetchFigmaData } from "./services/figma.js";
import { getFigmaFileKey } from "./lib/getFigmaFileKey.js";
import { convertNodeToTailwind } from "./lib/convertNodeToTailwind.js";

const FigmaConverter = () => {
  const [figmaUrl, setFigmaUrl] = useState("");
  const [output, setOutput] = useState("");

 const handleConvert = async () => {
  console.log("Convert button clicked");

  const fileKey = getFigmaFileKey(figmaUrl);
  console.log("Extracted file key:", fileKey);

  if (!fileKey) {
    alert("Invalid Figma URL");
    return;
  }

  try {
    const data = await fetchFigmaData(fileKey);
    console.log("Fetched Figma data:", data);

    const nodes = data.document?.children || [];
    console.log("Extracted top-level nodes:", nodes);

    const jsxOutput = nodes
      .map((node) => convertNodeToTailwind(node))
      .filter(Boolean)
      .join("\n");

    console.log("Converted JSX Output:\n", jsxOutput);

    setOutput(jsxOutput);
  } catch (err) {
    console.error("Error fetching or converting Figma data:", err);
    alert("Failed to fetch from Figma.");
  }
};


  return (
    <div className="absolute top-[70px] left-[30px] w-[718px] h-[600px] bg-white rounded-xl shadow-md overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-100 border-b border-gray-200">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-sm text-gray-600 font-semibold">TailwindCss mini Project</div>
        <div className="w-16"></div>
      </div>

      <div className="p-6 space-y-5">
        <div className="space-y-5">
          <h1 className="text-gray-800 text-xl font-semibold">How to use this</h1>
          <div className="flex gap-2 w-full justify-between">
            {["Design in Figma", "Copy URL", "Paste Below", "Use the Code"].map((step, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-300 text-black items-center flex justify-center rounded-2xl">{idx + 1}</div>
                <h1 className="text-black font-semibold">{step}</h1>
              </div>
            ))}
          </div>
        </div>

        <input
          type="text"
          value={figmaUrl}
          onChange={(e) => setFigmaUrl(e.target.value)}
          placeholder="https://www.figma.com/file/..."
          className="w-full bg-gray-100 rounded-lg px-4 py-2 text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <div className="relative inline-flex items-center justify-center gap-4 group">
          <div className="absolute inset-0 duration-1000 opacity-60 transition-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
          <button
            onClick={handleConvert}
            className="group relative inline-flex items-center justify-center text-base rounded-xl bg-gray-900 px-8 py-2.5 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
          >
            Convert
            <svg
              aria-hidden="true"
              viewBox="0 0 10 10"
              height="10"
              width="10"
              fill="none"
              className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
            >
              <path d="M0 5h7" className="transition opacity-0 group-hover:opacity-100"></path>
              <path d="M1 1l4 4-4 4" className="transition group-hover:translate-x-[3px]"></path>
            </svg>
          </button>
        </div>

        <div className="w-full h-72 rounded-2xl bg-gray-200 flex items-start justify-start text-gray-800 text-sm p-4 overflow-auto">
          <pre>{output}</pre>
        </div>
      </div>
    </div>
  );
};

export default FigmaConverter;
