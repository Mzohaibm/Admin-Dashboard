import Sidebar from "./Components/LeftSideBar/Sidebar";
import Sidebardata from "./Components/LeftSideBar/Sidebardata";
import TopBar from "./Components/TopBar/TopBar";

function App() {
  return (
    <div>
      <TopBar />
      <div className="flex justify-between">
        <div className="lg:w-1/5 lg:flex hidden">
          <Sidebar />
        </div>
        <div className="lg:w-4/5 mx-auto w-11/12">
          <Sidebardata />
        </div>
      </div>
    </div>
  );
}

export default App;
