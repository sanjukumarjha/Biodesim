import React from 'react';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

const Loading: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-white z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-primary-500 mb-4"
      >
        <Leaf size={48} />
      </motion.div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 200 }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="h-1 bg-primary-500 rounded-full"
      />
      <p className="mt-4 text-gray-600 font-medium">Loading simulation...</p>
    </div>
  );
};

export default Loading;