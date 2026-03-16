import { StarIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import Heading from "../heading";

type founderType = {
  rating: number;
  name: string;
  brief: string;
  image: string;
  role: string;
};

const foundersData: founderType[] = [
  {
    rating: 4.9,
    name: "Arjun Mehta",
    brief:
      "Arjun is a second-time founder building AI tools for modern marketers. His focus is simplifying content creation workflows so startups can launch campaigns faster without large creative teams.",
    image:
      "https://ui-avatars.com/api/?name=Arjun+Mehta&background=0D8ABC&color=fff&size=256",
    role: "Founder & CEO",
  },
  {
    rating: 4.8,
    name: "Sanya Kapoor",
    brief:
      "Sanya leads product and design with a strong background in SaaS UX. She believes great software should feel effortless and focuses on crafting interfaces that reduce complexity for users.",
    image:
      "https://ui-avatars.com/api/?name=Sanya+Kapoor&background=9333EA&color=fff&size=256",
    role: "Co-Founder & Head of Design",
  },
  {
    rating: 4.7,
    name: "Rohan Verma",
    brief:
      "Rohan is a full-stack engineer who specializes in scalable cloud infrastructure. He builds systems capable of handling millions of AI-generated media requests efficiently.",
    image:
      "https://ui-avatars.com/api/?name=Rohan+Verma&background=16A34A&color=fff&size=256",
    role: "Co-Founder & CTO",
  },
  {
    rating: 4.8,
    name: "Neha Iyer",
    brief:
      "Neha brings deep experience in growth marketing and analytics. She helps startups turn product traction into sustainable revenue using data-driven acquisition strategies.",
    image:
      "https://ui-avatars.com/api/?name=Neha+Iyer&background=EA580C&color=fff&size=256",
    role: "Founder & Growth Lead",
  },
  {
    rating: 4.6,
    name: "Kabir Shah",
    brief:
      "Kabir is a serial entrepreneur who enjoys building tools that automate repetitive creative work. His current mission is helping brands produce high-quality video ads at scale.",
    image:
      "https://ui-avatars.com/api/?name=Kabir+Shah&background=0284C7&color=fff&size=256",
    role: "Founder",
  },
  {
    rating: 4.9,
    name: "Priya Nair",
    brief:
      "Priya is an AI researcher working on generative media and creative automation. She focuses on bridging machine learning research with practical tools for businesses.",
    image:
      "https://ui-avatars.com/api/?name=Priya+Nair&background=7C3AED&color=fff&size=256",
    role: "Co-Founder & AI Lead",
  },
];
export default function Founders() {
  return (
    <section className="bg-secondary/20 py-20">
      <div className="mx-auto max-w-7xl space-y-10 p-5">
        <Heading className="text-center">Built for solo founders</Heading>
        <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {foundersData.map((data, idx) => (
            <Card key={`key-${idx}`} className="border-border border">
              <CardHeader>
                <div className="flex items-center gap-2">
                  {Array.from({ length: data.rating }).map((_, idx) => {
                    return <StarIcon fill="yellow" key={idx} />;
                  })}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{`"${data.brief}"`}</CardDescription>
              </CardContent>
              <CardFooter>
                <div className="flex gap-2">
                  <Image
                    src={data.image}
                    alt={data.name ?? "User"}
                    width={30}
                    height={30}
                    className="h-auto w-12 rounded-full object-cover"
                  />
                  <div>
                    <CardTitle>{data.name}</CardTitle>
                    <CardDescription>{data.role}</CardDescription>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
