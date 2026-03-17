"use client";

import { Button } from "@/components/ui/button";
import { IconBrandGoogle } from "@tabler/icons-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { Loader2Icon } from "lucide-react";
import Image from "next/image";

export default function SignInPage() {
  const [loading, setLoading] = useState(false);

  async function handleSignIn() {
    try {
      setLoading(true);

      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Internal server error.");
      setLoading(false);
    }
  }

  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      {/* LEFT SECTION (IMAGE) */}
      <div className="relative hidden md:block">
        <Image
          src="/assets/signin.jpeg" // ✅ must be inside /public/assets
          alt="Cluastr visual"
          fill
          priority
          className="object-cover"
        />

        {/* Brand */}
        <div className="absolute top-6 left-6 text-3xl font-bold text-white">
          Cluastr
        </div>

        {/* Optional overlay for readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* RIGHT SECTION (AUTH CARD) */}
      <div className="flex items-center justify-center px-6">
        <Card className="w-full max-w-sm border shadow-sm">
          <CardHeader>
            <CardTitle className="text-center text-xl font-semibold md:text-2xl">
              Continue to Cluastr
            </CardTitle>
            <p className="text-muted-foreground text-center text-sm">
              Sign in to continue your experience
            </p>
          </CardHeader>

          <CardContent className="space-y-4">
            <Button
              disabled={loading}
              onClick={handleSignIn}
              size="lg"
              className="w-full cursor-pointer"
            >
              {loading ? (
                <Loader2Icon className="animate-spin" />
              ) : (
                <>
                  <IconBrandGoogle className="mr-2" />
                  Sign in with Google
                </>
              )}
            </Button>

            <p className="text-muted-foreground text-center text-xs">
              By continuing, you agree to our Terms & Privacy Policy.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
