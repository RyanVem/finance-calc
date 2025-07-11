import Link from "next/link";
import "../../styles/calculators-page.css";

const calculators = [
  {
    title: "Loan Calculator",
    description: "Calculate monthly payments and loan interest over time.",
    href: "/calculators/loan", // adjust based on your routes
  },
  {
    title: "Savings Calculator",
    description: "See how your savings grow with interest.",
    href: "/calculators/savings",
  },
  {
    title: "Investment Calculator",
    description: "Estimate future investment returns.",
    href: "/calculators/investment",
  },
  {
    title: "Mortgage Calculator",
    description: "Calculate monthly payments and loan interest over time.",
    href: "/calculators/loan", // adjust based on your routes
  },
  {
    title: "Auto Loan Calculator",
    description: "See how your savings grow with interest.",
    href: "/calculators/savings",
  },
  {
    title: "Credit Card Payoff Calculator",
    description: "Estimate future investment returns.",
    href: "/calculators/investment",
  },
  {
    title: "Loans Calculator",
    description: "Calculate monthly payments and loan interest over time.",
    href: "/calculators/loan", // adjust based on your routes
  },
  {
    title: "Saving Calculator",
    description: "See how your savings grow with interest.",
    href: "/calculators/savings",
  },
  {
    title: "Investments Calculator",
    description: "Estimate future investment returns.",
    href: "/calculators/investment",
  },
  // Add more calculators as needed!
];

export default function Calculators() {
  return (
    <div className="calculators-page-container">
      <div className="header">
        <div className="medium-logo">Calculators:</div>
      </div>
      <div className="calculator-cards-grid">
        {calculators.map((calc) => (
          <Link href={calc.href} key={calc.title} className="calc-card">
            <div className="calc-card-title">{calc.title}</div>
            <div className="calc-card-desc">{calc.description}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}