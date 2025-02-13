"use client";
import React from 'react'
import Typical from 'react-typical'
import { useRouter } from 'next/navigation'
import ThreeDCardDemo from '@/components/3d-card-demo';
import { FaVuejs } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";
import { AiOutlineDotNet } from "react-icons/ai";
import { FaLaravel } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";
import { FaShopify } from "react-icons/fa";
import { SiWoocommerce } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import Marquee from "react-fast-marquee";

export default function page() {
  const router = useRouter();

  const handleContactUsClick = () => {
    router.push('/contact');
  }

  const Services = [
    {
      title: "Full Stack Development",
      description: "Build modern, scalable web applications with React.js",
      imageUrl: <FaReact className='text-sky-300 ' size={200}/>,
      buttonText: "Get Started",
    },
    {
      title: "Next.js Development",
      description: "Enhance performance with server-side rendering using Next.js",
      imageUrl: <SiNextdotjs className='text-sky-300' size={200}/>,
      buttonText: "Contact Us",
    },
    {
      title: "Vue.js Development",
      description: "Develop high-performance applications with Vue.js",
      imageUrl: <FaVuejs className='text-sky-300' size={200}/>,
      buttonText: "Get Started",
    }
  ];

  return (
    <div className='bg-blue-950'>
      <div className='grid grid-cols-1 md:grid-cols-2 justify-center h-fit'>
        <div className='col-span-1 pl-10 md:pl-20 pt-20 md:pt-60 text-amber-400'>
          <h1 className='font-bold text-4xl md:text-5xl'>01LABS</h1>
          <Typical
            steps={[
              'Zero Limits One Vision Infinite Possibilities', 2000
            ]}
            loop={Infinity}
            wrapper="p"
            className='mt-3 text-xl md:text-2xl'
          />
          <button 
            className='mt-10 md:mt-64 px-4 py-2 mb-6 rounded-xl bg-amber-400 hover:bg-blue-500 text-blue-950' 
            onClick={handleContactUsClick}
          >
            Contact Us
          </button>
        </div>
        <div className='col-span-1'>
          
        </div>
      </div>
      <div className='flex flex-col items-center h-1/2 bg-sky-100 pt-24 pb-48 '>
        <h1 className='text-4xl text-blue-950'>WHO WE ARE</h1> 
        <p className='mt-10 text-xl text-blue-950'>We don’t just develop software—we create intelligent, data-driven solutions that power businesses.</p>
        <p className='text-center text-xl text-blue-950'>At Zero1Lab, we harness the power of AI, intelligent automation, and cloud innovation to revolutionize<br/>
           efficiency, accelerate growth, and redefine what’s possible for your business</p>
      </div>
      
        <div className='flex flex-col justify-center items-center py-12'>
        <h1 className='text-4xl font-semibold text-amber-400'>Our Key Weapons</h1>
        <div className='py-8 w-full flex flex-wrap justify-center gap-8'>
          {Services.map((service, index) => (<ThreeDCardDemo key={index} {...service} />))}
        </div>
        <button onClick={() => router.push('/services')} className='bg-sky-200 text-blue-950 hover:text-white hover:bg-blue-950 hover:shadow-sm hover:shadow-sky-200 py-2 px-4 rounded-xl'>
          Explore Services
        </button>
      </div>
      <div>
        <div className='bg-sky-100 py-12'>
          From Zero to One—Why We Lead
        </div>
      </div>
      <div className='bg-sky-200'>
        <div className='text-blue-950 font-semibold text-xl sm:text-3xl flex justify-center pt-8 pb-12'>
          Technologies We Work With
        </div>
        <div>
          <Marquee className='text-blue-950 pb-5 gap-32' pauseOnHover gradient={false} speed={80}>
            <div className='flex flex-row gap-32'>
              <FaReact size={100}/>
              <SiNextdotjs size={100}/>
              <FaVuejs size={100}/>
              <FaAngular size={100}/>
              <SiDjango size={100}/>
              <SiFastapi size={100}/>
              <FaNodeJs size={100}/>
              <SiNestjs size={100}/>
              <AiOutlineDotNet size={100}/>
              <FaLaravel size={100}/>
              <FaAws size={100}/>
              <SiGooglecloud size={100}/>
              <FaShopify size={100}/>
              <SiWoocommerce size={100}/>
              <FaWordpress size={100}/>
            </div>
          </Marquee>
        </div>
      </div>  
    </div>
  )
}
