import { servicesLinks, socialLinks } from "../constants";
import {FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 px-10 flex justify-center items-center border-neutral-700">
      <div className="grid grid-cols-2 justify-center lg:grid-cols-3 gap-10">
        <div className="p-4">
          <h3 id="contact" className="text-2xl text-yellow-500 font-semibold mb-4">Contact</h3>
          <p className="mb-3 ">
          Plot No 28, 2nd Floor Above Vikhyath Eye & Retina Care Center, Ganeshpur Road, Near Military Hospital, Belagavi, Karnataka – 591108 
          </p>
          <a href="tel:+915248542461" className="text-yellow-500 block mb-2">
        <FaPhone className="text-xl inline-block text-yellow-500 mr-3" />
        +91 5248542461
      </a>
      <a href="mailto:contact@test.com" className="text-yellow-500">
        <FaEnvelope className="inline-block text-xl text-yellow-500 mr-3" />
        contact@test.com
      </a>
        </div>
        <div className="p-4">
          <h3 className="text-md text-yellow-500 font-semibold mb-4 text-2xl">Services</h3>
          <ul className="space-y-2">
            {servicesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300  hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4">
          <h3 className="text-md font-semibold text-yellow-500 mb-4 text-2xl">Social Media</h3>
          <ul className="space-y-2 flex gap-6   justify-start items-center">
            {socialLinks.map((link, index) => (
              <li key={index} className="  ">
                <a
                  href={link.href}
                  className="text-neutral-300 mb-5 hover:text-white"
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
