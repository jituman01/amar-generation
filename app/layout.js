import { Hind_Siliguri, Noto_Serif_Bengali, Outfit } from "next/font/google";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
  variable: "--font-bengali-sans",
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const notoSerifBengali = Noto_Serif_Bengali({
  variable: "--font-bengali-serif",
  subsets: ["bengali"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-latin",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = {
  metadataBase: new URL("https://amar-generation.vercel.app"),
  title: "Amar Generation — আমার জেনারেশন | ছোটবেলার গল্প, নিজের মতো করে",
  description: "তোমার শৈশবের খেলা, কার্টুন, খাবার আর স্মৃতিগুলো বেছে নাও। তৈরি করো তোমার নিজের Generation Card।",
  icons: {
    icon: "/logo-png.png",
    shortcut: "/logo-png.png",
    apple: "/logo-png.png",
  },
  openGraph: {
    title: "Amar Generation — আমার জেনারেশন",
    description: "তোমার শৈশবের খেলা, কার্টুন, খাবার আর স্মৃতিগুলো বেছে নাও। তৈরি করো তোমার নিজের Generation Card।",
    type: "website",
    locale: "bn_BD",
    images: ["/logo-png.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="bn"
      className={`${hindSiliguri.variable} ${notoSerifBengali.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink selection:bg-tan/40 selection:text-ink">
        {children}
      </body>
    </html>
  );
}
