import { Inter } from "next/font/google";
import { ThemeProvider } from "../components/theme-provider";
import { ThemeToggle } from "../components/theme-toggle";
import { portfolioData } from "../lib/data";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: `${portfolioData.personalInfo.firstName} - Portfolio`,
  description: portfolioData.summary,
  keywords: [
    "software engineer",
    "web developer",
    "full stack developer",
    portfolioData.personalInfo.firstName,
    portfolioData.personalInfo.lastName,
    ...portfolioData.skills.coreTechnologies,
  ],
  authors: [
    {
      name: `${portfolioData.personalInfo.firstName} ${portfolioData.personalInfo.lastName}`,
      url: portfolioData.personalInfo.contact.github.url,
    },
  ],
  creator: portfolioData.personalInfo.firstName,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background text-foreground">
            <header className="fixed flex items-center justify-center top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <nav className="container flex h-14 items-center justify-between ">
                <a href="/" className="font-semibold">
                  {portfolioData.personalInfo.firstName}
                </a>
                <ThemeToggle />
              </nav>
            </header>
            <main className="container mx-auto px-4 pt-20 pb-16">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
