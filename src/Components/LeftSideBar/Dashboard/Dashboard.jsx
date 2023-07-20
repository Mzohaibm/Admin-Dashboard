import DashboardHero from "./DashboardHero";
import Dashboardgraph from "./Dashboardgraph";
import ProjectStatusandTodoList from "./ProjectStatusandTodoList";
import RecentTickets from "./RecentTickets";
import RecentUpdates from "./RecentUpdates";
// import Dashboardgraph from "./Dashboardgraph"

const Dashboard = () => {
  return (
    <div>
      <DashboardHero />
      <Dashboardgraph />
      {/* <Dashboardgraph/> */}
      <RecentTickets />
      <RecentUpdates />
      <ProjectStatusandTodoList />
    </div>
  );
};

export default Dashboard;
