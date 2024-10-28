import React from "react";
import "./Intro.css"; // Ensure to import your CSS file
import { Link } from 'react-router-dom';


const Intro = () => {
  return (
    <div className="text-black py-12 px-6">
      {/* Main container */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left side - single image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="rounded-full p-4">
            <img
              src="assets/images/banner/reading.jpg"
              alt="Child reading Quran"
              className="w-96 h-96 rounded-full object-cover"
            />
          </div>
        </div>

        {/* Right side - text content */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-12">
          <h2 className="text-4xl font-bold text-black">
            Narrated <span className="text-red-500">Abu Hurairah</span> that Messenger of Allah{" "}
            <span className="text-red-500">(ﷺ)</span><span> said</span>
          </h2>
          <p className="text-gray-900 mt-4">
            "Whoever takes a path upon which to obtain knowledge, Allah makes the path to Paradise easy for him."
          </p>

          <p className="mt-1 font-semibold text-black">
            <span className="text-red-500">- Jami` at-Tirmidhi 2646</span>
          </p>

          <p>
            At Bayyinah Academy, we offer high-quality online Quran and Arabic language education course to learners of all ages. Our qualified and experienced tutors are committed to helping you achieve fluency and a deep understanding of both the Quran and the Arabic language. With the guidance of our dedicated native tutor, you'll unlock the beauty of the Quran while mastering Arabic. Join us on this journey of spiritual and linguistic growth!
          </p> <br />
          <div className="btn-container">
               <Link to="#" className="btn btn-main rounded">Start Your Path</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
