import Image from "next/image";
import SubHeading from "../sub-heading";
import { Card, CardContent } from "../ui/card";
import { LayersSvg } from "@/public/assets/feature-assets/layers";
import { cubesSvg } from "@/public/assets/feature-assets/cubes";
import { depthSvg } from "@/public/assets/feature-assets/depth";

type FeatureType = {
  label: string;
  brief: string;
  comp: React.ReactNode;
};

const data: Array<FeatureType> = [
  {
    label: "Generate Videos",
    brief: "",
    comp: LayersSvg,
  },
  {
    label: "Generate Images",
    brief: "",
    comp: cubesSvg,
  },
  {
    label: "Create Storyboard",
    brief: "",
    comp: depthSvg,
  },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl space-y-6 px-6 py-24">
      <SubHeading className="text-xl text-shadow-lg md:text-2xl lg:text-3xl xl:text-4xl">
        <span className="text-foreground">
          Turn simple product inputs into powerful ad creatives with AI.{" "}
        </span>
        <span>
          Generate engaging video ads, scroll-stopping hooks, and persuasive
          copy instantly. Built for ecommerce brands and marketers who want
          faster, smarter campaign creation.
        </span>
      </SubHeading>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map((d) => (
          <Card
            key={d.label}
            className="border-border overflow-hidden border bg-black"
          >
            <CardContent className="flex items-center justify-center p-0">
              {d.comp}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
