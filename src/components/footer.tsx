
"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useAppContext } from "@/context/app-context";

export function Footer() {
  const { t } = useAppContext();

  return (
    <footer className="w-full border-t bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-headline text-xl font-bold text-primary">Cyrielle</h3>
            <p className="text-muted-foreground mt-2 max-w-xs">
              {t.footer.desc}
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <Link href="https://github.com/cyriellecoul" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </Link>
            <Link href="https://www.linkedin.com/in/cyrielle-c/" target="_blank" data-lucide="linkedin" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="mailto:cyriellecoul@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
            </Link>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Cyrielle. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
