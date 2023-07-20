const BasicElements = () => {
  return (
    <div className="mx-auto w-11/12">
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-12 gap-8 md:my-12 my-8">
        <div className="shadow-2xl p-8 rounded-xl">
          <div>
            <h2 className="text-2xl font-medium">Default Form</h2>
            <h3 className="text-xl text-gray-500">Basic form Layout</h3>
          </div>
          <div>
            <form action="action.php">
              <div className="my-4">
                <div className="my-1">
                  <label className=" text-xl">Username</label>
                </div>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full focus:outline-none border-[1px] border-gray-500 p-3 focus:border-blue-500 rounded"
                />
              </div>
              <div className="my-4">
                <div className="my-1">
                  <label className=" text-xl">Email address</label>
                </div>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full focus:outline-none border-[1px] border-gray-500 p-3 focus:border-blue-500 rounded"
                  required
                />
              </div>
              <div className="my-4">
                <div className="my-1">
                  <label className=" text-xl">Password</label>
                </div>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full focus:outline-none border-[1px] border-gray-500 p-3 focus:border-blue-500 rounded"
                  required
                />
              </div>
              <div className="my-4">
                <div className="my-1">
                  <label className=" text-xl">Confirm Password</label>
                </div>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full focus:outline-none border-[1px] border-gray-500 p-3 focus:border-blue-500 rounded"
                  required
                />
              </div>
              <div className="w-2/3 flex justify-around mx-auto">
                <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-2 text-xl rounded">
                  <input type="submit" />
                </button>
                <button className="bg-gray-200 text-black px-8 py-2 text-xl rounded">
                  <input type="reset" />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="shadow-2xl p-8 rounded-xl">
          <div>
            <h2 className="text-2xl font-medium">Horizontal Form</h2>
            <h3 className="text-xl text-gray-500">Horizontal form layout</h3>
          </div>
          <div>
            <form action="action.php">
              <div className="my-10 flex items-center justify-between">
                <div className="my-1">
                  <label className=" text-xl">Username</label>
                </div>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="sm:w-[350px] w-[250px] focus:outline-none border-[1px] border-gray-500 p-3 focus:border-blue-500 rounded"
                />
              </div>
              <div className="my-10 flex items-center justify-between">
                <div className="my-1">
                  <label className=" text-xl">Email</label>
                </div>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="sm:w-[350px] w-[250px] focus:outline-none border-[1px] border-gray-500 p-3 focus:border-blue-500 rounded"
                  required
                />
              </div>
              <div className="my-10 flex items-center justify-between">
                <div className="my-1">
                  <label className=" text-xl">Password</label>
                </div>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="sm:w-[350px] w-[250px]  focus:outline-none border-[1px] border-gray-500 p-3 focus:border-blue-500 rounded"
                  required
                />
              </div>
              <div className="my-10 flex items-center justify-between">
                <div className="my-1">
                  <label className=" text-xl">Confirm </label>
                </div>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="sm:w-[350px] w-[250px] focus:outline-none border-[1px] border-gray-500 p-3 focus:border-blue-500 rounded"
                  required
                />
              </div>
              <div className="w-2/3 flex justify-around mx-auto">
                <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-2 text-xl rounded">
                  <input type="submit" />
                </button>
                <button className="bg-gray-200 text-black px-8 py-2 text-xl rounded">
                  <input type="reset" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicElements;
