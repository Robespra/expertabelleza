// /Users/UXPAGES/Apps/avis-beaute/src/lib/fonts.ts
import localFont from "next/font/local";

export const geist = localFont({
  src: [
    {
      path: "../../public/fonts/Geist/Geist-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Geist/Geist-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Geist/Geist-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-geist",
});

export const geistMono = localFont({
  src: [
    {
      path: "../../public/fonts/Geist-Mono/GeistMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Geist-Mono/GeistMono-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Geist-Mono/GeistMono-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-geist-mono",
});
