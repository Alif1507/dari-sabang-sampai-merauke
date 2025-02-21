import { AnimatePresence } from "motion/react";
import { useState } from "react";
import { motion } from "motion/react";
import { easeInOut } from "motion";

function Map() {
  const [buka, setBuka] = useState(false);
  const [buka1, setBuka1] = useState(false);
  const [buka2, setBuka2] = useState(false);

  const clickHadler = () => {
    setBuka(!buka);
    console.log(buka);
  };

  const clickHadler1 = () => {
    setBuka1(!buka1);
  };

  const clickHadler2 = () => {
    setBuka2(!buka2);
  };

  return (
    <>
      <AnimatePresence initial={false}>
        {buka ? (
          <motion.div
            initial={{ scale: 1, opacity: 1 }}
            animate={{ height: 300, width: 300, translateX: 0 }}
            transition={{
              duration: 850,
              type: "spring",
              visualDuration: 0.2,
              bounce: 0.2,
              stiffness: 540,
              default: { type: "spring" },
              opacity: { ease: "linear" },
            }}
            onClick={clickHadler}
            className={`rounded-full  bg-black cursor-pointer`}
          />
        ) : (
          <motion.div
            initial={{ scale: 1, opacity: 1 }}
            animate={{ height: 300, width: 300, scale:2, translateX: 500 }}
            transition={{
              duration: 850,
              type: "spring",
              visualDuration: 0.2,
              bounce: 0.2,
              stiffness: 540,
              default: { type: "spring" },
              opacity: { ease: "linear" },
            }}
            onClick={clickHadler}
            className={`rounded-full  bg-black cursor-pointer`}
          />
        )}

{buka1 ? (
          <motion.div
            initial={{ scale: 1, opacity: 1 }}
            animate={{ height: 300, width: 300, translateX: 0 }}
            transition={{
              duration: 850,
              type: "spring",
              visualDuration: 0.2,
              bounce: 0.2,
              stiffness: 540,
              default: { type: "spring" },
              opacity: { ease: "linear" },
            }}
            onClick={clickHadler1}
            className={`rounded-full  bg-black cursor-pointer`}
          />
        ) : (
          <motion.div
            initial={{ scale: 1, opacity: 1 }}
            animate={{ height: 300, width: 300, scale:2, translateX: 500 }}
            transition={{
              duration: 850,
              type: "spring",
              visualDuration: 0.2,
              bounce: 0.2,
              stiffness: 540,
              default: { type: "spring" },
              opacity: { ease: "linear" },
            }}
            onClick={clickHadler1}
            className={`rounded-full bg-blue-800 cursor-pointer justify-self-end`}
          />
        )}
        {buka2 ? (
          <motion.div
            initial={{ scale: 1, opacity: 1 }}
            animate={{ height: 300, width: 300, translateX: 0 }}
            transition={{
              duration: 850,
              type: "spring",
              visualDuration: 0.2,
              bounce: 0.2,
              stiffness: 540,
              default: { type: "spring" },
              opacity: { ease: "linear" },
            }}
            onClick={clickHadler2}
            className={`rounded-full  bg-slate-700 cursor-pointer justify-self-center`}
          />
        ) : (
          <motion.div
            initial={{ scale: 1, opacity: 1 }}
            animate={{ height: 300, width: 300, scale:2, translateX: 500 }}
            transition={{
              duration: 850,
              type: "spring",
              visualDuration: 0.2,
              bounce: 0.2,
              stiffness: 540,
              default: { type: "spring" },
              opacity: { ease: "linear" },
            }}
            onClick={clickHadler2}
            className={`rounded-full  bg-black cursor-pointer`}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default Map;
