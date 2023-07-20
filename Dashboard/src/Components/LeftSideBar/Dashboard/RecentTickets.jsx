import img1 from "../../../Assets/MessageNav/message1.jpg";
import img2 from "../../../Assets/MessageNav/message2.jpg";
import img3 from "../../../Assets/MessageNav/message3.jpg";

const RecentTicketData = [
  {
    img: img1,
    name: "David Grey",
    subject: "Fund is not Recieved",
    btn: "Done",
    last_update: "Dec 5,2017",
    tracking_id: "WD-1209",
  },
  {
    img: img2,
    name: " Stella Johnson",
    subject: "High loading time",
    btn: "Progress",
    last_update: "Dec 3,2017",
    tracking_id: "WD-1220",
  },
  {
    img: img3,
    name: " Marina Michel",
    subject: "Website down for one week",
    btn: "On Hold",
    last_update: "Nov 5,2017",
    tracking_id: "WD-1217",
  },
];

const RecentTickets = () => {
  return (
    <div className="w-11/12 mx-auto md:my-28 my-20">
      <h1 className="text-2xl font-bold">Recent Tickets</h1>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-2 items-center my-4 border-y-[1px] border-y-gray-300 py-3">
        <div>
          <h2 className="text-lg font-bold">Assignee</h2>
        </div>
        <div>
          <h2 className="text-lg font-bold">Subject</h2>
        </div>
        <div>
          <h2 className="text-lg font-bold">Status</h2>
        </div>
        <div>
          <h2 className="text-lg font-bold">Last Update</h2>
        </div>
        <div>
          <h2 className="text-lg font-bold">Tracking ID</h2>
        </div>
      </div>
      {RecentTicketData.map((item, index) => {
        return (
          <div key={index}>
            <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-2 items-center my-4 border-y-[1px] border-y-gray-300 py-3">
              <div className="flex items-center">
                <img
                  className="rounded-full w-16 mr-1"
                  src={item.img}
                  alt="Users"
                />
                <h2 className="text-lg">{item.name}</h2>
              </div>
              <div>
                <h1 className="text-lg">{item.subject}</h1>
              </div>
              <div>
                <button className="bg-[#10CEB1] px-4 py-2 rounded text-white">
                  {item.btn}
                </button>
              </div>
              <div>
                <p className="text-lg ">{item.last_update}</p>
              </div>
              <div>
                <p className="text-lg">{item.tracking_id}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecentTickets;
