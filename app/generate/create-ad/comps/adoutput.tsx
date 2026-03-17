import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  AnchorIcon,
  ClapperboardIcon,
  FileTextIcon,
  TypeIcon,
} from "lucide-react";

export default function AdOutput() {
  return (
    <section className="px-4 py-8">
      <Card className="bg-background">
        {/* Header */}
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-xl font-bold">Generated Output</CardTitle>

          <div className="flex gap-3">
            <Button variant="secondary" size="sm">
              Save Draft
            </Button>

            <Button size="sm">Export All</Button>
          </div>
        </CardHeader>

        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Ad Hooks */}
            <div className="space-y-2">
              <p className="text-muted-foreground flex items-center gap-2 text-xs font-semibold uppercase">
                <AnchorIcon size={14} />
                Ad Hooks
              </p>

              <div className="bg-muted/40 text-muted-foreground flex h-28 items-center justify-center rounded-lg border text-sm">
                Generate to see attention-grabbing hooks.
              </div>
            </div>

            {/* Video Script */}
            <div className="space-y-2">
              <p className="text-muted-foreground flex items-center gap-2 text-xs font-semibold uppercase">
                <ClapperboardIcon size={14} />
                Video Script
              </p>

              <div className="bg-muted/40 text-muted-foreground flex h-28 items-center justify-center rounded-lg border text-sm">
                Scene-by-scene script generator
              </div>
            </div>

            {/* Primary Ad Copies */}
            <div className="space-y-2">
              <p className="text-muted-foreground flex items-center gap-2 text-xs font-semibold uppercase">
                <FileTextIcon size={14} />
                Primary Ad Copies
              </p>

              <div className="bg-muted/40 text-muted-foreground flex h-28 items-center justify-center rounded-lg border text-sm">
                AI-written copy options will appear here
              </div>
            </div>

            {/* Headline Variations */}
            <div className="space-y-2">
              <p className="text-muted-foreground flex items-center gap-2 text-xs font-semibold uppercase">
                <TypeIcon size={14} />
                Headline Variations
              </p>

              <div className="space-y-3">
                <div className="bg-muted/40 h-10 rounded-md border" />
                <div className="bg-muted/40 h-10 rounded-md border" />
                <div className="bg-muted/40 h-10 rounded-md border" />
              </div>
            </div>

            {/* CTA Suggestions */}
            <div className="space-y-2 md:col-span-2">
              <p className="text-muted-foreground text-xs font-semibold uppercase">
                CTA Suggestions
              </p>

              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Shop Now</Badge>
                <Badge variant="secondary">Get Started</Badge>
                <Badge variant="secondary">Learn More</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
