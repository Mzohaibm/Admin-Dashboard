import { useEffect } from "react";
import CanvasJS from "@canvasjs/charts";

const BarChart = () => {
  useEffect(() => {
  setTimeout(() => {
    var chart = new CanvasJS.Chart("barchart", {
        title: {
          text: "Bar Chart",
        },
        data: [
          {
            type: "column",
            dataPoints: [
              { label: "2013", y: 14 },
              { label: "2014", y: 22 },
              { label: "2015", y: 21 },
              { label: "2016", y: 29 },
              { label: "2017", y: 38 },
              { label: "2018", y: 31 },
              { label: "2019", y: 27 },
              { label: "2020", y: 39 },
            ],
          },
        ],
      });
  
      chart.render();
  }, 200);
  }, []);

  return (
    <div>
      <div id="barchart"></div>
    </div>
  );
};

export default BarChart;
