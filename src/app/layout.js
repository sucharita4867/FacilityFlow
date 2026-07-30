import { Manrope } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/animations/CustomCursor";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata = {
  title: "FacilityFlow | Property & Facility Management",
  description: "Premium Property & Facility Management Services Across India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} font-sans bg-white text-slate-900 antialiased`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
