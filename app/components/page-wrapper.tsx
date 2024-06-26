"use client";

import { motion, AnimatePresence } from "framer-motion";

export const PageWrapper = ({ children }:any) => (
  <>
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.50 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  </>
);