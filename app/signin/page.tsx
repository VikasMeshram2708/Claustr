"use client";

import { Button } from "@/components/ui/button";
import { IconBrandGoogle } from "@tabler/icons-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { Loader2Icon } from "lucide-react";

export default function SignInPage() {
  const [loading, setLoading] = useState(false);

  async function handleSignIn() {
    setLoading(false);
    try {
      setLoading(true);

      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Internal server error.");
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="flex min-h-screen flex-col justify-center">
      <Card className="mx-auto w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-center text-xl font-bold md:text-2xl">
            Sign In Page
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center">
          <Button
            disabled={loading}
            onClick={handleSignIn}
            size={"lg"}
            type="button"
          >
            {loading ? (
              <Loader2Icon className="animate-spin" />
            ) : (
              <>
                <IconBrandGoogle />
                Sign in with Google
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
