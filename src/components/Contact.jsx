import {motion} from 'framer-motion'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from "react";
import {close,logo2g} from "../assets";
import { ReCAPTCHA } from "react-google-recaptcha";

function Contact({language}) {
  const [shownoty, setShownoty] = useState(false);
  const [showerror, setShowerror] = useState(false);
  const form = useRef();
  const reRef = useRef();
  const sendEmail = (e) => {
    
    e.preventDefault();
      let nameval = document.getElementById("user_name").value;
      let emailval = document.getElementById("user_email").value;
      let messageval= document.getElementById("message").value;

      // a make a validation for not sending empty values
    if (nameval && emailval && messageval){
      emailjs.sendForm('service_ew568ag', 'template_g9ut96c', form.current, 'QCn2clSctbSEZSSjN')
        .then((result) => {
          console.log(result.text);
          console.log('Message sent');
          if(result.text=='OK') {
            setShowerror(false)
            setShownoty(true);
            document.getElementById("user_name").value = "";
            document.getElementById("user_email").value = "";
            document.getElementById("message").value = "";
            setTimeout(() => {
              setShownoty(false);
            }, 5000);
          }
        }, (error) => {
            console.log(error.text);
        });
    }else{
      setShowerror(true)
    }
  };

  return (
    <section id="contact" className="pt-48 pb-48 ">
      <ReCAPTCHA sitekey='6LcIeGokAAAAAE4GfmTKeUqgbo9iglTsVk0QfcLd' size='invisible' ref={reRef}/>
      <div className=" z-0  md:order-2  justify-center  flexCenter  ">
            <motion.div 
              className="md:absolute hidden md:block"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true , amount: 0.5 }}
              transition={{delay: 0.5, duration:0.5}}
              variants={{
                hidden: { opacity: 0 , x: 50 },
                visible: { opacity: 1 , x: 0 }
              }}
            >
              <img src={logo2g} alt="profile" className="z-0 md:max-w-[700px] md:relative -right-[790px] top-[560px] transition duration-500 " />
            </motion.div>
        </div>
      <div className='pb-10 pt-10 px-2 bg-second rounded-md'>
        {/* Here goes part of the title SKILLS and some texte */}
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true , amount: 0.5 }}
        transition={{ duration:0.5}}
        variants={{
          hidden: { opacity: 0 , y: 50 },
          visible: { opacity: 1 , y: 0 }
        }}
        >
          <div className='flex-1 px-6 sm:px-16 flexCenter md:items-start md:text-start md:flex-row flex-col mb-5 '>
            <h1 className={`heading2`}>
              {language ? (
                <p>Contacto</p>
                ):(
                <p>Contact</p>
              )}
            </h1>
            <div className=" md:mt-0 mt-6 ">
              <p className='paragraph  md:w-full mx-auto'>
              {language ? (
                  <i>Me encantaría escuchar de ti. Por favor llena el formulario de contacto en mi sitio web para ponerte en contacto conmigo.</i>
                  ):(
                  <i >I would love to hear from you. Please fill out the contact form on my website to get in touch with me.</i>
                )}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Here will go the form contact */}
        <motion.div
        className='flex justify-center items-center w-full '
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true , amount: 0.5 }}
        transition={{ delay:0.5, duration:0.5}}
        variants={{
          hidden: { opacity: 0 , y: 50 },
          visible: { opacity: 1 , y: 0 }
        }}
        >
          <form  ref={form} onSubmit={sendEmail} action="" className='flex flex-col w-full max-w-[600px]'>
              <input className="p-2 bg-gray-500 rounded-sm text-white" type="text" id='user_name' name='user_name' placeholder='Name'/>
              <input className="p-2 bg-gray-500 rounded-sm text-white my-4" type="email" id='user_email' name='user_email' placeholder='Email'/>
              <textarea className="p-2 bg-gray-500 rounded-sm text-white" id="message" name="message" rows="10" placeholder='Message'></textarea>
              <button type='submit' className='font-semibold text-white bg-gradient-to-r from-second via-fourth to-red-600 rounded-md py-3 px-6 md:mx-40 justify-center my-8 flex items-center  transition duration-500 '>
                Let's Talk
              </button>
          </form>

        </motion.div>

        <div className={`${shownoty ? '':'hidden'} bg-green-400 md:mx-[220px] p-2 rounded-sm text-second font-semibold`}>
            {language ? (
              <p> Gracias por escribirme, te respondere tan pronto me sea posible. </p>
            ): (
              <p>Thank you for writing to me, I will answer you as soon as possible.</p>
            )}
        </div>
        
        <div className={`${showerror ? '':'hidden'} bg-red-400 md:mx-[220px] p-2 rounded-sm text-second font-semibold flex flex-row justify-between`}>
            {language ? (
              <p> Por favor rellena el formulario para poder estar en contacto. </p>
            ): (
              <p>Please fill out the form to be in contact.</p>
            )}
            <div className='flex items-center bg-red-500 p-1 rounded-sm hover:bg-red-600 cursor-pointer' onClick={()=>setShowerror(false)}>
              <img src={close} alt="" />
            </div>
        </div>


      </div>
    </section>
  )
}

export default Contact