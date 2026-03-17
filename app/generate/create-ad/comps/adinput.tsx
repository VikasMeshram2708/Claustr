"use client";

import { AdGenActionResponse, createAdGen } from "@/app/actions/ad-create";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
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
import { CircleCheckBigIcon, Loader2Icon, SendIcon } from "lucide-react";
import { useActionState } from "react";
import { ErrorIcon } from "react-hot-toast";

const initialState: AdGenActionResponse = {
  message: "",
  success: false,
  errors: {},
};

export default function AdInput() {
  const [state, action, isPending] = useActionState(createAdGen, initialState);

  return (
    <section className="px-4 py-8">
      {state?.message && (
        <Alert
          variant={state?.success ? "default" : "destructive"}
          className="flex items-start gap-4 rounded-xl border p-4 shadow-sm"
        >
          {/* Icon */}
          <div
            className={`mt-0.5 flex size-9 items-center justify-center rounded-lg ${
              state?.success
                ? "bg-green-500/10 text-green-600"
                : "bg-red-500/10 text-red-600"
            }`}
          >
            {state?.success ? (
              <CircleCheckBigIcon className="size-5" />
            ) : (
              <ErrorIcon className="size-5" />
            )}
          </div>

          {/* Content */}
          <div className="flex flex-col gap-1">
            <AlertTitle className="text-sm leading-none font-semibold">
              {state?.success ? "Success" : "Fix the following errors"}
            </AlertTitle>

            <AlertDescription className="text-muted-foreground text-sm leading-relaxed">
              {state?.message}
            </AlertDescription>
          </div>
        </Alert>
      )}
      <Card className="border-border/60 bg-background rounded-2xl border shadow-sm">
        <CardContent className="p-6 md:p-8">
          <form action={action} className="space-y-8">
            {/* Product Info */}
            <div className="space-y-4">
              <p className="text-muted-foreground text-sm font-medium">
                Product Information
              </p>

              <div>
                <Input
                  defaultValue={state?.inputs?.name}
                  type="text"
                  name="name"
                  placeholder="Product name"
                  className="h-11 w-full"
                  maxLength={200}
                />
                {state?.errors && (
                  <p className="text-sm/6 font-semibold text-red-500">
                    {state?.errors?.name?.[0]}
                  </p>
                )}
              </div>

              <div>
                <Textarea
                  defaultValue={state?.inputs?.description}
                  name="description"
                  placeholder="Product description"
                  className="min-h-27.5 w-full"
                  maxLength={500}
                />
                {state?.errors && (
                  <p className="text-sm/6 font-semibold text-red-500">
                    {state?.errors?.description?.[0]}
                  </p>
                )}
              </div>
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
                  <Select
                    name="audience"
                    defaultValue={state?.inputs?.audience}
                  >
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
                  {state?.errors && (
                    <p className="text-sm/6 font-semibold text-red-500">
                      {state?.errors?.audience?.[0]}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <p className="text-muted-foreground text-xs">Age group</p>
                  <Select name="age" defaultValue={state?.inputs?.age}>
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
                  {state?.errors && (
                    <p className="text-sm/6 font-semibold text-red-500">
                      {state?.errors?.age?.[0]}
                    </p>
                  )}
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
                  <Select name="goal" defaultValue={state?.inputs?.goal}>
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
                  {state?.errors && (
                    <p className="text-sm/6 font-semibold text-red-500">
                      {state?.errors?.goal?.[0]}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <p className="text-muted-foreground text-xs">Ad style</p>
                  <Select name="style" defaultValue={state?.inputs?.style}>
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
                  {state?.errors && (
                    <p className="text-sm/6 font-semibold text-red-500">
                      {state?.errors?.style?.[0]}
                    </p>
                  )}
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
                  <Select name="length" defaultValue={state?.inputs?.length}>
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
                  {state?.errors && (
                    <p className="text-sm/6 font-semibold text-red-500">
                      {state?.errors?.length?.[0]}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <p className="text-muted-foreground text-xs">Content type</p>
                  <Select name="type" defaultValue={state?.inputs?.type}>
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
                  {state?.errors && (
                    <p className="text-sm/6 font-semibold text-red-500">
                      {state?.errors?.type?.[0]}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end">
              <Button type="submit" disabled={isPending}>
                {isPending ? (
                  <Loader2Icon className="animate-spin" />
                ) : (
                  <>
                    <SendIcon />
                    Submit
                  </>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
