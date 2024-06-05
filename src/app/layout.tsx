import React from "react";
import './globals.css';

export const metadata = {
  title: 'Counter-Atomic App',
  description: 'A simple counter app using Next.js and atomic design',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
