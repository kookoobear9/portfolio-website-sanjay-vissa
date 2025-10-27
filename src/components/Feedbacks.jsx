// import React from 'react'

// const Feedbacks = () => {
//   return (
//     <div>Feedbacks</div>
//   )
// }

// export default Feedbacks



import { useRef } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl w-[360px] flex-shrink-0'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7'>
        <p className='text-white font-medium text-[16px]'>
          <span className='blue-text-gradient'>@</span> {name}
        </p>
        <p className='mt-1 text-secondary text-[12px]'>
          {designation} of {company}
        </p>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 380;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <div className='flex justify-between items-center'>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials</h2>
        </motion.div>

        <div className='flex gap-2'>
          <button
            onClick={() => scroll('left')}
            className='bg-tertiary hover:bg-[#1a1a2e] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transition-colors'
            aria-label='Scroll left'
          >
            <span className='text-white text-xl'>‹</span>
          </button>
          <button
            onClick={() => scroll('right')}
            className='bg-tertiary hover:bg-[#1a1a2e] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transition-colors'
            aria-label='Scroll right'
          >
            <span className='text-white text-xl'>›</span>
          </button>
        </div>
      </div>

      <div ref={scrollContainerRef} className='mt-12 overflow-x-auto overflow-y-hidden scrollbar-hide'>
        <div className='flex gap-7 pb-6' style={{ width: 'max-content', scrollBehavior: 'smooth' }}>
          {testimonials.map((testimonial, index) => (
            <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Feedbacks, "");