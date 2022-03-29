import "./App.css";

import {
  Footer,
  Header,
  Sidebar,
  MonthlyPayment,
  PlotChart,
} from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mainbody">
        <Sidebar />
        <MonthlyPayment />
        <PlotChart />
      </div>
      <Footer />
    </div>
  );
}

export default App;
