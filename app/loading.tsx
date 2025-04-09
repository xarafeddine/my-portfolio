"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative">
          <div className="h-24 w-24 rounded-full border-4 border-muted animate-spin border-t-primary"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-12 w-12 rounded-full bg-background"></div>
          </div>
        </div>
        <p className="text-lg font-medium text-muted-foreground">Loading...</p>
      </motion.div>
    </div>
  );
}