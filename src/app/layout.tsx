import type { Metadata } from "next";
import { Caveat, Patrick_Hand } from "next/font/google";
import DoodleFilters from "@/components/DoodleFilters";
import "./globals.css";

const heading = Caveat({
  variable: "--font-heading",
  subsets: ["latin"],
});

const body = Patrick_Hand({
  variable: "--font-body",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dominic Delfin | Portfolio",
  description:
    "Portfolio of Dominic Delfin, software engineer: projects, experience, education, skills and certifications.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <DoodleFilters />
        {children}
      </body>
    </html>
  );
}
