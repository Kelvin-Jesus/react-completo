import React from 'react';
import { motion } from 'framer-motion';

const MotionComp = () => {
    return (
        <motion.div
        animate={{ scale: 2 }}
        transition={{ duration: 1 }}
        style={{ background: '#000',width:'20px',height:'20px' }}
      />
    );
}

export default MotionComp;
