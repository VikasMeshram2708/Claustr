import { ArrowRightIcon } from "lucide-react";
import Heading from "../heading";
import SubHeading from "../sub-heading";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl space-y-6 px-4 py-24">
      <Heading>
        Create High-Converting Ad
        <br />
        Videos Instantly Using AI
      </Heading>
      <div className="flex justify-between">
        <SubHeading>
          Turn product images into scroll-stopping ads for Facebook, Instagram,
          and TikTok
        </SubHeading>
        <Button
          type="button"
          className="rounded-full"
          size={"lg"}
          variant={"link"}
        >
          Generate now
          <ArrowRightIcon />
        </Button>
      </div>
    </section>
  );
}
