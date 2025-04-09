"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { portfolioData } from "../../lib/data";
import { motion } from "framer-motion";

const socials = [
  {
    icon: <Github className="h-5 w-5" />,
    link: portfolioData.personalInfo.contact.github.url,
  },
  {
    icon: <Linkedin className="h-5 w-5" />,
    link: portfolioData.personalInfo.contact.linkedin.url,
  },
  {
    icon: <Mail className="h-6 w-6" />,
    link: portfolioData.personalInfo.contact.email,
  },
];

export function Profile() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="card-hover">
        <CardContent className="pt-6">
          <div className="flex flex-col items-start gap-4">
            <div className="w-full flex flex-col items-center">
              <Image
                width={150}
                height={150}
                src="https://github.com/identicons/github.png"
                alt="Profile Picture"
                className="rounded-full border-4 border-muted"
              />
              <h1 className="font-bold text-center mt-4 text-2xl">
                {portfolioData.personalInfo.firstName}{" "}
                {portfolioData.personalInfo.lastName}
              </h1>
              <p className="mt-3 text-primary">Software Engineer</p>
            </div>

            <p className="text-sm text-muted-foreground text-center">
              {portfolioData.summary}
            </p>

            <Button className="w-full" asChild>
              <Link
                href={`mailto:${portfolioData.personalInfo.contact.email}`}
                className="font-semibold"
              >
                Contact Me
              </Link>
            </Button>

            <div className="w-full border-t border-border pt-4">
              {socials.map((social, index) => (
                <Link
                  key={index}
                  href={social.link}
                  className="flex items-center gap-2 py-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  {social.icon}
                  <span className="text-sm overflow-hidden text-ellipsis whitespace-nowrap">
                    {social.link.split("/").pop()}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
