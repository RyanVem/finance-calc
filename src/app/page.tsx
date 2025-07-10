import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="centered-container">
      <div className="big-logo">Financial Calculators</div>
      <Link href="/calculators" className="main-btn">
        View Calculators
      </Link>
    </div>
  );
}
