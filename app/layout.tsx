import type { Metadata } from "next";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";
import { AosInit } from "@/components/shared/AosInit";
import { HireMeModal } from "@/components/contact/HireMeModal";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: {
    default: `${profile.name} — ${profile.title}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.summary,
};

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <link rel="stylesheet" href="/assets/css/vendor/bootstrap.min.css" precedence="default" />
        <link rel="stylesheet" href="/assets/css/vendor/remixicon.css" precedence="default" />
        <link rel="stylesheet" href="/assets/css/vendor/owl.carousel.min.css" precedence="default" />
        <link rel="stylesheet" href="/assets/css/vendor/aos.css" precedence="default" />
        <link rel="stylesheet" href="/assets/css/style.css" precedence="high" />
        <AosInit />
        <Nav />
        {children}
        <Footer />
        <BackToTop />
        <HireMeModal />
        <Script src="/assets/js/vendor/bootstrap.bundle.min.js" strategy="afterInteractive" />
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
