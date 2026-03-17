import { ChevronRight, Medal, Camera, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Template = {
  name: string;
  icon: React.ElementType;
};

const templates: Template[] = [
  {
    name: "Facebook Story",
    icon: Medal,
  },
  {
    name: "Instagram Reel",
    icon: Camera,
  },
  {
    name: "Google Search Ad",
    icon: Search,
  },
];

export default function QuickTemplates() {
  return (
    <section className="p-5">
      <Card className="border-border w-full border">
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl">Quick Templates</CardTitle>
        </CardHeader>

        <CardContent className="space-y-3">
          {templates.map((template) => {
            const Icon = template.icon;

            return (
              <button
                key={template.name}
                className="border-border hover:bg-muted flex w-full items-center justify-between rounded-xl border px-4 py-3 transition"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-muted flex h-10 w-10 items-center justify-center rounded-lg">
                    <Icon className="text-muted-foreground h-5 w-5" />
                  </div>

                  <span className="font-medium">{template.name}</span>
                </div>

                <ChevronRight className="text-muted-foreground h-4 w-4" />
              </button>
            );
          })}
        </CardContent>
      </Card>
    </section>
  );
}
