"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "../../components/ui/card";
import { portfolioData } from "../../lib/data";
import { User } from "lucide-react";

export function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <User className="h-5 w-5" />
        About Me
      </h2>
      <Card className="card-hover">
        <CardContent className="pt-6">
          <p className="text-muted-foreground">
            {portfolioData.aboutMe}
          </p>
        </CardContent>
      </Card>
    </motion.section>
  );
}