// import React from 'react'

// const Works = () => {
//   return (
//     <div>Works</div>
//   )
// }

// export default Works



import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl w-[320px] sm:w-[320px] flex-shrink-0'
      >
        <div className='relative w-full h-[180px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-4 h-32 flex flex-col justify-between'>
          <div>
            <h3 className='text-white font-bold text-[20px] text-center line-clamp-2'>{name}</h3>
            <p className='mt-2 text-secondary text-[12px] text-center line-clamp-3'>{description}</p>
          </div>
          <div className='flex flex-wrap gap-1 justify-center'>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[12px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>


      <div className='mt-12 overflow-x-auto overflow-y-hidden scrollbar-hide'>
        <div className='flex gap-7 pb-6' style={{ width: 'max-content', scrollBehavior: 'smooth' }}>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");