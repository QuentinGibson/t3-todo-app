import "~/styles/globals.css";

import { type Metadata } from "next";
import { sans } from "~/app/fonts";

export const metadata: Metadata = {
  title: "Bravo Beasts",
  description: "Bravo Beast Phase Up Guide",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.className}`}>
      <body>{children}</body>
    </html>
  );
}
