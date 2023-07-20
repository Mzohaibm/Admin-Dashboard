import { useEffect } from "react";
import CanvasJS from "@canvasjs/charts";

const LineChart = () => {
  useEffect(() => {
  setTimeout(() => {
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2",
        title: {
          text: "Line Chart",
        },
        data: [
          {
            type: "line",
            indexLabelFontSize: 16,
            dataPoints: [
              { y: 450 },
              { y: 414 },
              {
                y: 520,
                indexLabel: "\u2191 highest",
                markerColor: "red",
                markerType: "triangle",
              },
              { y: 460 },
              { y: 450 },
              { y: 500 },
              { y: 480 },
              { y: 480 },
              {
                y: 410,
                indexLabel: "\u2193 lowest",
                markerColor: "DarkSlateGrey",
                markerType: "cross",
              },
              { y: 500 },
              { y: 480 },
              { y: 510 },
            ],
          },
        ],
      });
  
      chart.render();
  }, 300);
  }, []);

  return (
    <div>
      <div id="chartContainer" style={{ height: "300px", width: "100%" }}></div>
    </div>
  );
};

export default LineChart;
