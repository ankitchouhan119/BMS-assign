import { aboutcontents } from "../constants";
import {motion} from 'framer-motion'

const About = () => {
  return (
    <div className="mt-20 tracking-wide" id="about">
      <div className="flex justify-center items-center">

      <motion.span 
       initial={{ y: -100, opacity:0}}
       whileInView={{y:0, opacity:1}}
       transition={{
         delay: 0.2,
         y: {type:"spring", stiffness: 60},
         opacity: {duration:1},
         ease:"easeIn",
         duration:1,
       }}
      className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
        About Us
        </motion.span>
      </div>
      <div className="gap-10 mb-16 flex flex-col">
      <motion.h2 
       initial={{ x: -100, opacity:0}}
       whileInView={{x:0, opacity:1}}
       transition={{
         delay: 0.2,
         x: {type:"spring", stiffness: 60},
         opacity: {duration:1},
         ease:"easeIn",
         duration:1,
       }}
       className="text-3xl font-semibold items-center sm:text-5xl lg:text-4xl mt-10 lg:mt-20 tracking-wide">
      No.1 Digital Marketing and Social Media Agency{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          in Belgaum
          </span>
        </motion.h2>
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
         className="text-xl leading-loose">Brains Media Solutions Pvt. Ltd is a full-service Digital Marketing Agency based in Belgaum, Karnataka, India. Our journey began in 2008, and since then, we have evolved and adapted to the dynamic landscape of the digital marketing industry.</motion.p>
        <motion.p  
         initial={{ x: -100, opacity:0}}
         whileInView={{x:0, opacity:1}}
         transition={{
           delay: 0.2,
           x: {type:"spring", stiffness: 60},
           opacity: {duration:1},
           ease:"easeIn",
           duration:1,
         }}
         className="text-xl leading-loose">
        But in 2015, we took a major step and fully transformed into a specialized digital marketing company. Today, we cater to the diverse needs of businesses in Belgaum, Hubli, Dharwad, Maharashtra, Pune, Chennai and PAN India. 
        </motion.p>
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
         className="text-xl leading-loose">
        As a full-service digital marketing company, we offer various services to help businesses thrive online. Our affordable digital marketing services are curated to capture new leads and convert them into profitable customers. Our digital marketing services list include: 
        </motion.p>
        <motion.ul  
         initial={{ x: -100, opacity:0}}
         whileInView={{x:0, opacity:1}}
         transition={{
           delay: 0.2,
           x: {type:"spring", stiffness: 60},
           opacity: {duration:1},
           ease:"easeIn",
           duration:1,
         }}
         className="text-xl  list-disc pl-5 flex flex-col gap-5">
          <li>
           Content marketing
          </li>
          <li>
          Content marketing
          </li>
          <li>
          Content marketing
          </li>
          <li>
          Content marketing
          </li>
          <li>
          Content marketing
          </li>
        </motion.ul>

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
           className="text-xl leading-loose">
        Whether you are a small local business or a large enterprise, we are here to be your trusted partner in increasing your digital presence and taking your online success to new heights. 
        </motion.p>
        <motion.p
         initial={{ x: -100, opacity:0}}
         whileInView={{x:0, opacity:1}}
         transition={{
           delay: 0.2,
           x: {type:"spring", stiffness: 60},
           opacity: {duration:1},
           ease:"easeIn",
           duration:1,
         }}
           className="text-xl leading-loose">
        Contact us today, and let’s embark on a journey towards digital excellence! 
        </motion.p>
      </div>




      <div className="flex flex-wrap justify-center">
        {aboutcontents.map((aboutcontent, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <motion.div 
            initial={aboutcontent.motionProps.initial}
            whileInView={aboutcontent.motionProps.whileInView}
            
            transition={aboutcontent.motionProps.transition}className="bg-neutral-900 rounded-md p-14 h-[100%] text-md border border-neutral-800 font-thin hero-video">
              <div className="flex mt-2 items-start">
                <img
                  className="w-14 h-14 mr-6 mb-9 "
                  src={aboutcontent.image}
                  alt=""
                />
              </div>
              <h1 className="text-2xl font-semibold mb-6">{aboutcontent.heading}</h1>
              <p>{aboutcontent.text}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
