// app/pricing/page.tsx

import PricingCard from "./pricing-card";
import { pricingPlans } from "./pricing-data";

export default function PricingPage() {
  return (
    <section className="w-full px-4 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-muted-foreground text-sm">PRICING</p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">Pricing Plans</h2>
          <p className="text-muted-foreground mt-3">
            Simple, transparent pricing that grows with you.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard plan={plan} key={plan.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
