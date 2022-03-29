import React from "react";
import { Card } from "@mui/material";
export const Plot = () => {
  return (
    <Card className="plot">
      <Plot
        data={[
          {
            x: [7, 8, 9, 10, 11, 12],
            y: [5000, 4500, 4000, 3500, 3000, 2500],
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "red" },
          },
        ]}
        layout={{
          autosize: true,
          showlegend: true,
          margin: { t: 50 },
          hovermode: "closest",
          bargap: 0,
          xaxis: {
            domain: [0, 0.85],
            showgrid: false,
            zeroline: false,
          },
          yaxis: {
            domain: [0, 0.85],
            showgrid: false,
            zeroline: false,
          },
          xaxis2: {
            domain: [0.85, 1],
            showgrid: false,
            zeroline: false,
          },
          yaxis2: {
            domain: [0.85, 1],
            showgrid: false,
            zeroline: false,
          },
        }}
      />
    </Card>
  );
};
