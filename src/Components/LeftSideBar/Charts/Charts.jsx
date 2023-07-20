import AreaChart from "./AreaChart";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import Scatter from "./Scatter";

const Charts = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        <div>
          <AreaChart />
        </div>
        <div>
          <LineChart />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        <div>
          <PieChart />
        </div>
        <div>
          <Scatter />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        <BarChart />
      </div>
    </div>
  );
};

export default Charts;
