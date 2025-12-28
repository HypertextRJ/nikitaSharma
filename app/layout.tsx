import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nikita Sharma - Data Analyst Portfolio | Python, SQL, Power BI",
  description: "Data Analyst portfolio showcasing machine learning, business intelligence, and statistical analysis projects. Statistics graduate specializing in predictive modeling and data visualization.",
  icons: {
    icon: '/nikita.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
