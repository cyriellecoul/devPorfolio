
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, Code2, Moon, Sun, Languages } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useAppContext } from "@/context/app-context";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { t, theme, toggleTheme, lang, toggleLang } = useAppContext();

  const navLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.projects, href: "/projects" },
    { name: t.nav.skills, href: "/skills" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.contact, href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Code2 className="w-8 h-8 text-primary group-hover:text-secondary transition-colors" />
          <span className="font-headline text-xl font-bold tracking-tight">Cyrielle</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-8 mr-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-secondary",
                  pathname === link.href ? "text-primary font-bold" : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 border-l pl-6">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full text-muted-foreground hover:text-primary"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
              {/* Language Switcher */}
              <Button
              variant="ghost"
              size="icon"
              onClick={toggleLang}
              className="rounded-full text-muted-foreground hover:text-primary"
                title={lang === 'fr' ? 'English' : 'Français'}
              aria-label={lang === 'fr' ? "Changer la langue en anglais" : "Change language to French"}
            >
             {lang === 'fr' ? 'EN' : 'FR'}</Button>
            <Button asChild className="bg-primary hover:bg-primary/90 ml-2">
              <Link href="/contact">{t.nav.contact}</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-2">
           <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
          <button
            className="p-2 text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-background border-b animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-4 p-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-lg font-medium p-2 rounded-md hover:bg-muted transition-colors",
                  pathname === link.href ? "text-primary bg-muted/50" : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center justify-between border-t pt-4 mt-2">
               <div className="flex gap-4">
                  <Button variant="outline" size="sm" onClick={toggleLang} className={cn(lang === 'en' && "border-primary text-primary")}>EN</Button>
                  <Button variant="outline" size="sm" onClick={toggleLang} className={cn(lang === 'fr' && "border-primary text-primary")}>FR</Button>
               </div>
               <Button asChild size="sm" className="bg-primary">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>{t.nav.contact}</Link>
               </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
