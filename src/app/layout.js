import "./globals.css";

import {
  Allura,
  Artifika,
  Delius,
} from "next/font/google";

const allura = Allura({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-allura",
  display: "swap",
});

const artifika = Artifika({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-artifika",
  display: "swap",
});

const delius = Delius({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-delius",
  display: "swap",
});

export const metadata = {
  title: "Satt Event Planners",
  description:
    "Satt Event Planners — Creating memorable experiences through thoughtful planning, creativity and flawless execution.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${allura.variable} ${artifika.variable} ${delius.variable}`}
      >
        {children}
      </body>
    </html>
  );
}