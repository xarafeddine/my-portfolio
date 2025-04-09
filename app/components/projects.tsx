"use client";

import { ExternalLink, Github, Code } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { portfolioData } from "../../lib/data";
import { motion } from "framer-motion";
import Link from "next/link";

export function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-6"
    >
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <Code className="h-5 w-5" />
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {portfolioData.projects.map((project, index) => (
          <Card key={index} className="card-hover">
            <CardContent className="pt-6">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-2">
                  <Link
                    href={`https://${project.githubUrl}`}
                    className="font-semibold text-primary hover:underline link-hover"
                  >
                    {project.name}
                  </Link>
                  <span className="text-xs text-muted-foreground">
                    {project.period.start} - {project.period.end}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <Link
                    href={`https://${project.githubUrl}`}
                    className="flex items-center gap-2 text-sm text-primary hover:underline group"
                  >
                    <Github className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                    View on GitHub
                    <ExternalLink className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}