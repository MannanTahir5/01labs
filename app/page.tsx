"use client";
import React from 'react'
// import Typical from 'react-typical'
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
import { SiTensorflow } from "react-icons/si";
import { FaShoppingCart } from "react-icons/fa";
import Marquee from "react-fast-marquee";
// import MovableComponent from '@/components/moving';
import BinaryAnimation from '@/components/moving';


export default function Page() {
  const router = useRouter();

  const handleContactUsClick = () => {
    router.push('/contact');
  }

  const Services = [
    {
      title: "AI/ML Development",
      description: "Leverage the power of Artificial Intelligence and Machine Learning for automation and insights.",
      imageUrl: <SiTensorflow size={200} />, 
      buttonText: "Explore AI",
    },
    {
      title: "Full Stack Development",
      description: "Build modern, scalable web applications with React.js and Next.js.",
      imageUrl: <FaReact size={200} />,
      buttonText: "Get Started",
    },
    {
      title: "E-com & Digital Marketing",
      description: "Grow your online presence with e-commerce solutions and targeted digital marketing strategies.",
      imageUrl: <FaShoppingCart size={200} />,
      buttonText: "Boost Sales",
    }
  ];
  

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 justify-center h-fit'>
        <div className='col-span-1 pl-10 md:pl-20 pt-32 md:pt-60 text-secondary'>
          <h1 className='font-bold text-4xl md:text-5xl'>01LABS</h1>
          {/* <Typical
            steps={[
              'Zero Limits One Vision Infinite Possibilities', 2000
            ]}
            loop={Infinity}
            wrapper="p"
            className='mt-3 text-xl md:text-2xl'
          /> */}
          <button 
            className='mt-64 px-4 py-2 mb-6 rounded-xl bg-secondary hover:bg-primary hover:text-secondary hover:shadow-sm hover:shadow-secondary text-primary' 
            onClick={handleContactUsClick}
          >
            Contact Us
          </button>
        </div>
        <div className='col-span-1'>
          <BinaryAnimation/>
        </div>
      </div>
      <div className='flex flex-col items-center h-1/2 pt-24 pb-48 text-secondary'>
        <h1 className='text-4xl'>WHO WE ARE</h1> 
        <p className='mt-10 text-xl text-center p-4 sm:px-64'>We don’t just develop software—we create intelligent, data-driven solutions that power businesses.At Zero1Lab, we harness the power of AI, intelligent automation, and cloud innovation to revolutionize
          efficiency, accelerate growth, and redefine what’s possible for your business
        </p>
      </div>
      
        <div className='flex flex-col justify-center items-center py-12'>
        <h1 className='text-4xl font-semibold text-secondary'>Our Key Weapons</h1>
        <div className='px-4 py-8 w-full flex flex-wrap justify-center gap-8'>
          {Services.map((service, index) => (<ThreeDCardDemo key={index} {...service} />))}
        </div>
        <button onClick={() => router.push('/services')} className='bg-secondary text-primary hover:text-secondary hover:bg-primary hover:shadow-sm hover:shadow-secondary py-2 px-4 rounded-xl'>
          Explore Services
        </button>
      </div>
      <div>
        <div className='text-secondary py-12 pt-24 pb-48 flex flex-col justify-center items-center'>
          <p className='text-3xl sm:text-4xl text-center'>From Zero to One—Why We Lead</p>
          <p className='p-4 text-center mt-10 text-xl sm:px-64'>Discover how visionary leaders turn ideas into groundbreaking innovations and drive real change.
          Explore the principles of leadership and innovation that transform industries and shape the future.
          Learn how to go beyond competition, create unique value, and lead with impact</p>
        </div>
      </div>
      <div className='bg-secondary'>
        <div className='text-primary font-semibold text-xl sm:text-3xl flex justify-center pt-8 pb-12'>
          Technologies We Work With
        </div>
        <div>
          <Marquee className='text-primary pb-5 gap-32' pauseOnHover gradient={false} speed={80}>
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
