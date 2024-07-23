import { services } from "../constants";
import {motion} from 'framer-motion'

const Services = () => {
  return (
    <div
    id="services" className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center items-center justify-center flex flex-col">
        <motion.span 
         className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
        Our Services
        </motion.span>
        <motion.h2
         initial={{ y: 200, opacity:0}}
         whileInView={{y:0, opacity:1}}
         
         transition={{
           delay: 0.4,
           y: {type:"spring", stiffness: 60},
           opacity: {duration:1},
           ease:"easeIn",
           duration:1,
         }} className="text-3xl text-center items-center sm:text-5xl lg:text-5xl mt-10 lg:mt-20 tracking-wide">
        Digital Marketing Services{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          Under One Roof
          </span>
        </motion.h2>
      </div>
      <div
      
       className="flex  flex-cols-3  flex-wrap mt-10 lg:mt-20 gap-14 justify-center items-center w-full mb-10 ">
        {services.map((service, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 ">
            <motion.div
            initial={service.motionProps.initial}
            whileInView={service.motionProps.whileInView}
            
            transition={service.motionProps.transition}
            href={service.url}   className="flex digital-services cursor-pointer border rounded-lg border-2 border-neutral-500 p-3 ">
              <div className="flex mx-5 bg-neutral-500 w-[70%] h-full p-2 text-orange-700 justify-center items-center rounded-full">
                
                {service.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{service.text}</h5>
                <p className="text-md p-2  text-neutral-500">
                  {service.description}
                </p>
                <a
                href={service.url}
                className="inline-flex justify-center items-center text-center w-[70%] h-12 p-5 mt-5 mb-5 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
              >
                Learn More
              </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
