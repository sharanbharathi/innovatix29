/* eslint-disable react/jsx-no-undef */
import React, { useEffect } from 'react';
import { useState } from 'react';
//aos
import AOS from 'aos';
import 'aos/dist/aos.css';

import Swal from 'sweetalert2';

function Contactx() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });

  const [details, setDetails] = useState({
    fNmae: '',
    lName: '',
    email: '',
    phonenum: '',
    message: '',
    fNameError: '',
    lNameError: '',
    emailError: '',
    phonenumError: '',
    messageError: '',
  });
  const validateForm = () => {
    let fNameError = '';
    let lNameError = '';
    let emailError = '';
    let phonenumError = '';
    let messageError = '';

    if (!details.fName) {
      fNameError = 'First name is required';
    }

    if (!details.lName) {
      lNameError = 'Last name is required';
    }

    if (!details.email || !/\S+@\S+\.\S+/.test(details.email)) {
      emailError = 'Valid email is required';
    }

    if (!details.phonenum || details.phonenum.length < 10) {
      phonenumError = 'Valid phone number is required';
    }

    if (!details.message || details.message.length < 10) {
      messageError = 'Message must be at least 10 characters long';
    }

    setDetails({
      ...details,
      fNameError,
      lNameError,
      emailError,
      phonenumError,
      messageError,
    });

    return (
      !fNameError &&
      !lNameError &&
      !emailError &&
      !phonenumError &&
      !messageError
    );
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { fName, lName, email, phonenum, message } = details;

    try {
      const response = await fetch(
        'https://sharaninnovatix-default-rtdb.firebaseio.com/form.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ fName, lName, email, phonenum, message }),
        }
      );

      if (response.ok) {
        Swal.fire({
          title: 'Thank you',
          text: 'We will reach you soon',
          icon: 'success',
          didClose: () => {
            setDetails({
              fName: '',
              lName: '',
              email: '',
              phonenum: '',
              message: '',
              fNameError: '',
              lNameError: '',
              emailError: '',
              phonenumError: '',
              messageError: '',
            });
            window.location.reload();
          },
        });

        setDetails({
          fName: '',
          lName: '',
          email: '',
          phonenum: '',
          message: '',
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'There was an error sending your message. Please try again later.',
          icon: 'error',
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'There was an error sending your message. Please try again later.',
        icon: 'error',
      });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      PostData(details);
    }
    // PostData(details);

    setDetails({
      fName: '',
      lName: '',
      email: '',
      phonenum: '',
      message: '',
    });
  };

  return (
    <div>
      <div
        id="contact"
        className="p-4 max-w-md mx-auto  rounded-xl shadow-md overflow-hidden md:max-w-4xl font-Varela tracking-tight bg-slate-50"
        data-aos="flip-up"
      >
        <h2 className="text-4xl  text-black font-semibold mb-2 font-Varela text-center">
          Contact Us
        </h2>
        <div className="text-sm text-gray-600 mb-6 text-center">
          Connect with Innovation, Reach us for Digital Elevation!
        </div>
        <form id="contact_form" onSubmit={handleFormSubmit}>
          <div className="flex mb-5">
            <div className="w-1/2 mr-2 ">
              <label
                for="first_name_field"
                className="block text-base text-black"
              >
                First Name
              </label>
              <input
                className="rounded border-2 border-gray-100 w-full"
                type="text"
                name="first_name"
                id="first_name_field"
                placeholder="Enter your first name"
                onChange={(e) =>
                  setDetails({ ...details, fName: e.target.value })
                }
              />
            </div>
            <div className="w-1/2">
              <label
                for="last_name_field"
                className="block text-base text-black"
              >
                Last Name:
              </label>
              <input
                className="rounded border-2 border-gray-100 w-full"
                type="text"
                name="last_name"
                id="last_name_field"
                placeholder="Enter your last name"
                onChange={(e) =>
                  setDetails({ ...details, lName: e.target.value })
                }
              />
            </div>
          </div>
          <div className="flex mb-5">
            <div className="w-1/2 mr-2">
              <label for="email_field" className="block text-base text-black">
                Email:
              </label>
              <input
                className="rounded border-2 border-gray-100 w-full"
                type="email"
                name="email"
                id="email_field"
                placeholder="enter your email"
                onChange={(e) =>
                  setDetails({ ...details, email: e.target.value })
                }
              />
            </div>
            <div className="w-1/2">
              <label for="phone_field" className="block text-base text-black">
                Phone:
              </label>
              <input
                className="rounded border-2 border-gray-100 w-full"
                type="tel"
                name="phone"
                id="phone_field"
                placeholder="Don't forget to mention your country code "
                onChange={(e) =>
                  setDetails({ ...details, phonenum: e.target.value })
                }
              />
            </div>
          </div>

          <div className="mb-4">
            <label for="message_field" className="block  text-base text-black">
              Message
            </label>
            <textarea
              className="w-full rounded border-1 border-black"
              name="message"
              id="message_field"
              rows="6"
              placeholder="Enter your message, we will reach you ASAP"
              onChange={(e) =>
                setDetails({ ...details, message: e.target.value })
              }
            >
              {' '}
            </textarea>
          </div>

          <button
            onClick={PostData}
            type="submit"
            value="Submit"
            className="bg-blue-600 py-2 px-4 rounded border-gray-400 shadow-sm text-gray-200 hover:text-white hover:bg-blue-800"
          >
            Send
          </button>
          {/* <Link to="https://calendly.com/sharan029/ignite-your-success">
            <button
              type="submit"
              class="bg-green-300 text-zinc-950 py-2 px-4 rounded border-gray-400 shadow-sm  hover:text-white hover:bg-blue-800 ml-20"
            >
              Book a Call
            </button>
          </Link> */}
        </form>
      </div>
    </div>
  );
}

export default Contactx;
