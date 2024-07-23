import React from 'react';
import Carousel from '../constants/carousel.component.jsx';

function Carousels() {
  let slides = [
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fHww",
    "https://woz-u.com/wp-content/uploads/2022/06/Evolution-of-Coding-scaled.jpg",
    "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fHww",
    "https://codeop.tech/wp-content/uploads/2024/05/What-is-Coding.jpg"
  ];
  
  return (
    <div className="w-[80%] m-auto pt-11">
      <Carousel slides={slides} />
    </div>
  );
}

export default Carousels;
