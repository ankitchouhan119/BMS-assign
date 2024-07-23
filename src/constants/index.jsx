
import { SocialIcon } from 'react-social-icons/component';
import 'react-social-icons/instagram';
import 'react-social-icons/facebook';
import 'react-social-icons/twitter';
import 'react-social-icons/linkedin';

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const aboutcontents = [
  
  {
    heading: "Our Vision",
    image: "vision.png",
    text: "To be the leading digital marketing company that delivers innovative and effective solutions to help our clients achieve their business goals and create sustainable value.",
    motionProps: {
      initial: { y: -200, opacity: 0 },
      whileInView: { y: 0, opacity: 1 },
      transition: {
        delay: 0.8,
        y: { type: "spring", stiffness: 60 },
        opacity: { duration: 1 },
        ease:"easeIn",
             duration:1,
      },
    },
  },
  {
    heading: "Our Mission",
    image: "mission.png",
    text: "Our mission is to empower businesses of all sizes to grow and succeed in the digital age by providing them with cutting-edge digital marketing solutions that increase their online presence, improve their customer engagement, and drive conversions and revenue.",
    motionProps: {
      initial: { y: 200, opacity: 0 },
      whileInView: { y: 0, opacity: 1 },
      transition: {
        delay: 0.8,
        y: { type: "spring", stiffness: 60 },
        opacity: { duration: 1 },
        ease:"easeIn",
             duration:1,
      },
    },
  },
  {
    heading: "Our Values",
    image: "values.png",
    text: "To pursue excellence through dedicated teamwork, integrity, and a commitment to our clients' success. We strive to create a positive and supportive work environment that fosters innovation, creativity, and professional growth for our employees.",
    motionProps: {
      initial: { y: -200, opacity: 0 },
      whileInView: { y: 0, opacity: 1 },
      transition: {
        delay: 0.8,
        y: { type: "spring", stiffness: 60 },
        opacity: { duration: 1 },
        ease:"easeIn",
             duration:1,
      },
    },
  },
];


