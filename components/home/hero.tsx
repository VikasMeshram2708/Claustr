"use client";

import { useRef, useState } from "react";
import { ArrowRightIcon, PauseIcon, PlayIcon } from "lucide-react";

import Heading from "../heading";
import SubHeading from "../sub-heading";
import { Button } from "../ui/button";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function toggleVideo() {
    if (!videoRef.current) return;

    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  }

  return (
    <section className="mx-auto max-w-7xl space-y-8 px-4 py-24">
      {/* Heading */}
      <Heading>
        Create High-Converting Ad
        <br />
        Videos Instantly Using AI
      </Heading>

      {/* Subheading + CTA */}
      <div className="flex flex-wrap items-center justify-between gap-6">
        <SubHeading>
          Turn product images into scroll-stopping ads for Facebook, Instagram,
          and TikTok
        </SubHeading>

        <Button type="button" className="rounded-full" size="lg" variant="link">
          Generate now
          <ArrowRightIcon />
        </Button>
      </div>

      {/* Video */}
      <div className="group relative aspect-video w-full overflow-hidden rounded-2xl bg-black">
        <video
          ref={videoRef}
          src="/assets/intro.mp4"
          className="h-full w-full object-cover"
          playsInline
        />

        {/* Play / Pause Button */}
        <button
          onClick={toggleVideo}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur transition group-hover:scale-110">
            {playing ? (
              <PauseIcon className="size-6 text-black" />
            ) : (
              <PlayIcon className="ml-1 size-6 text-black" />
            )}
          </div>
        </button>
      </div>
    </section>
  );
}
