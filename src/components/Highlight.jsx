import React from "react";

const Highlight = () => {
  return (
    <div className="w-full px-4 py-10 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10">Enhance your images Impact</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <div className="bg-gray-100 rounded-2xl p-6 shadow-md">
          <h3 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-transparent bg-clip-text mb-3">
            99%
          </h3>
          <p className="text-black text-base">Image quality improvement</p>
        </div>

        <div className="bg-gray-100 rounded-2xl p-6 shadow-md">
          <h3 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-rose-400 text-transparent bg-clip-text mb-3">
            4X
          </h3>
          <p className="text-black text-base">Faster editing workflow</p>
        </div>

        <div className="bg-gray-100 rounded-2xl p-6 shadow-md">
          <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-gray-800 text-transparent bg-clip-text mb-3">
            85%
          </h3>
          <p className="text-black text-base">
            Higher engagement on enhanced images
          </p>
        </div>

        <div className="bg-gray-100 rounded-2xl p-6 shadow-md">
          <h3 className="text-4xl font-bold bg-gradient-to-r from-violet-500 to-purple-500 text-transparent bg-clip-text mb-3">
            70%
          </h3>
          <p className="text-black text-base">
            Cost savings on photo retouching
          </p>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
