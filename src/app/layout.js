import { Manrope } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/animations/CustomCursor";
import { ThemeProvider } from "@/components/theme-provider";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata = {
  metadataBase: new URL("https://facilityflow.vercel.app"),

  title: {
    default: "FacilityFlow | Premium Property & Facility Management",
    template: "%s | FacilityFlow",
  },

  description:
    "FacilityFlow delivers premium integrated property and facility management services across India, including housekeeping, security, MEP, pest control, deep cleaning, gardening, parking management, and more.",

  keywords: [
    "Property Management",
    "Facility Management",
    "Integrated Facility Management",
    "Housekeeping Services",
    "Security Services",
    "MEP Services",
    "Pest Control",
    "Deep Cleaning",
    "Corporate Facility Management",
    "Property Maintenance",
    "Commercial Property Management",
    "FacilityFlow",
  ],

  authors: [
    {
      name: "FacilityFlow",
    },
  ],

  creator: "FacilityFlow",

  applicationName: "FacilityFlow",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "FacilityFlow | Premium Property & Facility Management",
    description:
      "Premium Integrated Property & Facility Management Solutions Across India.",

    url: "https://facilityflow.vercel.app",

    siteName: "FacilityFlow",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FacilityFlow Website Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "FacilityFlow | Premium Property & Facility Management",

    description:
      "Integrated Property & Facility Management Solutions Across India.",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export const viewport = {
  themeColor: "#0B1F3A",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} font-sans bg-white dark:bg-[#07111F] text-slate-900 dark:text-slate-100 antialiased transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
