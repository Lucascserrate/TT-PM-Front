import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SidebarView } from '@/components/Sidebar';
import Dashboard from '@/components/Dashboard';
import Providers from './Providers';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ProManage",
  description: "Gestor de Proyectos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div className="w-full h-screen rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 flex-1 border border-neutral-200 dark:border-neutral-700 overflow-hidden">
            <SidebarView />
            <Dashboard>
              {children}
            </Dashboard>
          </div>
        </Providers>
      </body>
    </html>
  );
}
