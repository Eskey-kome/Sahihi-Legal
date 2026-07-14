import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Sahihi Legal",
  description: "Plain-language legal insights on Kenyan and international business law for founders, investors and business leaders.",
};

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return children;
}