import CanvasJS from "@canvasjs/charts";
import { useEffect } from "react";

const PieChart = () => {
  useEffect(() => {
    setTimeout(() => {
      var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: {
          text: "Email Categories",
          horizontalAlign: "left",
        },
        data: [
          {
            type: "doughnut",
            startAngle: 60,
            //innerRadius: 60,
            indexLabelFontSize: 17,
            indexLabel: "{label} - #percent%",
            toolTipContent: "<b>{label}:</b> {y} (#percent%)",
            dataPoints: [
              { y: 67, label: "Inbox" },
              { y: 28, label: "Archives" },
              { y: 10, label: "Labels" },
              { y: 7, label: "Drafts" },
              { y: 15, label: "Trash" },
              { y: 6, label: "Spam" },
            ],
          },
        ],
      });
      chart.render();
    }, 500);
  }, []);
  return (
    <div>
      <div id="chartContainer" style={{ height: "300px", width: "100%" }}></div>
    </div>
  );
};

export default PieChart;
