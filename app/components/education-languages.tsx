"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { portfolioData } from "../../lib/data";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export function EducationLanguages() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="space-y-6"
    >
      {/* Education */}
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5" />
            Education
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">{portfolioData.education.institution}</h3>
            <p className="text-primary">{portfolioData.education.degree}</p>
            <p className="text-sm text-muted-foreground">{portfolioData.education.major}</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {portfolioData.education.period.start} - {portfolioData.education.period.end}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {portfolioData.education.location}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Languages */}
      <Card className="card-hover">
        <CardHeader>
          <CardTitle>Languages</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {portfolioData.languages.map((lang, index) => (
              <li key={index} className="flex justify-between items-center">
                <span className="font-medium">{lang.language}</span>
                <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                  {lang.level}
                </Badge>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}