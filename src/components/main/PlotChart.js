import React from "react";
import { Card } from "@mui/material";
import Plot from "react-plotly.js";
import { store } from "../../data/store";
import { observer } from "mobx-react-lite";

export const PlotChart = observer(() => {
  if (store.getTotalBalance() > 0 && store.monthlyPayment > 0) {
    return (
      <Card className="plot" style={{ margin: 10, padding: 10 }}>
        <Plot
          data={store.getChartData()}
          style={{ width: "100%" }}
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
          }}
        />
      </Card>
    );
  } else {
    return (
      <Card className="plot" style={{ margin: 10, padding: 100 }}>
        No Data
      </Card>
    );
  }
});
