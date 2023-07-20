const Buttons = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="md:my-12 my-8">
        <h2>Gradient buttons</h2>
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-gradient-to-r from-red-500 to-blue-500 text-white py-2 px-4 rounded">
            Gradient 1
          </button>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded">
            Gradient 2
          </button>
          <button className="bg-gradient-to-r from-red-100 to-blue-500 text-white py-2 px-4 rounded">
            Gradient 1
          </button>
          <button className="bg-gradient-to-r from-purple-200 to-pink-700 text-white py-2 px-4 rounded">
            Gradient 2
          </button>
          <button className="bg-gradient-to-r from-yellow-500 to-green-500 text-white py-2 px-4 rounded">
            Gradient 3
          </button>
          <button className="bg-gradient-to-r from-indigo-500 to-yellow-500 text-white py-2 px-4 rounded">
            Gradient 4
          </button>
        </div>
      </div>

      <div className="md:my-12 my-8">
        <h2>Rounded Gradient buttons</h2>
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-gradient-to-r from-yellow-300 to-green-500 text-white py-2 px-4 rounded-full">
            Gradient Full 1
          </button>
          <button className="bg-gradient-to-r from-blue-300 to-indigo-500 text-white py-2 px-4 rounded-full">
            Gradient Full 2
          </button>

          <button className="bg-gradient-to-r from-orange-300 to-blue-500 text-white py-2 px-4 rounded-full">
            Gradient Full 3
          </button>
          <button className="bg-gradient-to-r from-blue-300 to-gray-500 text-white py-2 px-4 rounded-full">
            Gradient Full 4
          </button>
          <button className="bg-gradient-to-r from-pink-300 to-purple-500 text-white py-2 px-4 rounded-full">
            Gradient Full 5
          </button>
          <button className="bg-gradient-to-r from-red-400 to-yellow-500 text-white py-2 px-4 rounded-full">
            Gradient Full 6
          </button>
        </div>
      </div>

      <div className="md:my-12 my-8">
        <h2>Outline same Gradient buttons</h2>
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-white bg-opacity-0 border-2 border-blue-500 text-blue-500 hover:bg-opacity-10 py-2 px-4 rounded">
            Outline 1
          </button>
          <button className="bg-white bg-opacity-0 border-2 border-red-500 text-red-500 hover:bg-opacity-10 py-2 px-4 rounded">
            Outline 2
          </button>
        </div>
      </div>

      <div className="md:my-12 my-8">
        <h2>here single color buttons</h2>
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-red-500 text-white py-2 px-4 rounded">
            Single Color 1
          </button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded">
            Single Color 2
          </button>
        </div>
      </div>

      <div className="md:my-12 my-8">
        <h2>here single normal colors buttons</h2>
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-yellow-300 text-black py-2 px-4 rounded">
            Single Normal Color 1
          </button>
          <button className="bg-green-500 text-white py-2 px-4 rounded">
            Single Normal Color 2
          </button>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
