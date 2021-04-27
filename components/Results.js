import Thumbnail from "./Thumbnail";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

const Results = ({ results }) => {
  return (
    <AnimatePresence>
      <AnimateSharedLayout>
        <motion.div
          layout
          key={results[0].id}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ stiffness: 100 }}
          className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center"
        >
          {results.map((result) => (
            <Thumbnail key={result.id} result={result} />
          ))}
        </motion.div>
      </AnimateSharedLayout>
    </AnimatePresence>
  );
};

export default Results;
