import Thumbnail from "./Thumbnail";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Results = ({ results }) => {
  const pageKey = Math.floor(Math.random() * 100);
  return (
    <AnimatePresence>
      <AnimateSharedLayout>
        <div className="px-5 my-10">
          <motion.div
            layout
            key={`pageKey_${pageKey.toString()}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
            className=" sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center"
          >
            {results.map((result) => (
              <Thumbnail key={result.id} result={result} />
            ))}
          </motion.div>
          <div className="mt-8 ml-4">
            <a
              href="https://www.themoviedb.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Data sourced from <br />
              <Image
                alt="The Movie Database"
                src="/images/tmdb.svg"
                width={200}
                height={28}
              />
            </a>
          </div>
        </div>
      </AnimateSharedLayout>
    </AnimatePresence>
  );
};

export default Results;
