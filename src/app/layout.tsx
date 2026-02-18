
import type {Metadata} from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { AppContextProvider } from '@/context/app-context';

export const metadata: Metadata = {
  // TODO: Update the URL
  metadataBase: new URL("https://cyriellecoul.github.io/TODO"),
   title: 'Cyrielle | Développeuse Frontend & Mobile',
  description: 'Portfolio de Cyrielle, Développeuse Front-End & Mobile en React, JavaScript et TypeScript, avec une solide expérience en développement natif Android (Java) et iOS (Objective-C), ainsi qu’en React Native. Découvrez mes projets et compétences dans le développement web et mobile.',

  openGraph: {
  title: "Portfolio de Cyrielle",
  description: "Développeuse Frontend & Mobile",
  url: "https://cyriellecoul.github.io/devPortfolio/",
  siteName: "Portfolio de Cyrielle",
  images: [
    {
      url: "/image_open_graph.png",
      width: 1050,
      height: 600,
      alt: "Portfolio de Cyrielle",
    },
  ],
  locale: "fr_FR",
  type: "website",
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
        <AppContextProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <Toaster />
        </AppContextProvider>
      </body>
    </html>
  );
}
