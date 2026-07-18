import { experiences } from "../constants"
import { useState } from "react"
import {motion} from 'framer-motion'

function Experiences({language}) {

  const [tab , setTab] = useState('experience-1');

  return (
    
      <section id="experiences" className=" text-first rounded-md pt-48 pb-24">
        <div className="bg-second rounded-md py-20">
        {/* Here goes the Experiences Text and some info. */}
        <motion.div
        className=""
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true , amount: 0.5 }}
          transition={{ duration:0.5}}
          variants={{
            hidden: { opacity: 0 , y: 50 },
            visible: { opacity: 1 , y: 0 }
          }}
          >
          <div className="flex-1 px-6 sm:px-16 flexCenter md:items-start md:text-start md:flex-row flex-col mb-5 ">
            <h1 className="heading2">
              {language ? 
                ( 
                  <p>Experiencia laboral</p>
                  ) 
                  : 
                  (
                  <p>Work experience</p>
                )
              }
            </h1>
            {/* <div className="w-full md:mt-0 mt-6 ">
              {language ? 
                (
                  <p className="paragraph  md:max-w-[450px] max-w-md mx-auto">Español Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nobis assumenda blanditiis quae quod?</p>
                  )
                  : 
                  (
                  <p className="paragraph  md:max-w-[450px] max-w-md mx-auto">English Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, adipisci aperiam!</p>
                )
              }
            </div> */}
          </div>
        </motion.div>

        <div className="md:grid md:grid-col-2 grid-flow-col p-4 md:p-8 bg-second">
          {/* Here goes the tabs on de left side */}
          <motion.div
          className=""
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true , amount: 0.5 }}
          transition={{ duration:0.5}}
          variants={{
            hidden: { opacity: 0 , x: -50 },
            visible: { opacity: 1 , x: 0 }
          }}
          >
            <div className="flex justify-center  px-4 col-span-full md:col-span-1 md:flex-col md:justify-start md:items-start ">
              {experiences.map((exp, index)=>(
                <button key={index} 
                    onClick={()=> setTab(exp.id)}
                    className={`p-2 border-b-2 md:border-l-2 md:border-b-0 md:py-3 ${tab === exp.id ? 'border-fourth  bg-gradient-to-r from-second  to-fourth ' : ''} `}>
                  {language ? exp.nameJobEs : exp.nameJobEn}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Here goes the content of eacj tab */}
          <motion.div
          className="row-span-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true , amount: 0.5 }}
          transition={{ delay:0.2, duration:0.5}}
          variants={{
            hidden: { opacity: 0 , x: -50 },
            visible: { opacity: 1 , x: 0 }
          }}
          >
            <div className=" text-center sm:grid-cols-2 col-span-full md:col-span-4 md:text-left pt-12 md:pt-0">
              {experiences.map((exp, index)=>(
                <div key={index} className={`flex flex-col items-center justify-center  md:justify-start md:items-start ${tab === exp.id ? '' : 'hidden'} `}>
                  
                  <h5 className="text-xl font-semibold">{language ? exp.positionEs : exp.positionEn}</h5>
                  <p>{language ? exp.datesEs : exp.datesEn}</p>
                  <div>
                    <ul className="p-1 list-disc pl-5 text-justify" >
                      {exp.roles.map((rol,index)=>(
                        <li key={index} className="p-1">
                          {language ? rol.descriptionEs : rol.descriptionEn}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>


        </div>

      </section>
  )
}

export default Experiences