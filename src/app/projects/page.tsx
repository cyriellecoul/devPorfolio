
"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useAppContext } from "@/context/app-context";
import { projectsList } from "./lib/projectsList.json";



export default function ProjectsPage() {
  const { t } = useAppContext();
  const profileImg = PlaceHolderImages.find(img => img.id === "profile")?.imageUrl || "";
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">{t.projects.title}</h1>
        <p className="text-muted-foreground text-lg">
          {t.projects.description}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsList.map((project, i) => (
          <Card key={i} className="group overflow-hidden border bg-card hover:shadow-xl transition-all duration-300">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={profileImg}
                alt={t.projects[`project${i + 1}desc${i + 1}` as keyof typeof t.projects]}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                data-ai-hint="project showcase"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <Link href={project.live} target="_blank" className="p-3 bg-white rounded-full text-primary hover:text-secondary transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </Link>
                <Link href={project.github} target="_blank" className="p-3 bg-white rounded-full text-primary hover:text-secondary transition-colors">
                  <Github className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="font-headline text-2xl font-bold text-primary group-hover:text-secondary transition-colors">
                {t.projects[`project${i + 1}title` as keyof typeof t.projects]}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground text-sm  mb-4">
                {t.projects[`project${i + 1}desc1` as keyof typeof t.projects]} <br />
                {t.projects[`project${i + 1}desc2` as keyof typeof t.projects]} <br />
                {/* desc3 as bullet list */}
                {t.projects[`project${i + 1}desc3` as keyof typeof t.projects] && (
                  <ul className="list-disc list-inside mt-2">
                    {t.projects[`project${i + 1}desc3` as keyof typeof t.projects]
                      .split(',')
                      .map((part, idx) => (
                        <li key={idx}>{part.trim()}</li>
                      ))}
                  </ul>
                )}
              </CardDescription>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="bg-secondary/10 text-secondary hover:bg-secondary/20">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="pt-0 flex justify-end gap-4">
              <Link href={project.live} className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-1 hover:text-secondary transition-colors">
                {t.projects.caseStudy} <ArrowRight className="w-3 h-3" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);
