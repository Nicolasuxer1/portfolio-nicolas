"use client";

import { motion } from "framer-motion";

export default function MotionTest() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="rounded-xl bg-white p-8 shadow-md"
    >
      <h2 className="text-2xl font-semibold text-gray-800">
        Framer Motion is working
      </h2>
      <p className="mt-2 text-gray-500">
        This card faded in using{" "}
        <code className="rounded bg-gray-100 px-1 py-0.5 text-sm text-indigo-600">
          motion.div
        </code>
        .
      </p>
    </motion.div>
  );
}