export const contactuscontents = [
  
  {
    heading: "Locations",
    image: "location.png",
    text: "Plot No 28, 2nd Floor Above Vikhyath Eye & Retina Care Center, Ganeshpur Road, Near Military Hospital, Belagavi, Karnataka – 591108",
    motionProps: {
      initial: { x: -100, opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
      transition: {
        delay: 0.8,
        x: { type: "spring", stiffness: 60 },
        opacity: { duration: 1 },
        ease:"easeIn",
             duration:1,
      },
    },
  },
  {
    heading: "Email Us",
    image: "email.png",
    text: "contact@test.com",
    motionProps: {
      initial: { y: -200, opacity: 0 },
      whileInView: { y: 0, opacity: 1 },
      transition: {
        delay: 0.8,
        y: { type: "spring", stiffness: 60 },
        opacity: { duration: 1 },
        ease:"easeIn",
             duration:1,
      },
    },
  },
  {
    heading: "Phone No",
    image: "phone.png",
    text: "Mobile : +(91) 524 854 2461 \n Whatsapp: +(91) 784 000 1111",
    motionProps: {
      initial: { x: 200, opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
      transition: {
        delay: 0.8,
        x: { type: "spring", stiffness: 60 },
        opacity: { duration: 1 },
        ease:"easeIn",
             duration:1,
      },
    },
  },
];

export const services = [
 {
  icon: <img className="w-[40%] text-orange-700 " src="social.png" alt="Social Media Posts" />,
  text: "Social Media Posts",
  description: "Create compelling and eye-catching social media content with ease, utilizing intuitive design tools and pre-built templates to enhance your online presence.",
  url: '#social-media-post',
  motionProps: {
    initial: { x: -200, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: {
      delay: 0.8,
      x: { type: "spring", stiffness: 60 },
      opacity: { duration: 1 },
      ease:"easeIn",
           duration:1,
    },
  },
},
{
  icon: <img className="w-[40%] text-orange-700 " src="webdesign.png" alt="Website Designing" />,
  text: "Website Designing",
  description: "Craft visually stunning and highly functional websites with a suite of powerful design tools, ensuring your site looks great and performs seamlessly on all devices.",
  url: '#website-designing',
  motionProps: {
    initial: { x: 200, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: {
      delay: 0.8,
      x: { type: "spring", stiffness: 60 },
      opacity: { duration: 1 },
      ease:"easeIn",
           duration:1,
    },
  },
},
{
  icon: <img className="w-[40%] text-orange-700 " src="content.png" alt="Content Writing" />,
  text: "Content Writing",
  description: "Enhance your content creation process with advanced writing tools that help you produce engaging and well-structured text for various platforms and purposes.",
  url: '#content-writing',
  motionProps: {
    initial: { x: -200, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: {
      delay: 0.8,
      x: { type: "spring", stiffness: 60 },
      opacity: { duration: 1 },
      ease:"easeIn",
           duration:1,
    },
  },
},
{
  icon: <img className="w-[40%] text-orange-700 " src="ppc.png" alt="PPC" />,
  text: "PPC",
  description: "Optimize your pay-per-click campaigns with data-driven insights and user-friendly tools that help you maximize ROI and achieve your marketing goals.",
  url: '#ppc',
  motionProps: {
    initial: { x: 200, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: {
      delay: 0.8,
      x: { type: "spring", stiffness: 60 },
      opacity: { duration: 1 },
      ease:"easeIn",
           duration:1,
    },
  },
},
{
  icon: <img className="w-[40%] text-orange-700 " src="seo.png" alt="SEO" />,
  text: "SEO",
  description: "Boost your website's search engine rankings with comprehensive SEO tools designed to improve visibility, drive organic traffic, and increase online engagement.",
  url: '#seo',
  motionProps: {
    initial: { x: -200, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: {
      delay: 0.8,
      x: { type: "spring", stiffness: 60 },
      opacity: { duration: 1 },
      ease:"easeIn",
           duration:1,
    },
  },
},
];

export const checklistItems = [
  {
    title: "Engage Your Audience with Social Media",
    description:
      "Reach your target audience and drive engagement with our tailored social media strategies.",
  },
  {
    title: "Create Stunning Posts",
    description:
      "Captivate your audience with eye-catching and shareable posts that reflect your brand’s identity.",
  },
  {
    title: "Build an Impressive Website",
    description:
      "Design and develop a professional and user-friendly website that showcases your brand and drives conversions.",
  },
  {
    title: "Craft Compelling Content",
    description:
      "Attract and retain your audience with high-quality content that informs, engages, and converts.",
  },
  {
    title: "Maximize ROI with PPC",
    description:
      "Boost your visibility and drive targeted traffic with our expertly managed pay-per-click campaigns.",
  },
  {
    title: "Optimize for Search Engines",
    description:
      "Improve your website’s ranking and organic traffic with our effective SEO strategies.",
  },
];


export const servicesLinks = [
  { href: "#", text: "Content Writing" },
  { href: "#", text: "Website Development" },
  { href: "#", text: "Social Media Marketing" },
  { href: "#", text: "Pay Per Click" },
  { href: "#", text: "SEO Optimization" },
  { href: "#", text: "Privacy Policy" },
];

export const socialLinks = [
  { href: "#", icon: <SocialIcon url="https://www.instagram.com" className="text-4xl text-yellow-500 hero-video rounded-full hover:text-gray-500 p-1" /> },
  { href: "#", icon: <SocialIcon url="https://www.facebook.com" className="text-4xl text-yellow-500 hover:text-gray-500 hero-video rounded-full p-1" /> },
  { href: "#", icon: <SocialIcon url="https://www.twitter.com" className="text-4xl p-1 text-yellow-500 hover:text-gray-500 hero-video rounded-full" /> },
  { href: "#", icon: <SocialIcon url="https://www.linkedin.com" className="text-4xl p-1 text-yellow-500 hover:text-gray-500 hero-video rounded-full" /> },
];






