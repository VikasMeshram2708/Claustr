import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { PricingPlan } from "./pricing-data";

export default function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <Card
      key={plan.id}
      className={`flex flex-col justify-between rounded-2xl border ${
        plan.highlight ? "border-primary shadow-md" : "border-border"
      }`}
    >
      <CardHeader>
        <CardTitle className="text-lg">{plan.name}</CardTitle>

        <div className="mt-2">
          <span className="text-3xl font-bold">${plan.price}</span>
          <span className="text-muted-foreground text-sm">/month</span>
        </div>

        <p className="text-muted-foreground text-sm">{plan.description}</p>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col justify-between">
        {/* Features */}
        <ul className="space-y-3 text-sm">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2">
              <Check className="text-primary h-4 w-4" />
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Button
          className="mt-6 w-full"
          variant={plan.highlight ? "default" : "outline"}
        >
          Get Started
        </Button>
      </CardContent>
    </Card>
  );
}
