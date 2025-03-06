"use client";
import React from 'react'
import Typical from 'react-typical'
import { useRouter } from 'next/navigation'
import ThreeCard from '@/components/CardDemni';
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
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import { Lora } from 'next/font/google';
 



export default function Page() {
  const router = useRouter();

  const handleContactUsClick = () => {
    router.push('/contact');
  }

  const avatars = [
    { id: 1, src: "/male.svg", alt: "Male Avatar 1", name: "Ahsan Naveed",role:"CEO" },
    { id: 2, src: "/male.svg", alt: "Female Avatar 1",name: "Ahsan Naveed",role:"CEO"  },
    { id: 3, src: "/male.svg", alt: "Male Avatar 2",name: "Ahsan Naveed",role:"CEO"  },
    { id: 4, src: "/male.svg", alt: "Female Avatar 2",name: "Ahsan Naveed",role:"CEO"  },
    { id: 5, src: "/male.svg", alt: "Male Avatar 3",name: "Ahsan Naveed",role:"CEO"  },
  ];

  const Services = [
    {
      id: "ml",
      title: "AI/ML Development",
      description: "Leverage the power of Artificial Intelligence and Machine Learning for automation and insights.",
      imageUrl: <SiTensorflow size={100} />,
      buttonText: "Explore AI",
    },
    {
      id: "fsd",
      title: "Full Stack Development",
      description: "Build modern, scalable web applications with React.js and Next.js.",
      imageUrl: <FaReact size={100} />,
      buttonText: "Get Started",
    },
    {
      id: "ecom",
      title: "E-com & Digital Marketing",
      description: "Grow your online presence with e-commerce solutions and targeted digital marketing strategies.",
      imageUrl: <FaShoppingCart size={100} />,
      buttonText: "Boost Sales",
    }
  ];


  return (
    <div>
        <BinaryAnimation >
      <div className='grid grid-cols-1 md:grid-cols-2 justify-center h-fit '>
        <div className='col-span-1 pl-10 md:pl-20 pt-32 md:pt-60 text-secondary'>
          <h1 className='font-serif font-normal text-4xl md:text-5xl'>01LABS</h1>
          <div

            className='mt-3 h-10 text-xl md:text-2xl'
          >
            <TypeAnimation
              sequence={[
                'Zero Limits One Vision Infinite Possibilities', 2000, "", 1000,// Types 'Three' without deleting 'Two'
                () => {
                  console.log('Sequence completed');
                },
              ]}
              wrapper="p"
              cursor={false}
              repeat={Infinity}
              // style={{ fontSize: '2em', display: 'inline-block' }}
            />
          </div>
          <button
            className='mt-64 px-4 py-2 mb-6 rounded-xl bg-secondary hover:bg-primary hover:text-secondary hover:shadow-sm hover:shadow-secondary text-primary'
            onClick={handleContactUsClick}
          >
            Contact Us
          </button>
        </div>
        <div className='col-span-1'>

        </div>
      </div>
        </BinaryAnimation>
      <div className='flex flex-col items-center h-fit py-16 text-primary bg-sky-100'>
        <h1 className='text-4xl mb-16'>WHO WE ARE</h1>
        {/* <p className='mt-10 text-xl text-center p-4 sm:px-64'>We don’t just develop software—we create intelligent, data-driven solutions that power businesses.At Zero1Lab, we harness the power of AI, intelligent automation, and cloud innovation to revolutionize
          efficiency, accelerate growth, and redefine what’s possible for your business
        </p> */}
         <div className="grid grid-cols-2 sm:grid-cols-3 justify-center items-center w-screen px-64 gap-6 text-center">
            {avatars.map((avatar) => (
              <div key={avatar.id} className="flex items-end space-2">
                <div className="w-32">
                  <Image
                    src={avatar.src}
                    alt={avatar.alt}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="pl-2 text-left">
                  <p className="font-semibold text-lg">{avatar.name}</p>
                  <p className="text-gray-700">{avatar.role}</p>
                </div>
              </div>
            ))}
          </div>
      </div>

      <div className='flex flex-col justify-center items-center py-12 bg-primary'>
        <h1 className='text-4xl font-semibold text-secondary'>Our Key Weapons</h1>
        <div className='px-4 py-8 w-full flex flex-wrap justify-center gap-8'>
          {Services.map((service, index) => (<ThreeCard key={index} {...service} />))}
        </div>
        <button onClick={() => router.push('/services')} className='bg-secondary text-primary hover:text-secondary hover:bg-primary hover:shadow-sm hover:shadow-secondary py-2 px-4 rounded-xl'>
          Explore Services
        </button>
      </div>
      <div className='bg-primary'>
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
              <FaReact size={100} />
              <SiNextdotjs size={100} />
              <FaVuejs size={100} />
              <FaAngular size={100} />
              <SiDjango size={100} />
              <SiFastapi size={100} />
              <FaNodeJs size={100} />
              <SiNestjs size={100} />
              <AiOutlineDotNet size={100} />
              <FaLaravel size={100} />
              <FaAws size={100} />
              <SiGooglecloud size={100} />
              <FaShopify size={100} />
              <SiWoocommerce size={100} />
              <FaWordpress size={100} />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  )
}
