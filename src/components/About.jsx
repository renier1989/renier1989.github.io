import {motion} from 'framer-motion'
import {renier3,cves, cven } from '../assets';
import { aboutInfo } from '../constants';
import SocialMediaIcons from './SocialMediaIcons';

function About({language}) {
  return (
    <section id="about" className="flex md:flex-row flex-col md:py-56 py-20 ">

      {/* Here will go the image section */}
      <div className="md:order-2 flex-1 justify-center  flexCenter ">
      <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true , amount: 0.5 }}
          transition={{duration:0.5}}
          variants={{
            hidden: { opacity: 0 , x: 50 },
            visible: { opacity: 1 , x: 0 }
          }}
        >
        <div className="md:relative z-0 md:ml-20 before:absolute before:-top-10 before:-left-10 md:before:w-full before:max-w-[400px] before:h-full before:border-2 before:rounded-md md:before:border-fourth before:border-third before:z-[-1] 
        ease-in-out hover:before:translate-y-2 hover:before:translate-x-2 delay-150 hover:before:transition hover:before:duration-500
        ">
          <img src={renier3} alt="profile" className=" ss:w-[400px] ss:h-[400px]   md:hover:filter  transition ease-in-out duration-500 z-10 rounded-md" />
        </div>
        </motion.div>

      </div>

      {/* Here will go the Name and some information */}
      <div className="flex-1 px-6 py-5 sm:px-14 flex-col flexCenter md:items-start md:text-start bg-gray-800 rounded-md">
        <motion.div 
        className="text-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true , amount: 0.5 }}
          transition={{duration:0.5}}
          variants={{
            hidden: { opacity: 0 , x: -50 },
            visible: { opacity: 1 , x: 0 }
          }}
        >

          <div className=" font-medium paragraph2 my-4 text-justify">
            {language ? (
              <div>
                <div >
                  Hola, mi nombre es <a className="font-bold text-gradient2 text-[19px]">Renier</a> y soy un programador web. Me apasiona crear <a className="font-bold text-gradient2 text-[18px]">soluciones</a> digitales que sean funcionales, eficientes y efectivas. Me motiva la idea de agilizar y mejorar la forma de trabajo de mis clientes y usuarios. 
                  <br />
                  <br />
                  Mi interés por la programación comenzó cuando me di cuenta de que podía crear herramientas útiles y <a className="font-bold text-gradient2 text-[18px]"> accesibles </a> para mi equipo de estudios, por lo que empecé a aprender PHP y MySQL. Desde entonces, he continuado aprendiendo y perfeccionando mis habilidades para poder ofrecer soluciones cada vez más <a className="font-bold text-gradient2 text-[18px]"> sofisticadas </a> y completas a mis clientes. Mi objetivo es siempre crear aplicaciones web que cumplan con los más altos estándares de calidad y usabilidad.
                </div>
                <div className='my-7'>
                  <p>Algunas de las tecnologias o herramientas con las que trabajo actualmente:</p>
                  <div className='grid grid-cols-2 pl-5 my-3'>
                      <ul className='list-disc'>
                        <li>Laravel</li>
                        <li>Livewire</li>
                        <li>MySql</li>
                        <li>BulmaCss</li>
                      </ul>
                      <ul className='list-disc'>
                        <li>Node.Js</li>
                        <li>PHP</li>
                        <li>GitHub</li>
                        <li>GitHub Pages</li>
                      </ul>
                  </div>
                </div>
              </div>

            ) : (
              <div>
                <p>
                  Hi, my name is <a className="font-bold text-gradient2 text-[19px]">Renier</a>  and I'm a web developer. I'm passionate about creating digital <a className="font-bold text-gradient2 text-[18px]">solutions</a>  that are functional, efficient, and effective. I'm motivated by the idea of streamlining and improving the work processes of my clients and users. 
                  <br />
                  <br />
                  My interest in programming began when I realized I could create useful and <a className="font-bold text-gradient2 text-[18px]">accessible</a>  tools for my study group, so I started learning PHP and MySQL. Since then, I've continued to learn and perfect my skills in order to provide increasingly <a className="font-bold text-gradient2 text-[18px]">sophisticated </a> and comprehensive solutions to my clients. My goal is always to create web applications that meet the highest standards of quality and usability.
                </p>
                <div className='my-7'>
                  <p>Some of the technologies or tools I currently work with:</p>
                  <div className='grid grid-cols-2 pl-5 my-3'>
                      <ul className='list-disc'>
                        <li>Laravel</li>
                        <li>Livewire</li>
                        <li>MySql</li>
                        <li>BulmaCss</li>
                      </ul>
                      <ul className='list-disc'>
                        <li>Node.Js</li>
                        <li>PHP</li>
                        <li>GitHub</li>
                        <li>GitHub Pages</li>
                      </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>


        {/* Here will go the bottoms fot CTA */}
        <motion.div
        className='flexCenter  mt-5'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true , amount: 0.5 }}
        transition={{ delay: 0.2, duration:0.5}}
        variants={{
          hidden: { opacity: 0 , x: -50 },
          visible: { opacity: 1 , x: 0 }
        }}
        >
          <div className="my-1">
          <a href={language ? cves : cven} target="_blank" className='font-semibold text-white bg-gradient-to-r from-second via-fourth to-red-600 rounded-md  py-3 px-6  transition duration-500'>
            {language ? aboutInfo.buttonEs : aboutInfo.buttonEn}
          </a>
          </div>
      

        </motion.div>

        {/* sicial media icons  */}
        <motion.div
        className='flexStart md:text-start items-start mt-5'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true , amount: 0.5 }}
        transition={{ delay: 0.4, duration:0.5}}
        variants={{
          hidden: { opacity: 0 , x: -50 },
          visible: { opacity: 1 , x: 0 }
        }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>


    </section>
  )
}

export default About