import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import {
  ImageIcon,
  VideoIcon,
  SparklesIcon,
  MoreHorizontal,
  LucideIcon,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

/* ---------------- TYPES ---------------- */

type CampaignGoal =
  | "CONVERSIONS"
  | "AWARENESS"
  | "TRAFFIC"
  | "LEADS"
  | "ENGAGEMENT";

type CampaignRow = {
  id: string;
  name: string;
  icon: LucideIcon;
  date: string;
  goal: CampaignGoal;
};

/* ---------------- SAMPLE DATA ---------------- */

const campaignsData: CampaignRow[] = [
  {
    id: "cmp_001",
    name: "Eco-Summer Collection",
    icon: ImageIcon,
    date: "Oct 24, 2023",
    goal: "CONVERSIONS",
  },
  {
    id: "cmp_002",
    name: "SaaS Product Launch",
    icon: VideoIcon,
    date: "Oct 23, 2023",
    goal: "AWARENESS",
  },
  {
    id: "cmp_003",
    name: "Holiday Flash Sale",
    icon: ImageIcon,
    date: "Oct 21, 2023",
    goal: "CONVERSIONS",
  },
  {
    id: "cmp_004",
    name: "Brand Story Retargeting",
    icon: VideoIcon,
    date: "Oct 19, 2023",
    goal: "TRAFFIC",
  },
  {
    id: "cmp_005",
    name: "Fitness App VSL",
    icon: SparklesIcon,
    date: "Oct 18, 2023",
    goal: "CONVERSIONS",
  },
];

/* ---------------- BADGE COLORS ---------------- */

function goalVariant(goal: CampaignGoal) {
  switch (goal) {
    case "CONVERSIONS":
      return "bg-green-100 text-green-700 border-green-200";
    case "AWARENESS":
      return "bg-blue-100 text-blue-700 border-blue-200";
    case "TRAFFIC":
      return "bg-orange-100 text-orange-700 border-orange-200";
    case "LEADS":
      return "bg-purple-100 text-purple-700 border-purple-200";
    case "ENGAGEMENT":
      return "bg-pink-100 text-pink-700 border-pink-200";
  }
}

/* ---------------- COMPONENT ---------------- */

export default function RecentGen() {
  return (
    <section className="w-full p-5">
      <Card>
        <CardHeader>
          <CardTitle>Recent Projects</CardTitle>
        </CardHeader>

        <CardContent className="p-0">
          <div className="divide-y">
            {/* TABLE HEADER (desktop only) */}

            <div className="text-muted-foreground hidden grid-cols-4 px-6 py-3 text-sm font-medium md:grid">
              <span>Project Name</span>
              <span>Date</span>
              <span>Goal</span>
              <span className="text-right">Action</span>
            </div>

            {/* ROWS */}

            {campaignsData.map((campaign) => {
              const Icon = campaign.icon;

              return (
                <div
                  key={campaign.id}
                  className="flex flex-col gap-3 px-6 py-4 md:grid md:grid-cols-4 md:items-center md:gap-0"
                >
                  {/* PROJECT */}

                  <div className="flex items-center gap-3">
                    <div className="bg-muted flex h-10 w-10 items-center justify-center rounded-lg">
                      <Icon className="text-muted-foreground h-4 w-4" />
                    </div>

                    <span className="font-medium">{campaign.name}</span>
                  </div>

                  {/* DATE */}

                  <div className="flex justify-between md:block">
                    <span className="text-muted-foreground text-xs md:hidden">
                      Date
                    </span>

                    <span className="text-muted-foreground text-sm">
                      {campaign.date}
                    </span>
                  </div>

                  {/* GOAL */}

                  <div className="flex justify-between md:block">
                    <span className="text-muted-foreground text-xs md:hidden">
                      Goal
                    </span>

                    <Badge
                      variant="outline"
                      className={goalVariant(campaign.goal)}
                    >
                      {campaign.goal}
                    </Badge>
                  </div>

                  {/* ACTION */}

                  <div className="flex justify-end">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="hover:bg-muted rounded-md p-2">
                          <MoreHorizontal className="size-4" />
                        </button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Download</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
