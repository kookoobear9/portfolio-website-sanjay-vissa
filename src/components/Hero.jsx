import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[80px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#336BD2]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className='text-white'>Sanjay</span>
          </h1>
          <p className={`${styles.heroSubText} mt-4 text-white-100 leading-relaxed`}>
            An industrial engineer, product manager, consultant, self-taught developer, tech enthusiast, and artist.
          </p>
          <p className={`${styles.heroSubText} mt-6 text-white-100 leading-relaxed`}>
            I am an aspiring jack of all trades with a passion for learning. I value simplicity, efficiency and elegance, extending that mindset into the solutions I develop.
          </p>
          <p className={`${styles.heroSubText} mt-6 text-white-100 leading-relaxed`}>
            Let&apos;s work together to bring some great ideas to life!
          </p>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
