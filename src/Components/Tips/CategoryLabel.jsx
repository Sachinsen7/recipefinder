// components/CategoryLabel.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

function CategoryLabel({
  label = "Vegetables",
  mainImage,
  subItems = [
    {
      image: "https://via.placeholder.com/96",
      text: "Chop and add to soup or chili.",
    },
    {
      image: "https://via.placeholder.com/96",
      text: "Toss with cold pasta and light dressing for a salad.",
    },
    {
      image: "https://via.placeholder.com/96",
      text: "Slice and serve with hummus.",
    },
  ],
}) {
  const [showImages, setShowImages] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const labelVariants = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <div className="relative flex mt-32 flex-col items-center justify-center py-6 bg-gradient-to-r from-[#E6F0FA] to-[#E6F7E0]">
      {/* Main Row: Image, Line, and Initial Label */}
      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl px-4">
        <div className="flex items-center w-full">
          <div className="relative">
            <img
              src={mainImage}
              alt={label}
              className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="transition-colors duration-300 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                <button
                  onClick={() => setShowImages(!showImages)}
                  className="text-white"
                >
                  <motion.div
                    animate={{ rotate: showImages ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <Plus size={24} className="md:size-30" />
                  </motion.div>
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1 h-1 bg-teal-500 mx-4 hidden md:block" />

          <AnimatePresence>
            {!showImages && (
              <motion.span
                className="text-xl md:text-2xl font-semibold text-teal-500 poppins-semibold md:ml-4 mt-4 md:mt-0"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {label}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Sliding Images with New Label Above */}
      <AnimatePresence>
        {showImages && (
          <motion.div
            className="flex flex-col items-center mt-6 w-full max-w-6xl px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.span
              className="text-xl md:text-2xl font-semibold text-teal-500 poppins-semibold mb-4"
              variants={labelVariants}
              initial="hidden"
              animate="show"
            >
              {label}
            </motion.span>

            <motion.div
              className="flex flex-col md:flex-row justify-center gap-4 md:gap-24"
              variants={container}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              {subItems.map((subItem, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="flex flex-col items-center"
                >
                  <img
                    src={subItem.image}
                    alt={subItem.text}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover"
                  />
                  <p className="mt-2 text-center text-gray-600 poppins-regular text-xs md:text-sm">
                    {subItem.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CategoryLabel;
