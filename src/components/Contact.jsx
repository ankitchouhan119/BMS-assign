import { contactuscontents } from "../constants";
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Field, Label, Switch } from '@headlessui/react'
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


const Contact = () => {
  const [agreed, setAgreed] = useState(false)

  const navigate = useNavigate();
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;

    if (form.checkValidity()) {
      navigate("/thankyou");
    } else {
      form.reportValidity();
    }
  };

  return (
    <div className="mt-20 tracking-wide" id="contact">
      <div className="flex justify-center items-center">

        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Contact Us
        </span>
      </div>

      <motion.div
      initial={{ y: 100, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{
        delay: 0.2,
        y: {type:"spring", stiffness: 60},
        opacity: {duration:1},
        ease:"easeIn",
        duration:1,
      }}
       className="gap-10 mb-16 flex flex-col justify-center items-center">
        <h2 className="text-3xl text-center font-semibold items-center sm:text-5xl lg:text-4xl mt-10 lg:mt-20 tracking-wide">
          We Love Connecting With People And Exchanging Ideas!{" "}
          <span className="block bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Call Us Today!
          </span>
        </h2>

        <p className="text-sm w-[60%] leading-loose text-gray-300 text-center">
          Whether you are a small startup or a growing business, our customized digital marketing services can help fast-track your online visibility, increase brand awareness, and generate sales.
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center">
        {contactuscontents.map((contactuscontent, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <motion.div
            initial={contactuscontent.motionProps.initial}
            whileInView={contactuscontent.motionProps.whileInView}
            
            transition={contactuscontent.motionProps.transition}
             className="bg-neutral-900 rounded-md p-14 h-[100%] text-md border border-neutral-800 font-thin hero-video">
              <div className="flex mt-2 items-start">
                <img
                  className="w-14 h-14 mr-6 mb-9 "
                  src={contactuscontent.image}
                  alt=""
                />
              </div>
              <h1 className="text-2xl font-semibold mb-6">{contactuscontent.heading}</h1>
              <p className="leading-relaxed">{contactuscontent.text}</p>
            </motion.div>
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-between items-center lg:flex-row">
        <motion.div
        initial={{ x: -100, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{
          delay: 0.2,
          x: {type:"spring", stiffness: 60},
          opacity: {duration:1},
          ease:"easeIn",
          duration:1,
        }}
         id="contact-form" className="contact-form">
          <div className="isolate bg-transparent text-white px-6 py-24 sm:py-32 lg:px-8">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
            >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
              />
            </div>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Contact Form</h2>
            </div>
            <form
              ref={formRef}
              className="mx-auto mt-16 max-w-xl sm:mt-20"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      required
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-100 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      required
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="company" className="block text-sm font-semibold leading-6 text-white">
                    Subject
                  </label>
                  <div className="mt-2.5">
                    <input
                      required
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      required
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-white">
                    Phone number
                  </label>
                  <div className="relative mt-2.5">
                    <div className="absolute inset-y-0 left-0 flex items-center">
                      <label htmlFor="country" className="sr-only">
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 appearance-none focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm"
                      >
                        <option>IN</option>
                        <option>US</option>
                        <option>CA</option>
                        <option>EU</option>
                      </select>
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                      />
                    </div>
                    <input
                      required
                      id="phone-number"
                      name="phone-number"
                      type="tel"
                      autoComplete="tel"
                      className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
                    Message (Optional)
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                      defaultValue={''}
                    />
                  </div>
                </div>
                <Field className="flex gap-x-4 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <Switch
                      required
                      checked={agreed}
                      onChange={setAgreed}
                      className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 data-[checked]:bg-orange-500"
                    >
                      <span className="sr-only">Agree to policies</span>
                      <span
                        aria-hidden="true"
                        className="h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-orange-500 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                      />
                    </Switch>
                  </div>
                  <Label className="text-sm leading-6 text-gray-300">
                    By selecting this, you agree to our{' '}
                    <a href="#" className="font-semibold text-orange-500">
                      privacy&nbsp;policy
                    </a>
                    .
                  </Label>
                </Field>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="block w-full bg-gradient-to-r hero-video from-orange-500 to-orange-800 rounded-md  px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                >
                  Let's talk
                </button>
              </div>
            </form>
          </div>
        </motion.div>


        <motion.div 
        initial={{ x: 100, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{
          delay: 0.6,
          x: {type:"spring", stiffness: 60},
          opacity: {duration:1},
          ease:"easeIn",
          duration:1,
        }}
        className="map isolate bg-transparent text-white px-6 py-28 sm:py-32 lg:px-8">


          <iframe className="w-[300px] h-[200px] md:h-[500px] lg:h-[500px] lg:w-[40vw] md:w-[60vw]" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=2nd%20Floor,%20Plot%20No%2028,%20Ganeshpur%20Rd,%20above%20Pilot%20Coaching,%20near%20Military%20Hospital,%20Vinayak%20Nagar,%20Belagavi,%20Karnataka%20591108+(Brains%20Media%20Solutions%20Pvt%20Ltd)&t=&z=14&ie=UTF8&iwloc=B&output=embed">&lt;a href="https://www.gps.ie/"&gt;gps vehicle tracker&lt;/a&gt;</iframe>


        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
