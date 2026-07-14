import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Sahihi Legal",
  description: "Learn about Sahihi Legal, a digitally-driven African business law firm helping startups, investors and international businesses in Kenya and beyond.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}