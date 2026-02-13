"use client";

import { motion } from "framer-motion";

export default function SuccessTick() {
    return (
        <div className="flex justify-center items-center mb-6">
            <div className="relative w-24 h-24 flex items-center justify-center">
                {/* SVG with self-drawing path */}
                <svg
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Circle */}
                    <motion.circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="#FF4D00"
                        strokeWidth="3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        strokeLinecap="round"
                    />

                    {/* Tick */}
                    <motion.path
                        d="M28 50L43 65L72 35"
                        stroke="#FF4D00"
                        strokeWidth="5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }} // Start after circle finishes
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        </div>
    );
}