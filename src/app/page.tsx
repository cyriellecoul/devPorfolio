
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, BugPlay, CalendarClock, Code2, Handshake, Lightbulb,Rocket, Smartphone } from "lucide-react";
import { useAppContext } from "@/context/app-context";
import { useState, useEffect } from "react";

export default function Home() {
  const { t } = useAppContext();
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const accentTexts = [
    t.hero.titleAccent1,
    t.hero.titleAccent2,
    t.hero.titleAccent3
  ];

  useEffect(() => {
    const currentText = accentTexts[currentIndex];
    
    if (isTyping) {
      if (displayText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 10);
        return () => clearTimeout(timeout);
      } else {
        setCurrentIndex((prev) => (prev + 1) % accentTexts.length);
        setIsTyping(true);
      }

    }
  }, [displayText, currentIndex, isTyping, accentTexts]);

  return (
    <div className="relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl -z-10">
        <div className="absolute top-20 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 md:py-32 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xl font-bold uppercase tracking-wider mb-8 animate-in fade-in slide-in-from-bottom-2 duration-700">
          <Rocket className="w-3 h-3" />
          <span>{t.hero.badge}</span>
        </div>
        
        <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary mb-6 max-w-4xl tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {t.hero.titleName}<br />{t.hero.title.length === 0 ? "" : (<>{t.hero.title}<br /></>)}<span className="text-secondary">{displayText}<span className="animate-pulse">|</span></span>
        </h1>
        
        <p className="font-body text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000">
          {t.hero.description1}<strong>{t.hero.description2}</strong>{t.hero.description3}<br />{t.hero.description4}<br /><br /><strong>{t.hero.languagesWebTitle}</strong>{t.hero.languagesWeb}<br /> <strong>{t.hero.languagesMobileTitle}</strong>{t.hero.languagesMobile}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <Button asChild size="lg" className="bg-primary text-white h-14 px-8 text-base">
            <Link href="/projects" className="flex items-center gap-2">
              {t.hero.viewWork} <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5 h-14 px-8 text-base">
            <Link href="/contact">{t.hero.getInTouch}</Link>
          </Button>
        </div>
      </section>

      {/* Quick Features */}
      <section className="bg-card py-20 border-y">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {[
              {
                icon: <Code2 className="w-10 h-10 text-secondary" />,
                title: t.features.modernStack,
                desc: t.features.modernStackDesc
              },
              {
                icon: <Smartphone className="w-10 h-10 text-secondary" />,
                title: t.features.mobileFirst,
                desc: t.features.mobileFirstDesc
              },
              {
                icon: <Lightbulb className="w-10 h-10 text-secondary" />,
                title: t.features.teamWork,
                desc: t.features.teamWorkDesc
              }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl border bg-background hover:shadow-lg transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="font-headline text-xl font-bold text-primary mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
          {/* New Features with Bullet Points */}
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <BugPlay className="w-10 h-10 text-secondary" />,
                title: t.features.bulletFeature1Title,
                bullets: t.features.bulletFeature1List
              },
              {
                icon: <Handshake className="w-10 h-10 text-secondary" />,
                title: t.features.bulletFeature2Title,
                bullets: t.features.bulletFeature2List
              },
              {
                icon: <CalendarClock className="w-10 h-10 text-secondary" />,
                title: t.features.bulletFeature3Title,
                bullets: t.features.bulletFeature3List
              }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl border bg-background hover:shadow-lg transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="font-headline text-xl font-bold text-primary mb-2">{feature.title}</h3>
                <ul className="text-muted-foreground list-disc list-inside text-left">
                  {feature.bullets.map((point: string, idx: number) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
