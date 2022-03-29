import "./App.css";

import { Footer, Header, Sidebar, MonthlyPayment, Plot } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <MonthlyPayment />
      <Plot />
      <Footer />
    </div>
  );
}

export default App;
