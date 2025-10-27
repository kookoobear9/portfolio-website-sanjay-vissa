import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-8 xl:gap-12`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.85] bg-black-100 p-6 sm:p-8 rounded-2xl shadow-xl border border-secondary/10'
      >
        <div className="text-center mb-6">
          <h4 className={`${styles.sectionHeadText} bg-gradient-to-r from-[#336BD2] to-[#915EFF] bg-clip-text text-transparent`}>Let&apos;s talk!</h4>
          <p className="text-secondary mt-2 text-lg">Ready to bring your ideas to life?</p>
        </div>

        <div className="text-center mb-8 px-2 space-y-2">
          <p className="text-white-100 text-base leading-relaxed">
            Have a bold idea that needs to be brought to life?
          </p>
          <p className="text-white-100 text-base leading-relaxed">
            Looking for a creative partner to tackle complex challenges?
          </p>
          <p className="text-white-100 text-base leading-relaxed">
            Let&apos;s connect and discover how we can work together.
          </p>
          <p className="text-white-100 text-base leading-relaxed mt-4">
            <span className="text-[#336BD2] font-medium">Together</span>, we can create something impactful.Let&apos;s collaborate and create something amazing.
          </p>
        </div>
       
        <div className="mt-6 flex justify-center">
          <div className="bg-tertiary rounded-xl p-4 border border-secondary/20 w-fit">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#336BD2]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <a href="mailto:sanjayvissa0@outlook.com" className="text-secondary hover:text-white transition-colors duration-300 whitespace-nowrap">
                  sanjayvissa0@outlook.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#336BD2]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v16.542C0 19.227.792 20 1.771 20h20.451C23.2 20 24 19.227 24 18.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <a href="https://www.linkedin.com/in/sanjayvissa" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors duration-300 whitespace-nowrap">
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#336BD2]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"></path>
                </svg>
                <a href="https://github.com/kookoobear9" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors duration-300 whitespace-nowrap">
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="john_doe@mail.com"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={1}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Enter your message here'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form> */}
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-[0.6] xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");