import React, { useEffect } from 'react';
import Hero from '../media/bro.svg';
import { Link } from 'react-router-dom';
import Service from '../media/service.png';
import Fb from '../media/fb.png';
import Logo from '../media/logo.png';
import Meta from '../media/meta3.png';
import Web from '../media/webdev.svg';
import App from '../media/appdev.svg';
import Contactx from './Contactx';

// import { ReactTyped } from 'react-typed';
//motion
import { motion } from 'framer-motion';
//variants
// import { fadeIn } from './variants';
//image

import Footer from '../components/Footer';
import Testimonial from './Testimonial';
// aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import Process from './Process';
// contact us
// import { useState } from 'react';
// import { ChevronDownIcon } from '@heroicons/react/20/solid';
// import { Switch } from '@headlessui/react';

//contact us
// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

function Home() {
  // const [agreed, setAgreed] = useState(false); //contact us

  useEffect(() => {
    AOS.init({ duration: 1500 });
  });

  return (
    <div className="dark:bg-neutral-700">
      <div
        id="home"
        className="hero grid gap-2 grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 "
      >
        <div className="herobanner ">
          <img
            class="h-full w-full object-cover sm:w-full lg:h-screen "
            src={Hero}
            alt="herobanner"
          />
        </div>
        <div className="content p-5 sm:p-10 lg:p-20 shrink-0  sm:shrink">
          <h1 className=" font-dmserif text-3xl md:text-4xl md:font-sans lg:text-8xl font-medium mb-5 md:mb-5 lg:mb-10">
            We're really <span class="text-green-500"> good at growing</span>{' '}
            companies{' '}
            {/* <ReactTyped
              className="font-sans text-white"
              strings={['good at growing companies']}
              typeSpeed={100}
              backSpeed={50}
              loop
            /> */}
            {/* <span class="font-sans text-white">good at growing</span> companies */}
          </h1>
          <Link to="https://calendly.com/innovatixdigitalmedia/innovatix-digital-media">
            <button
              type="submit"
              class="bg-green-300 text-zinc-950 py-2 px-4 rounded border-gray-400 shadow-sm  hover:text-white hover:bg-blue-800 ml-20"
            >
              Book a Call
            </button>
          </Link>
        </div>
      </div>
      <h1
        id="services"
        class="font-pj md:text-5xl sm:text-2xl text-center pt-8 tracking-tight font-bold"
        data-aos="fade-up"
      >
        Services we offer
      </h1>
      <br />
      {/* #Service  Section*/}
      <motion.div
        // variants={fadeIn('up', 0.2)}
        // initial="hidden"
        // whileInView={'show'}
        // viewport={{ once: false, amount: 0.7 }}
        className="container grid gap-2 grid-cols-3 max-w-7xl mx-auto rounded-xl   items-center sm:grid-cols-1 lg:grid-cols-3 sm:max-w-2xl lg:max-w-7xl "
      >
        <div
          class="p-5 mt-0 col-span-2 sm:text-base lg:text-lg sm:pt-0 shrink-0  sm:shrink text-slate-500 font-Varela"
          data-aos="fade-right"
        >
          <p>
            Welcome to the digital frontier where your brand's story is not just
            told, but crafted into a captivating digital saga! At Innovatix, our
            services transcend the ordinary – we're not just offering digital
            marketing; we're your strategic architects, sculpting experiences
            that resonate across the digital landscape.
            {/* <Link class="text-blue-500" to="/services">
              {' '}
              that...
            </Link> */}
          </p>
        </div>
        <div class=" container w-full h-full object-cover  sm:w-full sm:content-center lg:w-96 sm:ml-10">
          <img src={Service} alt="services" data-aos="fade-left" />
        </div>
      </motion.div>
      <div class="py-16 md:ml-20 md:mr-20 sm:ml-0 sm:mr-0 ">
        <div class="container m-auto px-6 text-gray-500 md:px-12 xl:px-0 sm:px-0">
          <div class="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
            <div
              class="bg-white rounded-2xl shadow-xl md:px-8 py-12 sm:px-12 lg:px-8 hover:shadow-2xl border-2 border-blue-100"
              data-aos="fade-right"
            >
              <div class="mb-0 space-y-2 ">
                <h3 class="text-2xl font-semibold text-sky-600">Meta ads</h3>
                <p class="mb-6 font-Varela">
                  Unlock the power of targeted meta ads tailored to skyrocket
                  your sales. Let us craft your pathway to increased revenue and
                  amplified success!
                </p>
                <img src={Meta} alt="meta ads" />
              </div>
            </div>
            <div
              class="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 hover:shadow-2xl border-2 border-purple-100"
              data-aos="zoom-in"
            >
              <div class="mb-0 space-y-2">
                <h3 class="text-2xl font-semibold text-purple-900">
                  Web Development
                </h3>
                <p class="mb-6 font-Varela">
                  Elevate your online presence with a bespoke website tailored
                  to showcase your brand's unique story. Let's craft a digital
                  home that captivates, converts, and propels your business to
                  new heights!
                </p>
                <img src={Web} alt="web development" />
              </div>
            </div>
            <div
              class="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 hover:shadow-2xl border-2 border-green-100"
              data-aos="fade-left"
            >
              <div class="mb-0 space-y-2">
                <h3 class="text-2xl font-semibold text-green-500">
                  App Development
                </h3>
                <p class="mb-6 font-Varela">
                  Unlock your business's full potential with our custom web app
                  solutions designed to skyrocket your sales and streamline
                  operations. Let us empower your brand with cutting-edge
                  technology tailored to your unique needs and objectives.
                </p>
                <img src={App} alt="app development" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />

      {/* Webvertising section */}
      <h1
        class="font-pj md:text-5xl sm:text-2xl text-center p-8 tracking-tight font-bold"
        data-aos="fade-up"
      >
        Webvertising
      </h1>
      <motion.div
        // variants={fadeIn('up', 0.2)}
        // initial="hidden"
        // whileInView={'show'}
        // viewport={{ once: false, amount: 0.7 }}
        className="container grid gap-2 grid-cols-3 max-w-7xl mx-auto rounded-xl   items-center sm:grid-cols-1 lg:grid-cols-3 sm:max-w-2xl lg:max-w-7xl "
      >
        <div class=" container w-full h-full object-cover  sm:w-96 sm:content-center lg:w-96 ">
          <img
            className="sm:ml-6"
            src={Fb}
            alt="services"
            data-aos="fade-right"
          />
        </div>
        <div
          class="p-2 md:text-4xl font-sans mt-0 col-span-2 sm:text-base lg:text-lg sm:pt-0 shrink-0  sm:shrink sm:p-6"
          data-aos="fade-left"
        >
          <p class="font-Varela">
            Welcome to our digital playground where creativity meets precision!
            🚀 Dive into the art and science of Facebook Ads with us. 🎯 We're
            not just advertisers; we're craftsmen sculpting campaigns to
            perfection. From eye-catching visuals to laser-focused targeting,
            our expertise ensures your brand shines in the ever-scrolling world
            of social media. Let's turn clicks into conversions and dreams into
            reality. Welcome to a new era of Facebook advertising mastery! 💡✨
            <Link
              class="text-green-500"
              to="https://calendly.com/innovatixdigitalmedia/innovatix-digital-media"
            >
              {' '}
              #AdvertiseWithPrecision #FacebookAdsPros
            </Link>
          </p>
        </div>
      </motion.div>
      <br />
      <Process />
      <br />

      {/* #About us Section*/}
      <div>
        <div>
          <h1
            id="about"
            class="font-pj md:text-5xl sm:text-2xl text-center p-8 tracking-tight font-bold"
            data-aos="fade-up"
          >
            About us
          </h1>
        </div>
        <div
          class="max-w-md mx-auto bg-white rounded-xl  overflow-hidden md:max-w-7xl "
          data-aos="fade-up"
        >
          <div class="md:flex">
            <div class="md:shrink-0">
              <img
                class="h-48 w-full object-cover md:h-full md:w-64 "
                src={Logo}
                alt="Logo"
              />
            </div>
            <div class="p-8 ">
              <div class="uppercase tracking-wide  text-gray-600 font-Varela text-2xl sm:text-xl fomt-pj font-bold">
                Innovatix Digital Media
              </div>
              <a
                href="#contact"
                class="block mt-1 text-lg leading-tight font-medium text-black hover:underline "
              >
                “Empower Your Brand, Ignite Your Influence!”
              </a>
              <p class="mt-2 text-slate-500 md:text-lg sm:text-base font-Varela">
                We're not just another digital marketing agency; we're your
                partners in success. Founded on the belief that every brand has
                a unique story waiting to be told, we specialize in crafting
                compelling narratives that resonate with audiences across the
                digital landscape.
                <br />
                <br />
                So, if you're ready to take your brand to new heights, partner
                with Innovatix and let's write the next chapter of your success
                story together.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />

      {/* Vision and Mission */}

      <div class="py-16 sm:ml-0 lg:ml-96 bg-white">
        <div class="container m-auto md:px-6 text-gray-500  xl:px-0">
          <div class="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
            <div
              class="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 hover:shadow-2xl"
              data-aos="fade-right"
            >
              <div class="mb-0 space-y-0">
                <h3 class="text-2xl font-semibold text-purple-900 text-center">
                  Our Vision
                </h3>
                <br />
                <p class="mb-0  font-Varela ">
                  Our vision is to redefine the standards of digital marketing
                  by empowering brands to harness the full potential of social
                  media. We envision a future where every brand has the tools
                  and strategies to connect authentically with their audience,
                  driving meaningful engagement and lasting impact in the
                  digital landscape.
                </p>
              </div>
            </div>
            <div
              class="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 hover:shadow-2xl"
              data-aos="fade-left"
            >
              <div class="mb-0 space-y-0">
                <h3 class="text-2xl font-semibold text-purple-900 text-center">
                  Our Mission
                </h3>
                <br />
                <p class="mb-0 font-Varela">
                  Our mission is to provide innovative and results-driven social
                  media marketing solutions that propel brands to success.
                  Through strategic planning, creative storytelling, and
                  relentless dedication to our clients' goals, we aim to deliver
                  unparalleled value and ROI. We are committed to being trusted
                  partners, guiding brands towards sustainable growth and
                  long-term success in the dynamic world of digital marketing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact us Section */}
      <Testimonial />
      <Contactx />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default Home;
