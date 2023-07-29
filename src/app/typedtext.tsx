"use client"
import React, { useEffect } from 'react';
import Typed from 'typed.js';

const TypedText: React.FC = () => {
  useEffect(() => {
    const typed = document.querySelector('.typed');
    console.log('Hello')
    if (typed) {
      let typed_strings = typed.getAttribute('data-typed-items');
      let typed_strings1 = typed_strings?.split(',') || []; // Ensure it's an array

      new Typed('.typed', {
        strings: typed_strings1,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
      });
    }
  }, []);

  return <span className="typed" data-typed-items="Full-Stack Development, Object-Oriented Programming, Cloud-based Microservices, Data Engineering, Web Development, API Development" />;
}

export default TypedText