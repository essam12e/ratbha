import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-arabic",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ratbha.vercel.app"),
  title: "رتبها - برنامج تنظيم الملفات للويندوز",
  description:
    "حمل برنامج رتبها لتنظيم سطح المكتب والتنزيلات والملفات تلقائياً حسب النوع أو التاريخ أو الامتداد بطريقة آمنة وسريعة.",
  keywords: [
    "رتبها",
    "برنامج تنظيم الملفات",
    "تنظيم سطح المكتب",
    "تنظيم التنزيلات",
    "Windows file organizer",
    "ترتيب الملفات"
  ],
  openGraph: {
    title: "رتبها - برنامج تنظيم الملفات للويندوز",
    description:
      "برنامج ذكي يحافظ على ملفاتك مرتبة بسرعة وأمان، مع معاينة قبل التنفيذ وإمكانية التراجع.",
    images: ["/logo.png"],
    locale: "ar_SA",
    type: "website"
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico"
  }
};

export const viewport: Viewport = {
  themeColor: "#08111F",
  colorScheme: "dark"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar-SA" dir="rtl" className={ibmPlexArabic.variable}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
