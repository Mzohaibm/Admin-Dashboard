import { Link } from "react-router-dom";

const LockScreen = () => {
  return (
    <div className="mx-auto w-11/12 md:my-12 my-8">
      <div className="sm:w-2/3 mx-auto">
        <h1 className="text-3xl py-8 text-center font-medium">Lock Screen</h1>
        <form action="">
          <div className="mx-auto text-center">
            <p className="text-xl text-black">Password To Unlock</p>
            <input
              type="text"
              placeholder="Ente your Password"
              className="my-6 md:w-3/4 w-full focus:outline-none border-b-[2px] focus:border-b-black border-b-gray-300 pb-1 text-xl text-black"
              required
            />
          </div>
          <div className="mx-auto text-center">
            <button className="bg-gradient-to-r from-purple-300 to-purple-600 rounded my-4 px-8 py-2 text-white text-xl">
              Unlock
            </button>
            <div className="flex mx-auto md:w-2/3 justify-around">
              <Link to="/" className="hover:text-[#73841B]">
                Return to DashBoard
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LockScreen;
