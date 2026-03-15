"use client";

import { useRef, useState } from "react";
import { ArrowRightIcon, PlayIcon, PauseIcon } from "lucide-react";

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
    <section className="relative overflow-hidden py-28">
      {/* ---------------- Linear Style Background ---------------- */}

      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* page background */}
        <div className="absolute inset-0 bg-black" />

        {/* bottom spotlight gradient */}
        <div className="absolute bottom-[-200px] left-1/2 h-[600px] w-[1200px] -translate-x-1/2 rounded-full bg-white/30 blur-[180px]" />

        {/* softer secondary glow */}
        <div className="absolute bottom-[-250px] left-1/2 h-[700px] w-[1400px] -translate-x-1/2 rounded-full bg-white/20 blur-[220px]" />

        {/* fade to dark toward top */}
        <div className="absolute inset-x-0 top-0 h-[60%] bg-gradient-to-b from-black via-black/70 to-transparent" />
      </div>

      {/* ---------------- Content ---------------- */}

      <div className="mx-auto max-w-7xl space-y-8 px-4">
        <Heading>
          Create High-Converting Ad
          <br />
          Videos Instantly Using AI
        </Heading>

        <div className="flex flex-wrap items-center justify-between gap-6">
          <SubHeading>
            Turn product images into scroll-stopping ads for Facebook,
            Instagram, and TikTok
          </SubHeading>

          <Button size="lg" className="rounded-full" variant="link">
            Generate now
            <ArrowRightIcon />
          </Button>
        </div>

        {/* ---------------- Video ---------------- */}

        <div className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur">
          <video
            ref={videoRef}
            src="/assets/intro.mp4"
            className="h-full w-full object-cover"
            playsInline
          />

          {/* play pause button */}
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
      </div>
    </section>
  );
}
