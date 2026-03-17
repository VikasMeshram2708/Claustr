// types/pricing.ts
export type PricingPlan = {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  highlight?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    price: 0,
    description: "Good for trying out the product",
    features: [
      "20 Free Credits",
      "Standard quality",
      "No watermark",
      "Slower generation speed",
      "Email support",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: 9,
    description: "Best for creators getting started",
    features: [
      "80 Monthly Credits",
      "HD quality",
      "No watermark",
      "Video generation",
      "Priority support",
    ],
    highlight: true,
  },
  {
    id: "premium",
    name: "Premium",
    price: 29,
    description: "For professionals and teams",
    features: [
      "240 Monthly Credits",
      "FHD quality",
      "No watermark",
      "Fast generation speed",
      "Chat + Email support",
    ],
  },
];
