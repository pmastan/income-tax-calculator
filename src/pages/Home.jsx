import Card from "../components/Card";
import "./Home.css";

import {
  FaMoneyBillWave,
  FaPercentage,
  FaFileInvoiceDollar,
  FaStamp,
  FaChartLine,
  FaBriefcase,
  FaPiggyBank,
  FaTable,
} from "react-icons/fa";

function Home() {
  const cards = [
    {
      title: "Income Tax",
      description: "Calculate income tax under Old and New Tax Regime.",
      icon: <FaMoneyBillWave />,
      path: "/income-tax",
      color: "#2563eb",
    },
    {
      title: "GST Calculator",
      description: "Calculate GST amount and total invoice value.",
      icon: <FaPercentage />,
      path: "/gst",
      color: "#16a34a",
    },
    {
      title: "TDS Calculator",
      description: "Calculate Tax Deducted at Source (TDS).",
      icon: <FaFileInvoiceDollar />,
      path: "/tds",
      color: "#f97316",
    },
    {
      title: "Stamp Duty",
      description: "Estimate stamp duty and registration charges.",
      icon: <FaStamp />,
      path: "/stamp-duty",
      color: "#9333ea",
    },
    {
      title: "Capital Gain Tax",
      description: "Calculate long-term and short-term capital gains tax.",
      icon: <FaChartLine />,
      path: "/capital-gain",
      color: "#dc2626",
    },
    {
      title: "Professional Tax",
      description: "Calculate professional tax based on state rules.",
      icon: <FaBriefcase />,
      path: "/professional-tax",
      color: "#0891b2",
    },
    {
      title: "Tax Saving",
      description: "Explore deductions under Sections 80C, 80D, NPS, HRA, etc.",
      icon: <FaPiggyBank />,
      path: "/tax-saving",
      color: "#ca8a04",
    },
    {
      title: "Tax Slabs",
      description: "View Old vs New Tax Regime slab rates.",
      icon: <FaTable />,
      path: "/tax-slabs",
      color: "#7c3aed",
    },
  ];

  return (
    <div className="home">
      <div className="home-header">
        <h1>Income Tax Calculator</h1>
        <p>
          Calculate various taxes quickly and accurately using the tools below.
        </p>
      </div>

      <div className="cards-grid">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
            path={card.path}
            color={card.color}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;