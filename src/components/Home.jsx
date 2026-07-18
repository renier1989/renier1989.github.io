import {motion} from 'framer-motion'
import { homeInfo } from '../constants';
import SocialMediaIcons from './SocialMediaIcons';
import {logo2g} from '../assets';

function Home({language, setLanguage }) {
  return (
    <section id="home" className="  flex md:flex-row flex-col md:py-52 py-32 ">
      {/* Here will go the image section */}
        <div className=" z-10  md:order-2  justify-center  flexCenter  ">
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
              <img src={logo2g} alt="profile" className="md:max-w-[700px] md:relative -left-10 top-48 transition duration-500 " />
            </motion.div>
        </div>
      {/* Here will go the Name and some information */}
      <div className=" bg-gray-800 z-0 flex-1 px-6 py-7 rounded-md sm:px-16 flex-col md:flexCenter flexStart md:items-start md:text-start">
        <motion.div
          className='text-start mt-5'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true , amount: 0.5 }}
          transition={{duration:0.5}}
          variants={{
            hidden: { opacity: 0 , x: -50 },
            visible: { opacity: 1 , x: 0 }
          }}
        >
          
          <div className="paragraph"> 
          {language ? (
            <p>Hola, me llamo</p>
          ) : (
            <p>
              Hi, My name is
            </p>
          )}
          </div>
          <p className="heading3">
          {/* <p className='text-gradient py-2'> Renier Vargas</p> */}
          Renier Vargas
          </p>
          <div className='heading1 '>
            {language ? 
            (
              <div className=''>Creando <a className='text-gradient2 pr-1 pl-1 '> soluciones </a> digitales e  innovadoras.</div>
            ) : (
              <div className=''>Creating innovative digital <a className='text-gradient2'> solutions.</a></div>
            )}
            {/* {language ? homeInfo.shortPhraseEs : homeInfo.shortPhraseEn} */}
          </div>
          <div className="text-sm font-medium paragraph md:mr-[300px]">
            {language ? homeInfo.shortInfoEs : homeInfo.shortInfoEn}
            <h1>
            </h1>
          </div>
        </motion.div>


        {/* Here will go the bottoms fot CTA */}
        {/* <motion.div
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
          <a href="/#/#contact" className='font-semibold text-white bg-gradient-to-r from-second via-fourth to-red-500 rounded-md py-3 px-6  transition duration-500 '>
            {language ? homeInfo.buttonEs : homeInfo.buttonEn}
          </a>

        </motion.div> */}

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

export default Home