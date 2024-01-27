import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "StreaMarvel",
  description:
    "Stream all your favorite Marvel movies in one place. From the Avengers to Spider-Man, experience the entire Marvel Cinematic Universe on our streaming platform. Join your favorite superheroes on thrilling adventures, and enjoy exclusive content and behind-the-scenes footage.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Toaster position="top-center" />

        {children}
      </body>
    </html>
  );
}
