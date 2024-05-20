import { ClerkProvider } from "@clerk/nextjs";
import { Plus_Jakarta_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WorkFinder",
  description: "an app to find work",
};

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn("bg-[#F7F7FB]", font.className)}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
