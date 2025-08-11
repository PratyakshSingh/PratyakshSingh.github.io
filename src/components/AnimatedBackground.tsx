import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -inset-[100%] opacity-50 dark:opacity-20"
        style={{
          background: 
            'radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.1), transparent 60%), ' +
            'radial-gradient(circle at 90% 20%, rgba(168, 85, 247, 0.1), transparent 40%), ' +
            'radial-gradient(circle at 10% 80%, rgba(59, 130, 246, 0.1), transparent 50%)',
        }}
        animate={{
          backgroundPosition: [
            '0% 0%',
            '50% 50%',
            '100% 100%',
            '50% 50%',
            '0% 0%'
          ],
        }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;