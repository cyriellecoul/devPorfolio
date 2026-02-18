
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Mail, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import { useAppContext } from "@/context/app-context";

export default function AboutPage() {
  const { t } = useAppContext();
  const basePath = process.env.NODE_ENV === 'development' ? '' : '/devPortfolio';
  const profileImg = PlaceHolderImages.find(img => img.id === "profile")?.imageUrl || "";

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl z-10 border-8 border-white w-[300px] h-[350px] mx-auto flex items-center justify-center">
            <Image
              src={`${basePath}${profileImg}`}
              alt="Profile Portrait"
              fill
              className="object-cover"
              data-scroll-behavior="smooth"
              priority
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
          <div className="absolute -top-10 -left-10 w-36 h-36 bg-secondary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-6">{t.about.title}</h1>
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </div>

          <div className="flex gap-4 mt-8">
            <Link href="https://www.linkedin.com/in/cyrielle-c/" target="_blank" className="p-3 bg-primary text-white rounded-xl hover:bg-secondary transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="https://github.com/cyriellecoul" target="_blank" className="p-3 bg-primary text-white rounded-xl hover:bg-secondary transition-colors">
              <Github className="w-5 h-5" />
            </Link>
            <Link href="mailto:cyriellecoul@gmail.com" className="p-3 bg-primary text-white rounded-xl hover:bg-secondary transition-colors">
              <Mail className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
