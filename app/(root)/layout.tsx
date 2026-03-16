import Footer from "@/components/footer";
import Header from "@/components/header";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense fallback={<Skeleton className="mx-auto h-12 max-w-7xl" />}>
        <Header />
      </Suspense>
      {children}
      <Footer />
    </>
  );
}
