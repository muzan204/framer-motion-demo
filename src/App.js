import { motion } from 'framer-motion';
import './styles.css';
import { useState } from 'react';

export default function App() {

  const [move, setMove] = useState(false);

  return (
    <div className="container">

      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Framer Motion 🚀
      </motion.h1>

      {/* BOLINHA */}
      <motion.div
        className="box"

        animate={{
          x: move ? 300 : 0,
          rotate: 360,
          scale: [1, 1.2, 1],
          borderRadius: '50%'
        }}

        transition={{
          duration: 1,
          type: 'spring'
        }}
      />

      {/* BOTÃO */}
      <motion.button
        className="btn"

        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}

        onClick={() => setMove(!move)}
      >
        Clique Aqui
      </motion.button>

    </div>
  );
}