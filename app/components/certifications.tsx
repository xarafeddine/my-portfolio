"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { portfolioData } from "../../lib/data";
import { Award, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Certifications() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="space-y-6"
    >
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            Licenses & Certifications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {portfolioData.certifications.map((cert, index) => (
              <div
                key={index}
                className={`${
                  index !== portfolioData.certifications.length - 1
                    ? "pb-6 border-b"
                    : ""
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 relative flex-shrink-0">
                    <Image
                      src={cert.logo}
                      alt={cert.organization}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <Link
                      href={cert.verificationUrl}
                      target="_blank"
                      className="font-medium text-primary hover:underline flex items-center gap-1 group"
                    >
                      {cert.name}
                      {/* <ExternalLink className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" /> */}
                    </Link>
                    <p className="text-sm text-muted-foreground">
                      {cert.organization}
                    </p>
                    {cert.score && (
                      <p className="text-sm text-muted-foreground mt-1">
                        Score: {cert.score}
                      </p>
                    )}
                    <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>Issued {cert.issueDate}</span>
                    </div>
                    {cert.credentialId && (
                      <p className="text-xs text-muted-foreground mt-1">
                        Credential ID: {cert.credentialId}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
