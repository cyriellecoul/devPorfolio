
"use client";

import { Database, Layout, Settings, Smartphone } from "lucide-react";
import { useAppContext } from "@/context/app-context";

export default function SkillsPage() {
  const { t } = useAppContext();

  const skillCategories = [
    {
      title: t.skills.mobile,
      icon: <Smartphone className="w-8 h-8 text-secondary" />,
      skills: ["Java", "Objective-C", "React Native", "Xcode", "Android Studio", "Android SDK"]
    },
    {
      title: t.skills.frontend, 
      icon: <Layout className="w-8 h-8 text-secondary" />,
      skills: ["Angular", "JavaScript", "TypeScript", "React", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"]
    },
    {
      title: t.skills.backend,
      icon: <Database className="w-8 h-8 text-secondary" />,
      skills: ["Node.js", "MongoDB", "Firebase", "Docker", "Postman", "Ngrok", "RESTful API", "MySQL"]
    },
    {
      title: t.skills.tools, 
      icon: <Settings className="w-8 h-8 text-secondary" />,
      skills: ["Git", "GitHub", "Atlassian (Bitbucket, Jira, Confluence)", "SourceTree", "Figma", "Agile Methodologies (Scrum)",]
    },

  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">{t.skills.title}</h1>
        <p className="text-muted-foreground text-lg">
          {t.skills.description}
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {skillCategories.map((category, i) => (
          <div key={i} className="p-8 rounded-3xl border bg-card hover:border-secondary/50 transition-colors group">
            <div className="mb-6 p-4 bg-background rounded-2xl inline-block group-hover:scale-110 transition-transform">
              {category.icon}
            </div>
            <h3 className="font-headline text-2xl font-bold text-primary mb-6">{category.title}</h3>
            <div className="grid grid-cols-1 gap-3">
              {category.skills.map((skill, j) => (
                <div key={j} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span className="text-muted-foreground font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { label: t.skills.stats.experience, value: "5+" },
          { label: t.skills.stats.bugs, value: "204+" },
          { label: t.skills.stats.motivation, value: "100%" },
          { label: t.skills.stats.save, value: "∞" }
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <div className="font-headline text-4xl font-bold text-primary mb-1">{stat.value}</div>
            <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
