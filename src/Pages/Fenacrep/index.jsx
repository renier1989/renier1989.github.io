import React, { Fragment, useEffect } from "react";
import { Layout } from "../../components/Layout";
import { useCvInfo } from "../../context";
import { info_fena } from "../../constants/fenacrep";

function Fenacrep() {
  const { language, handleOpenModal } = useCvInfo();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <Layout>
      <div className="bg-first  darkMode paddingX">
        <section className="text-gray-400 bg-gray-800 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="text-2xl font-medium title-font mb-4 text-white">
                FENACREP
              </h1>
              {language ? (
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
                  Durante mi tiempo como Analista Programador en FENACREP, he contribuido de manera significativa al desarrollo y colaborado en diversas plataformas, incluyendo FENASIS (sitio web de uso interno de Fenacrep), la página web oficial de FENACREP, la página oficial de la Escuela Cooperativa, entre otros. Este portafolio muestra una representación de los proyectos y contribuciones en los que tuve el privilegio de participar durante mi tiempo en la organización.
                </p>
              ) : (
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
                  "During my tenure as a Programmer Analyst at FENACREP, I significantly contributed to the development and collaborated across multiple platforms, such as FENASIS (Fenacrep's internal website), the official FENACREP website, the official Cooperative School webpage, among others. This portfolio showcases a representative sample of the projects and contributions I had the privilege to undertake during my time at the organization.
                </p>
              )}
            </div>
            <div className="flex flex-wrap -m-4">
              {info_fena.map((data) => (

                <Fragment key={data.id}>
                  {data.visible ? (
                    <div className="p-4 lg:w-1/4 md:w-1/2">
                    <div className="h-full flex flex-col items-center text-center">
                      <img
                        alt="team"
                        className="flex-shrink-0 rounded-lg w-full  object-cover object-center mb-4 cursor-pointer"
                        src={data.img}
                        onClick={() => handleOpenModal(data)}
                      />
                      <div className="w-full">
                        <h2 className="title-font font-medium text-lg text-white">
                          {language ? (
                            <span>{data.titleEs}</span>
                            ):(
                            <span>{data.titleEn}</span>
                          )}
                          
                        </h2>
                        <h3 className="text-gray-500 mb-3">{data.subtitle}</h3>
                        <p className="mb-4 text-justify">
                          {language ? (
                            <div>
                              <p className="line-clamp-4">{data.contentEs} </p>{" "}
                              <span
                                onClick={() => handleOpenModal(data)}
                                className="font-bold text-gradient2 cursor-pointer transition duration-500 hover:underline hover:underline-offset-4 hover:decoration-fourth"
                              >
                                más
                              </span>
                            </div>
                          ) : (
                            <div>
                              <p className="line-clamp-4">{data.contentEn}</p>{" "}
                              <span
                                onClick={() => handleOpenModal(data)}
                                className="font-bold text-gradient2 cursor-pointer transition duration-500 hover:underline hover:underline-offset-4 hover:decoration-fourth"
                              >
                                more
                              </span>
                            </div>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>

                  ): null }
                  
                </Fragment>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Fenacrep;
