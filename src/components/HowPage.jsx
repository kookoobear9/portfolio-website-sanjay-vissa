import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { userFirst } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='icon'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[24px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const HowPage = () => {
  return (
    <>
      <motion.div >
        <p className={styles.sectionSubText}> Improving the life of the user</p>
        <h2 className={styles.sectionHeadText}>A User-First Approach</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify'
      > </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {userFirst.map((user, index) => (
          <ServiceCard key={user.title} index={index} {...user} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(HowPage, "howPage");