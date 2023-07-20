import { format, startOfMonth, addMonths, eachDayOfInterval } from "date-fns";
import { useState } from "react";
import update1 from "../../../Assets/dashboard/update1.jpg";
import update2 from "../../../Assets/dashboard/update2.jpg";
import update3 from "../../../Assets/dashboard/update3.jpg";
import update4 from "../../../Assets/dashboard/update4.jpg";
const RecentUpdates = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handlePrevMonth = () => {
    setCurrentMonth((prevMonth) => addMonths(prevMonth, -1));
  };

  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => addMonths(prevMonth, 1));
  };

  const calendarStart = startOfMonth(currentMonth);
  const calendarDays = eachDayOfInterval({
    start: calendarStart,
    end: new Date(calendarStart.getFullYear(), calendarStart.getMonth() + 1, 0),
  });

  return (
    <div className="w-11/12 mx-auto lg:my-20 sm:my-12 my-8">
      <div className="grid lg:grid-cols-3 grid-cols-1 md:gap-12 gap-8 place-items-center">
        <div className="">
          <div className="flex justify-between mb-4">
            <button
              className="bg-black text-white px-2 py-1 rounded-md"
              onClick={handlePrevMonth}
            >
              Previous
            </button>
            <h2>{format(currentMonth, "MMMM yyyy")}</h2>
            <button
              className="bg-black text-white px-2 py-1 rounded-md"
              onClick={handleNextMonth}
            >
              Next
            </button>
          </div>
          <div className="grid grid-cols-7 gap-2 py-2">
            <h2 className="text-sm font-medium text-center">SUN</h2>
            <h2 className="text-sm font-medium text-center">Mon</h2>
            <h2 className="text-sm font-medium text-center">TUE</h2>
            <h2 className="text-sm font-medium text-center">WED</h2>
            <h2 className="text-sm font-medium text-center">TH</h2>
            <h2 className="text-sm font-medium text-center">FR</h2>
            <h2 className="text-sm font-medium text-center">SA</h2>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {calendarDays.map((date) => (
              <div
                className="bg-blue-800 rounded-full p-2 text-center cursor-pointer text-white text-md font-medium"
                key={date.getTime()}
              >
                {format(date, "dd")}
              </div>
            ))}
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-2xl font-bold">Recent Updates</h1>
          <div className="flex">
            <h3 className="text-gray-500 text-xl pl-2 py-2">jack Menqu</h3>
            <h3 className="text-gray-500 text-xl pl-2 py-2">
              October 3rd, 2018
            </h3>
          </div>
          <div>
            <div className="lg:flex my-2">
              <img className="w-96 rounded-2xl" src={update1} alt="update" />
              <img
                className="w-96 rounded-2xl lg:ml-2 lg:my-0 my-2"
                src={update2}
                alt="update"
              />
            </div>
            <div className="lg:flex">
              <img className="w-96 rounded-2xl" src={update3} alt="update" />
              <img
                className="w-96 rounded-2xl lg:ml-2 lg:my-0 my-2"
                src={update4}
                alt="update"
              />
            </div>
          </div>
          <div className="my-2 w-full">
            <h2 className="text-xl font-medium">
              School Website - Authentication Module.
            </h2>
            <p className="py-2 text-gray-500">
              It is a long established fact that a reader will be distracted by
              the readable content of a page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentUpdates;
