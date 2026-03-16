import Heading from "../heading";
import { Button } from "../ui/button";

export default function CTA() {
  return (
    <section className="from-primary via-primary-foreground/75 mx-auto max-w-7xl rounded-2xl bg-sky-500 bg-linear-to-br to-transparent px-6 py-12 sm:px-10 sm:py-16 lg:px-20 lg:py-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-center space-y-6 text-center">
        <Heading className="text-2xl sm:text-3xl lg:text-4xl">
          Ready to scale your ads?
        </Heading>

        <p className="text-foreground max-w-xl text-sm leading-relaxed tracking-wide sm:text-base">
          Join over 5000+ D2C brands generating high-converting creatives every
          day. No credit card required to start.
        </p>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
          <Button className="w-full rounded-full px-8 py-6 font-bold sm:w-auto">
            Start generating for free
          </Button>

          <Button
            variant="outline"
            className="w-full rounded-full px-8 py-6 sm:w-auto"
          >
            Talk to sales
          </Button>
        </div>
      </div>
    </section>
  );
}
