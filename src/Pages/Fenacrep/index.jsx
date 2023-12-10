import React, { Fragment } from "react";
import { Layout } from "../../components/Layout";
import { useCvInfo } from "../../context";
import { info_fena } from "../../constants/fenacrep";

function Fenacrep() {
  const { language, handleOpenModal } = useCvInfo();
  return (
    <Layout>
      <div className="bg-first  darkMode paddingX">
        <section className="text-gray-400 bg-gray-800 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="text-2xl font-medium title-font mb-4 text-white">
                FENACREP
              </h1>
                {language ? (<p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
              Durante mi tiempo como Analista Programador en FENACREP, he contribuido significativamente al desarrollo y colaborado en múltiples plataformas. Este portafolio refleja una muestra representativa de los proyectos y contribuciones que tuve el privilegio de realizar durante mi trayectoria en la organización.
              </p>) : (
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
              During my tenure as a Programmer Analyst at FENACREP, I made substantial contributions to various platform developments and collaborations. This portfolio showcases a representative sample of the projects and contributions I had the privilege to undertake during my tenure with the organization.
              </p>

              )}
              
            </div>
            <div className="flex flex-wrap -m-4">
              {info_fena.map((data) => (
                <Fragment key={data.id}>
                <div className="p-4 lg:w-1/4 md:w-1/2">
                  <div className="h-full flex flex-col items-center text-center">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-full  object-cover object-center mb-4 cursor-pointer"
                      src={data.img}
                      onClick={()=>handleOpenModal(data)}
                    />
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-white">
                        {data.titleEs}
                      </h2>
                      <h3 className="text-gray-500 mb-3">UI Developer</h3>
                      <p className="mb-4">
                        DIY tote bag drinking vinegar cronut adaptogen squid
                        fanny pack vaporware.
                      </p>
                    </div>
                  </div>
                </div>
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
