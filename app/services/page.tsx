"use client";
import React from 'react'
import ThreeDCardDemo from '@/components/3d-card-demo'
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";
import { FaShopify } from "react-icons/fa";
import { SiWoocommerce } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { FaBrain, FaCommentDots, FaMicrophoneAlt, FaPen, FaSearch, FaFileAlt } from 'react-icons/fa';
import 'animate.css';
import { useInView } from 'react-intersection-observer';

export default function Page() {
  const Frontendservices = [
    {
      title: "React.js Development",
      description: "Build modern, scalable web applications with React.js",
      imageUrl: <FaReact size={200}/>,
      buttonText: "Get Started",
    },
    {
      title: "Next.js Development",
      description: "Enhance performance with server-side rendering using Next.js",
      imageUrl: <SiNextdotjs   size={200}/>,
      buttonText: "Contact Us",
    }
  ];
  const Backendservices = [
    {
      title: "Python Django Development",
      description: "Create secure and scalable web applications using Django.",
      imageUrl: <SiDjango size={200}/>,
      buttonText: "Get Started",
    },
    {
      title: "Python FastAPI Development",
      description: "Develop high-performance APIs with FastAPI.",
      imageUrl: <SiFastapi size={200}/>,
      buttonText: "Contact Us",
    },
    {
      title: "Node.js Development",
      description: "Build real-time and scalable backend solutions with Node.js.",
      imageUrl: <FaNodeJs size={200}/>,
      buttonText: "Get Started",
    }
  ];
  const DevOps = [
    {
      title: "AWS Cloud Services",
      description: "Scalable cloud computing solutions with AWS.",
      imageUrl: <FaAws size={200}/>,
      buttonText: "Get Started",
    },
    {
      title: "GCP Cloud Services",
      description: "Cloud solutions with Google Cloud Platform.",
      imageUrl: <SiGooglecloud size={200}/>,
      buttonText: "Contact Us",
    }
  ];
  const Ecom = [
    {
      title: "Shopify Development",
      description: "Launch and manage your online store with Shopify.",
      imageUrl: <FaShopify size={200}/>,
      buttonText: "Get Started",
    },
    {
      title: "WordPress Development",
      description: "Create dynamic and engaging websites using WordPress.",
      imageUrl: <FaWordpress size={200}/>,
      buttonText: "Get Started",
    },
    {
      title: "WooCommerce Development",
      description: "Build powerful eCommerce stores with WooCommerce.",
      imageUrl: <SiWoocommerce   size={200}/>,
      buttonText: "Contact Us",
    },
    {
      title: "Social Media Marketing",
      description: "Boost your brand presence with strategic social media marketing.",
      imageUrl: "",
      buttonText: "Get Started",
    },
    {
      title: "Social Media Campaigns",
      description: "Engage audiences with targeted campaigns on Facebook, Instagram, and TikTok.",
      imageUrl: "https://source.unsplash.com/600x400/?facebook,instagram,tiktok",
      buttonText: "Contact Us",
    },
    {
      title: "Google Ad Campaigns",
      description: "Drive traffic and increase conversions with Google Ads.",
      imageUrl: "https://source.unsplash.com/600x400/?google,ads,marketing",
      buttonText: "Get Started",
    }
  ];
  const aiMlServices = [
    {
      title: "NLP Services for Text Analysis",
      description: "Leverage NLP techniques to extract meaningful insights from large volumes of text data.",
      imageUrl: <FaBrain size={180} />,
      buttonText: "Get Started",
    },
    {
      title: "NLP Services for Conversational AI",
      description: "Build intelligent chatbots and virtual assistants to engage users in natural conversations.",
      imageUrl: <FaCommentDots size={180} />,
      buttonText: "Get Started",
    },
    {
      title: "NLP Services for Speech Processing",
      description: "Enable systems to understand and process human speech for voice-activated solutions.",
      imageUrl: <FaMicrophoneAlt size={180} />,
      buttonText: "Get Started",
    },
    {
      title: "NLP Services for Text Generation",
      description: "Use AI to generate human-like text for content creation, reports, and creative writing.",
      imageUrl: <FaPen size={180} />,
      buttonText: "Get Started",
    },
    {
      title: "NLP Services for Search & Recommendations",
      description: "Enhance search functionalities and personalized recommendations using NLP-based algorithms.",
      imageUrl: <FaSearch size={180} />,
      buttonText: "Get Started",
    },
    {
      title: "NLP Services for Document Processing",
      description: "Automate document analysis and extraction using NLP techniques for efficient data processing.",
      imageUrl: <FaFileAlt size={180} />,
      buttonText: "Get Started",
    },
  ];

  const { ref: aiMlRef, inView: aiMlInView } = useInView({ triggerOnce: true });
  const { ref: frontendRef, inView: frontendInView } = useInView({ triggerOnce: true });
  const { ref: backendRef, inView: backendInView } = useInView({ triggerOnce: true });
  const { ref: devopsRef, inView: devopsInView } = useInView({ triggerOnce: true });
  const { ref: ecomRef, inView: ecomInView } = useInView({ triggerOnce: true });

  return (
    <div className="min-h-screen py-12 px-4 sm:px-2 bg-primary">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-secondary dark:text-white mt-28">Our Key Weapons</h1>
        <div className='mt-12' id='ml'>
          <h2 ref={aiMlRef} className={`text-3xl text-sky-50 dark:text-white ${aiMlInView ? 'animate__animated animate__fadeInLeft' : ''}`}>AI / ML </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 " >
            {aiMlServices.map((service, index) => (
              <ThreeDCardDemo key={index} {...service} />
            ))}
          </div>
        </div>
        <div className='mt-12 ' id='fsd'>
          <h2 ref={frontendRef} className={`text-3xl text-sky-50 dark:text-white ${frontendInView ? 'animate__animated animate__fadeInLeft' : ''}`}>Frontend Development </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 " >
            {Frontendservices.map((service, index) => (
              <ThreeDCardDemo key={index} {...service} />
            ))}
          </div>
        </div>
        <div>
          <h2 ref={backendRef} className={`text-3xl text-sky-50 dark:text-white mt-12 ${backendInView ? 'animate__animated animate__fadeInLeft' : ''}`}>Backend Development</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Backendservices.map((service, index) => (
              <ThreeDCardDemo key={index} {...service} />
            ))}
          </div>
        </div>
        <div>
          <h2 ref={devopsRef} className={`text-3xl text-sky-50 dark:text-white mt-12 ${devopsInView ? 'animate__animated animate__fadeInLeft' : ''}`}>DevOps</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {DevOps.map((service, index) => (
              <ThreeDCardDemo key={index} {...service} />
            ))}
          </div>
        </div>
        <div id='ecom' >
          <h2 ref={ecomRef} className={`text-3xl text-sky-50 dark:text-white mt-12 ${ecomInView ? 'animate__animated animate__fadeInLeft' : ''}`}>E-commerce / Digital Marketing</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Ecom.map((service, index) => (
              <ThreeDCardDemo key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}