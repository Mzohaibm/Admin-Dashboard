import BarChart from "../Charts/BarChart"
import PieChart from "../Charts/PieChart"

const Dashboardgraph = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className=" grid lg:grid-cols-2 gap-4 my-20 bg-blue-50  ">
        <div>
          <BarChart />
        </div>
        <div>
          <PieChart />
        </div>
      </div>
    </div>
  )
}

export default Dashboardgraph

