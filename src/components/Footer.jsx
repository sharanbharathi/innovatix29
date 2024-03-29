/* eslint-disable no-undef */
import React from 'react';
//import { useState } from 'react';

function Footer() {
  // const [details, setDetails] = useState({
  //   email: '', // add email field
  // });

  // const validateForm = () => {
  //   let emailError = '';

  //   if (!details.email || !/\S+@\S+\.\S+/.test(details.email)) {
  //     emailError = 'Valid email is required';
  //   }

  //   setDetails({
  //     ...details,

  //     emailError,
  //   });

  //   return !emailError;
  // };

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();

  //   // get email from form field
  //   const email = e.target.email.value;

  //   // update details state with email
  //   setDetails({ ...details, email });

  //   if (validateForm()) {
  //     PostData(details);
  //   }
  // };

  // const PostData = async (details) => {
  //   try {
  //     const response = await fetch(
  //       'https://sharaninnovatix-default-rtdb.firebaseio.com/newsletter.json',
  //       {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //           email, // include email field
  //         }),
  //       }
  //     );

  //     // handle response...
  //   } catch (error) {
  //     // handle error...
  //   }
  // };

  return (
    <div>
      <section class="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
            <div class="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
              {/* <img
                class="w-auto h-9"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
                alt=""
              /> */}
              <h1 className="font-Varela text-4xl font-black"> Innovatix.</h1>

              <p class="text-base leading-relaxed text-gray-600 mt-7">
                Where creativity meets strategy, crafting innovative solutions
                for your digital success. Transforming ideas into impactful
                results, we redefine excellence in every project
              </p>

              <ul class="flex items-center space-x-3 mt-9">
                <li>
                  <a
                    href="https://twitter.com/sharan_bha15074"
                    title=""
                    class="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-black focus:bg-black"
                  >
                    {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                    <svg
                      class="pl-2 pt-1 w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z">
                        {' '}
                      </path>
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61556804909935"
                    title=""
                    class="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                  >
                    {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                    <svg
                      class="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z">
                        {' '}
                      </path>
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/innovatixdigitalmedia/"
                    title=""
                    class="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-red-600 focus:bg-red-600"
                  >
                    {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                    <svg
                      class="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z">
                        {' '}
                      </path>
                      <circle cx="16.806" cy="7.207" r="1.078">
                        {' '}
                      </circle>
                      <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z">
                        {' '}
                      </path>
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/company/innovatix-digital-media/"
                    title=""
                    class="flex items-center justify-center text-white transition-all duration-200 bg-gray-300 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                  >
                    {' '}
                    {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                    >
                      <path
                        path
                        d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"
                      />{' '}
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div> </div>
            <div> </div>

            <div>
              <p class="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Company
              </p>

              <ul class="mt-6 space-y-4">
                <li>
                  <a
                    href="#about"
                    title=""
                    class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    {' '}
                    About{' '}
                  </a>
                </li>

                <li>
                  <a
                    href="#services"
                    title=""
                    class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    {' '}
                    Services{' '}
                  </a>
                </li>

                <li>
                  <a
                    href="#testimonial"
                    title=""
                    class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    {' '}
                    Testimonial{' '}
                  </a>
                </li>

                {/* <li>
                  <a
                    href="#a"
                    title=""
                    class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    {' '}
                    Career{' '}
                  </a>
                </li> */}
              </ul>
            </div>

            <div>
              <p class="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Help
              </p>

              <ul class="mt-6 space-y-4">
                <li>
                  <a
                    href="#contact"
                    title=""
                    class="flex text-sm text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    {' '}
                    Customer Support{' '}
                  </a>
                </li>

                <li>
                  <a
                    href="https://calendly.com/innovatixdigitalmedia/innovatix-digital-media"
                    title=""
                    class="flex text-sm text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    {' '}
                    Book a Free Consultation{' '}
                  </a>
                </li>

                {/* <li>
                  <a
                    href="#a"
                    title=""
                    class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    {' '}
                    Terms & Conditions{' '}
                  </a>
                </li> */}

                {/* <li>
                  <a
                    href="#a"
                    title=""
                    class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    {' '}
                    Privacy Policy{' '}
                  </a>
                </li> */}
              </ul>
            </div>

            {/* <div class="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
              <p class="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Subscribe to newsletter
              </p>

              <form
                action="#"
                method="POST"
                class="mt-6"
                onSubmit={handleFormSubmit}
              >
                <div>
                  <label for="email" class="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                  />
                </div>

                <button
                  type="submit"
                  class="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700"
                >
                  Subscribe
                </button>
              </form>
            </div> */}
          </div>

          <hr class="mt-16 mb-10 border-gray-200" />

          <p class="text-sm text-center text-gray-600">
            © Copyright 2024, All Rights Reserved by Innovatix Digital Media
          </p>
        </div>
      </section>
    </div>
  );
}

export default Footer;
