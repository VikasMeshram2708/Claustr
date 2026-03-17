"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function AdInput() {
  return (
    <section className="px-4 py-8">
      <Card className="border-border/60 bg-background rounded-2xl border shadow-sm">
        <CardContent className="p-6 md:p-8">
          <form className="space-y-8">
            {/* Product Info */}
            <div className="space-y-4">
              <p className="text-muted-foreground text-sm font-medium">
                Product Information
              </p>

              <Input
                type="text"
                name="name"
                placeholder="Product name"
                className="h-11 w-full"
              />

              <Textarea
                name="description"
                placeholder="Product description"
                className="min-h-27.5 w-full"
              />
            </div>

            {/* Audience Targeting */}
            <div className="space-y-4">
              <p className="text-muted-foreground text-sm font-medium">
                Audience Targeting
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <p className="text-muted-foreground text-xs">
                    Target audience
                  </p>
                  <Select>
                    <SelectTrigger className="h-11 w-full">
                      <SelectValue placeholder="Select audience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="students">Students</SelectItem>
                        <SelectItem value="professionals">
                          Professionals
                        </SelectItem>
                        <SelectItem value="influencers">Influencers</SelectItem>
                        <SelectItem value="parents">Parents</SelectItem>
                        <SelectItem value="seniors">Seniors</SelectItem>
                        <SelectItem value="teenagers">Teenagers</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <p className="text-muted-foreground text-xs">Age group</p>
                  <Select>
                    <SelectTrigger className="h-11 w-full">
                      <SelectValue placeholder="Select age group" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="18-24">18-24 years</SelectItem>
                        <SelectItem value="25-34">25-34 years</SelectItem>
                        <SelectItem value="35-44">35-44 years</SelectItem>
                        <SelectItem value="45-54">45-54 years</SelectItem>
                        <SelectItem value="55+">55+ years</SelectItem>
                        <SelectItem value="all">All ages</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Campaign Goals */}
            <div className="space-y-4">
              <p className="text-muted-foreground text-sm font-medium">
                Campaign Goals
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <p className="text-muted-foreground text-xs">Primary goal</p>
                  <Select>
                    <SelectTrigger className="h-11 w-full">
                      <SelectValue placeholder="Select goal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="sales">Increase sales</SelectItem>
                        <SelectItem value="brand">Brand awareness</SelectItem>
                        <SelectItem value="leads">Generate leads</SelectItem>
                        <SelectItem value="traffic">Website traffic</SelectItem>
                        <SelectItem value="engagement">
                          Social engagement
                        </SelectItem>
                        <SelectItem value="app">App installs</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <p className="text-muted-foreground text-xs">Ad style</p>
                  <Select>
                    <SelectTrigger className="h-11 w-full">
                      <SelectValue placeholder="Select style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="professional">
                          Professional
                        </SelectItem>
                        <SelectItem value="casual">Casual</SelectItem>
                        <SelectItem value="humorous">Humorous</SelectItem>
                        <SelectItem value="emotional">Emotional</SelectItem>
                        <SelectItem value="urgent">Urgent</SelectItem>
                        <SelectItem value="luxury">Luxury</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Ad Format */}
            <div className="space-y-4">
              <p className="text-muted-foreground text-sm font-medium">
                Ad Format
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <p className="text-muted-foreground text-xs">Ad length</p>
                  <Select>
                    <SelectTrigger className="h-11 w-full">
                      <SelectValue placeholder="Select length" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="short">Short (15-30 sec)</SelectItem>
                        <SelectItem value="medium">
                          Medium (30-60 sec)
                        </SelectItem>
                        <SelectItem value="long">Long (60+ sec)</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <p className="text-muted-foreground text-xs">Content type</p>
                  <Select>
                    <SelectTrigger className="h-11 w-full">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="video">Video</SelectItem>
                        <SelectItem value="image">Image</SelectItem>
                        <SelectItem value="carousel">Carousel</SelectItem>
                        <SelectItem value="story">Story</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
