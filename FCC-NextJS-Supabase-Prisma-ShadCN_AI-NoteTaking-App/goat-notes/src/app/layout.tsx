import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";


export const metadata: Metadata = {
  title: "Goat Notes",
  description: "AI powered note taking app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body

      >
            <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
