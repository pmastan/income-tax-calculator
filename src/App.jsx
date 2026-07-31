import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

// Pages
import Home from "./pages/Home";
import IncomeTax from "./pages/IncomeTax";
import GSTCalculator from "./pages/GSTCalculator";
import TDSCalculator from "./pages/TDSCalculator";
import CapitalGain from "./pages/CapitalGain";
import ProfessionalTax from "./pages/ProfessionalTax";
import StampDuty from "./pages/StampDuty";
import TaxSaving from "./pages/TaxSaving";
import TaxSlabs from "./pages/TaxSlabs";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />

        <div className="layout">
          <Sidebar />

          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/income-tax" element={<IncomeTax />} />
              <Route path="/gst" element={<GSTCalculator />} />
              <Route path="/tds" element={<TDSCalculator />} />
              <Route path="/capital-gain" element={<CapitalGain />} />
              <Route
                path="/professional-tax"
                element={<ProfessionalTax />}
              />
              <Route path="/stamp-duty" element={<StampDuty />} />
              <Route path="/tax-saving" element={<TaxSaving />} />
              <Route path="/tax-slabs" element={<TaxSlabs />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;