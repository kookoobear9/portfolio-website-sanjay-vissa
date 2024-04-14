import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#336BD2]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-white'>Sanjay</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            An industrial engineer, product manager,  <br className='sm:block hidden' />
            self-taught developer, UI/UX designer,  <br className='sm:block hidden' />
            tech enthusiast, and artist <br className='sm:block hidden' /> <br className='sm:block hidden' />
            I am an aspiring jack of all trades with a passion for learning. <br className='sm:block hidden' />
            I believe in making life simple, efficient and stress-free, <br className='sm:block hidden' />
            and extend that mindset into the solutions I develop. <br className='sm:block hidden' /> <br className='sm:block hidden' />
            Let's work together to bring some kickass ideas to life!
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