import { motion } from "framer-motion";
// import { trips, todoapp, hoobank } from "../assets";
import { portfolio } from "../constants";
import { Link } from "react-router-dom";

function Portfolio({ language }) {
  const salirDePagina = (url) => {
    window.open(url, "_blank");
  };
  return (
    <section id="portfolio" className="pt-48 pb-48 ">
      <div className="py-10 px-2 bg-second rounded-md">
        {/* Here goes part of the title SKILLS and some texte */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="flex-1 px-6 sm:px-16 flexCenter md:items-start md:text-start md:flex-row flex-col mb-5 ">
            <h1 className={`heading2`}>
              {language ? <p>Portafolio</p> : <p>My Portfolio</p>}
            </h1>
            <div className="w-full md:mt-0 mt-6 ">
              <p className="paragraph  md:max-w-[450px] max-w-md mx-auto">
                {language ? (
                  <>
                    <i>
                      Estos algunos de los proyectos en los que he trabajado o
                      he colaborado.
                    </i>
                  </>
                ) : (
                  <>
                    <i>
                      These are some of the projects I have worked on or
                      collaborated on.
                    </i>
                  </>
                )}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Here goes al the project I done */}
        <div className="flex  justify-center">
          <motion.div
            className="sm:grid sm:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {portfolio.map((port) => (
              <div
                className={`${
                  !port.visible ? "hidden" : ""
                } flex flex-wrap gap-3 `}
                key={port.id}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
              >
                <div className="my-2">
                  <div className="darkMode h-full dark:bg-gray-600 p-6 rounded-lg mx-2  ">
                    {port.internal ? (
                      <Link to={port.internal}>
                        <img
                          className=" rounded w-full object-cover object-center mb-6"
                          src={port.img}
                          alt={port.id}
                        />
                      </Link>
                    ) : (
                      <img
                        className=" rounded w-full object-cover object-center mb-6"
                        src={port.img}
                        alt={port.id}
                      />
                    )}

                    <h2 className="text-lg  font-medium  text-gradient2 title-font mb-2 text-white">
                      {language ? (
                        <div>
                          <p className="text-2xl ">
                            {port.internal ? (
                              <Link to={port.internal}>{port.titleEn}</Link>
                            ) : (
                              <p>{port.titleEs}</p>
                            )}
                          </p>
                        </div>
                      ) : (
                        <div>
                          <div>
                            <p className="text-2xl ">
                              {port.internal ? (
                                <Link to={port.internal}>{port.titleEn}</Link>
                              ) : (
                                <p>{port.titleEn}</p>
                              )}
                            </p>
                          </div>
                        </div>
                      )}
                    </h2>
                    <div className="tracking-widest  text-white text-[19px]  font-medium title-font space-x-8">
                      {port.code_link !== null ? (
                        <button
                          className="transition duration-500 hover:underline hover:underline-offset-4 hover:decoration-fourth"
                          onClick={() => salirDePagina(port.code_link)}
                        >
                          Code
                        </button>
                      ) : null}
                      {port.link ? (
                        <button
                          className="transition duration-500 hover:underline hover:underline-offset-4 hover:decoration-fourth"
                          onClick={() => salirDePagina(port.link)}
                        >
                          Demo
                        </button>
                      ) : null}

                      {/* {port.internal ? (
                        <Link to={port.internal}
                          className="transition duration-500 hover:underline hover:underline-offset-4 hover:decoration-fourth"
                        >
                          Info
                        </Link>
                      ) : null} */}
                    </div>
                    <div className="leading-relaxed text-base  text-white text-justify">
                      {language ? (
                        <div>
                          <p className="mt-7">{port.contentEs}</p>
                        </div>
                      ) : (
                        <div>
                          <div>
                            <p className="mt-7">{port.contentEn}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="mt-3">
          <Link to="/portfolio">
            {language ? (
              <p className="font-bold text-gradient2 text-2xl transition duration-500 hover:underline hover:underline-offset-4 hover:decoration-fourth">
                Ver más.
              </p>
            ) : (
              <p className="font-bold text-gradient2 text-2xl transition duration-500 hover:underline hover:underline-offset-4 hover:decoration-fourth">
                See more.
              </p>
            )}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
