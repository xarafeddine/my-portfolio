"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { portfolioData } from "../../lib/data";
import { MapPin, Calendar, Briefcase } from "lucide-react";
import Image from "next/image";

export function Experience() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="mt-6"
    >
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <Briefcase className="h-5 w-5" />
        Work Experience
      </h2>
      <div className="space-y-4">
        {portfolioData.workExperience.map((job, index) => (
          <Card key={index} className="card-hover">
            <CardContent className="pt-6">
              <div className="flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex gap-4">
                    {/* <div className="w-12 h-12 relative rounded-lg overflow-hidden border shadow-sm">
                      <Image
                        src={job.logo}
                        alt={job.company}
                        fill
                        className="object-cover"
                      />
                    </div> */}
                    <div>
                      <h3 className="font-semibold text-lg">{job.position}</h3>
                      <p className="text-primary">{job.company}</p>
                    </div>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {job.period.start} - {job.period.end}
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {job.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}
