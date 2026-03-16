import { LucideIcon, Sparkles, Video, Eye, TrendingUp } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

type DashStatType = {
  label: string;
  icon: LucideIcon;
  description: string;
  value: string | number;
};

const statsData: Array<DashStatType> = [
  {
    label: "Ads Created",
    description: "Total ads generated",
    icon: Sparkles,
    value: 42,
  },
  {
    label: "Videos Generated",
    description: "AI videos created",
    icon: Video,
    value: 128,
  },
  {
    label: "Total Views",
    description: "Views across campaigns",
    icon: Eye,
    value: "12.4K",
  },
  {
    label: "Avg CTR",
    description: "Campaign performance",
    icon: TrendingUp,
    value: "3.2%",
  },
];

export default function SPStats() {
  return (
    <section className="grid gap-4 p-5 md:grid-cols-2 xl:grid-cols-4">
      {statsData.map((stat) => {
        const Icon = stat.icon;

        return (
          <Card key={stat.label} className="border-border border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.label}
              </CardTitle>

              <Icon className="text-muted-foreground h-4 w-4" />
            </CardHeader>

            <CardContent className="space-y-3">
              <div className="text-2xl font-bold">{stat.value}</div>

              <CardDescription>{stat.description}</CardDescription>
            </CardContent>
          </Card>
        );
      })}
    </section>
  );
}
