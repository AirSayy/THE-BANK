import React from "react";
import { Link } from "react-router-dom";
import DoctorGif from "../assets/icons/doctor.gif";

function Hero() {
  return (
    <div className="">
      

    <section class="  w-[50%] m-auto mt-[12%] shadow-2xl bg-center bg-no-repeat bg-[url('https://www.herzing.edu/sites/default/files/styles/fp_640_288/public/images/blog/students_study_1.jpg.webp?itok=riENGJSB')] bg-gray-400 rounded-3xl bg-blend-multiply">
        <div class="  px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">THE BANK</h1>
            <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Prepare for your technical interviews with quizzes.</p>
            <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                {/* <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    Get started
                    <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a> */}
                <a href="/register" class="w-[20%] m-auto shadow-2xl inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border bg-black border-gray hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                    Get Started
                </a>  
            </div>
        </div>
    </section>
    
          
        </div>
  )
}

export default Hero;