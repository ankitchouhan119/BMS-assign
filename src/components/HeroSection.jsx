import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import Carousels from "./Carousels";
import {motion} from 'framer-motion'


const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <div
        
       className="flex flex-col items-center ">

        <motion.h1
         initial={{ x: -100, opacity:0}}
         whileInView={{x:0, opacity:1}}
         transition={{
           delay: 0.2,
           x: {type:"spring", stiffness: 60},
           opacity: {duration:1},
           ease:"easeIn",
           duration:1,
         }}
        className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
          Get your business online
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            {" "}
            in less than 24 hours
          </span>
        </motion.h1>
        <motion.p 
        initial={{ x: 100, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{
          delay: 0.2,
          x: {type:"spring", stiffness: 60},
          opacity: {duration:1},
          ease:"easeIn",
          duration:1,
        }}
         className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
          If your business is not on Social Media, then you are out of the competition.
        </motion.p>
        <motion.div
        initial={{ x: 100, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{
          delay: 0.4,
          x: {type:"spring", stiffness: 60},
          opacity: {duration:1},
          ease:"easeIn",
          duration:1,
        }}
         className="flex justify-center my-10">
          <a
            href="#contact-form"
            className="bg-gradient-to-r hero-video from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
          >
            Get Started Now!
          </a>
        </motion.div>

      </div>
      <motion.div
      
      initial={{ y: -200, opacity:0}}
         whileInView={{y:0, opacity:1}}
         transition={{
           delay: 0.4,
           y: {type:"spring", stiffness: 60},
           opacity: {duration:1},
           ease:"easeIn",
           duration:1,
         }}
      >
        <Carousels />
      </motion.div>
      <div className="flex mt-10 justify-center ">
        <motion.video
          initial={{ x: -200, opacity:0}}
          whileInView={{x:0, opacity:1}}
          transition={{
            delay: 0.4,
            x: {type:"spring", stiffness: 60},
            opacity: {duration:1},
            ease:"easeIn",
            duration:1,
          }}
          autoPlay
          loop
          muted
          className="rounded-lg hero-video w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
        <motion.video
         initial={{ x: 200, opacity:0}}
         whileInView={{x:0, opacity:1}}
         transition={{
           delay: 0.4,
           x: {type:"spring", stiffness: 60},
           opacity: {duration:1},
           ease:"easeIn",
           duration:1,
         }}
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 hero-video border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
      </div>
    </div>
  );
};

export default HeroSection;
