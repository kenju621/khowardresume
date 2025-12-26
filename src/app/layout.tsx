import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kenju | KMD Interactive Resume",
  description:
    "Interactive resume for Kenneth “Kenju” Howard – Product Manager & Senior UX Engineer at KMD."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#050814] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
