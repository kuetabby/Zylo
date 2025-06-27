import React from "react";
import { Metadata, Viewport } from "next";

import { AntdRegistry } from "@ant-design/nextjs-registry";

import { IndexLayout } from "@/layouts";

import "./globals.css";

import { moonrising } from "@/utils/font";

const app_title = "Zylo";
const app_name = "Zylo";
const description = "AI for the Decentralized Future";

export const metadata: Metadata = {
  title: app_title,
  description,
  applicationName: app_name,
  keywords:
    "Blockchain, Connectivity, Decentralized Solutions, Community-Driven, Transparency, Security, Innovation",
  referrer: "origin-when-cross-origin",
  // metadataBase: new URL("https://ifritnetwork.com"),
  icons: {
    icon: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png" },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: app_name,
    description,
    images: ["/apple-touch-icon.png"],
  },
  openGraph: {
    type: "website",
    siteName: app_name,
    title: app_name,
    description: description,
    images: "/og-image.png",
  },
  category: "crypto dApp",
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0A8FDC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={"scroll-smooth bg-black " + moonrising.className}
    >
      <body>
        <AntdRegistry>
          <IndexLayout>{children}</IndexLayout>
        </AntdRegistry>
      </body>
    </html>
  );
}
