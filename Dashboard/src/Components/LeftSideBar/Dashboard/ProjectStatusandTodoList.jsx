import TopBarOnClick from "../../TopBar/TopBarOnClikc";

const ProjectStatus = [
  {
    id: 1,
    name: "David Grey",
    due_date: "May 15, 2015",
    progress: 30,
  },
  {
    id: 2,
    name: "John Richards",
    due_date: "May 15, 2019",
    progress: 34,
  },
  {
    id: 3,
    name: "David Grey",
    due_date: "	Jul 01, 2015",
    progress: 55,
  },
  {
    id: 4,
    name: "	Edward",
    due_date: "	Jun 05, 2015",
    progress: 44,
  },
  {
    id: 5,
    name: "	Jun 05, 2015",
    due_date: "	Jun 05, 2015",
    progress: 66,
  },
  {
    id: 6,
    name: "Sarah Thompson",
    due_date: "Aug 20, 2019",
    progress: 78,
  },
  {
    id: 7,
    name: "Michael Johnson",
    due_date: "Sep 10, 2022",
    progress: 92,
  },
  {
    id: 8,
    name: "Emily Davis",
    due_date: "Nov 25, 2023",
    progress: 20,
  },
];

const ProjectStatusandTodoList = () => {
  return (
    <div className="w-11/12 mx-auto md:my-20 my-12">
      <div className="lg:flex justify-between">
        <div>
          {ProjectStatus.map((item) => {
            return (
              <div key={item.id} className="">
                <div className="border-y-[1px] border-gray-300 py-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-12 gap-8">
                  <h1 className="text-md font-medium">{item.id}</h1>
                  <h3 className="text-md font-normal">{item.name}</h3>
                  <p className="text-md font-normal text-gray-500">
                    {item.due_date}
                  </p>
                  <p className="text-md text-gray-500">{item.progress} %</p>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <TopBarOnClick />
        </div>
      </div>
    </div>
  );
};

export default ProjectStatusandTodoList;
