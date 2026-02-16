
"use client";

import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Download, Github } from "lucide-react";
import Link from "next/link";
import { useAppContext } from "@/context/app-context";

export default function ContactPage() {
  const { t } = useAppContext();

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">{t.contact.title}</h1>
        <p className="text-muted-foreground text-lg">
          {t.contact.description}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="p-8 bg-primary text-white rounded-3xl space-y-8 max-w-md w-full">
          <h3 className="font-headline text-2xl font-bold">{t.contact.details}</h3>
          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <Link href="mailto:cyrielle.coul@gmail.com" target="_blank" >
                <div className="p-3 bg-white/10 rounded-xl group-hover:bg-secondary transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
              </Link>
              <div>
                <p className="text-xs uppercase tracking-widest text-white/60 mb-1">{t.contact.emailMe}</p>
                <p className="font-medium">cyrielle.coul@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <Link href="tel:+15144422470" target="_blank" >
                <div className="p-3 bg-white/10 rounded-xl group-hover:bg-secondary transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
              </Link>
              <div>
                <p className="text-xs uppercase tracking-widest text-white/60 mb-1">{t.contact.callMe}</p>
                <p className="font-medium">+1 (514) 442 2470</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-white/10 rounded-xl group-hover:bg-secondary transition-colors">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-white/60 mb-1">{t.contact.location}</p>
                <p className="font-medium">Montréal, QC</p>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex gap-4 justify-center">
            <Link href="https://www.linkedin.com/in/cyrielle-c/" target="_blank" className="p-3 bg-white/10 rounded-xl hover:bg-secondary transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="/CV_Cyrielle.pdf" target="_blank" className="p-3 bg-white/10 rounded-xl hover:bg-secondary transition-colors">
              <Download className="w-5 h-5" />
            </Link>
            <Link href="https://github.com/cyriellecoul" target="_blank" className="p-3 bg-white/10 rounded-xl hover:bg-secondary transition-colors">
              <Github className="w-5 h-5" />
            </Link>
          </div>
        </div>
        <div className="p-8 bg-card border rounded-3xl text-center max-w-md w-full">
          <h4 className="font-headline font-bold text-primary mb-2">{t.contact.downloadCv}</h4>

          <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/5" >
            <Link href="/CV_Cyrielle.pdf" target="_blank">
              <Download className="w-4 h-4 mr-2" />CV_Cyrielle.pdf</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
