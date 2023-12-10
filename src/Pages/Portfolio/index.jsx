import React, { useEffect } from "react";
import { Layout } from "../../components/Layout";
import { portfolio } from "../../constants";
import { useCvInfo } from "../../context";
import { Link } from "react-router-dom";
function Portfolio() {
  const cvinfo = useCvInfo();
  portfolio.sort((a, b) => a.order - b.order);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <Layout>
      <div className="bg-first  darkMode paddingX">
        {portfolio.map((port) => (
          <section
            key={port.id}
            className="text-gray-400 bg-gray-800 body-font overflow-hidden"
          >
            <div className=" px-5 py-24 mx-auto">
              <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                  <h1 className="text-white text-3xl title-font font-medium mb-4">
                    {cvinfo.language ? (
                      <div>
                        {port.internal ? (
                          <Link to={port.internal}>
                            <p className="text-3xl ">{port.titleEs}</p>
                          </Link>
                        ) : (
                          <p className="text-3xl ">{port.titleEs}</p>
                        )}
                      </div>
                    ) : (
                      <div>
                        <div>
                          {port.internal ? (
                            <Link to={port.internal}>
                              <p className="text-3xl ">{port.titleEn}</p>
                            </Link>
                          ) : (
                            <p className="text-3xl ">{port.titleEn}</p>
                          )}
                        </div>
                      </div>
                    )}
                  </h1>
                  <div className="flex mb-4">
                    <a className="flex-grow text-gradient2 border-b-2 border-fourth py-2 text-lg px-1">
                      {cvinfo.language ? (
                        <p>Descripción</p>
                      ) : (
                        <p>Description</p>
                      )}
                    </a>
                  </div>
                  <div className="leading-relaxed mb-4 text-white text-justify ">
                    {cvinfo.language ? (
                      <div>
                        <p className="text-sm md:text-base ">
                          {port.longContentEs}
                        </p>
                      </div>
                    ) : (
                      <div>
                        <div>
                          <p className="text-sm md:text-base ">
                            {port.longContentEn}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex mb-4">
                    <a className="flex-grow text-gradient2 border-b-2 border-fourth py-2 text-lg px-1">
                      {cvinfo.language ? (
                        <p>Tecnologías</p>
                      ) : (
                        <p>Tecnologies</p>
                      )}
                    </a>
                  </div>
                  <div className="flex gap-5 flex-wrap ">
                    {port.tech.map((tech) => (
                      <div
                        key={tech.id}
                        className="flex border-t border-gray-800 py-2"
                      >
                        <span className="text-white">{tech.name}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex  items-end justify-end">
                    {port.link ? (
                      <a
                        href={port.link}
                        target="_blank"
                        className="transition duration-500 hover:text-orange-500 flex flex-col rounded-full w-20 h-20 bg-gray-800 p-0 border-0  items-center justify-center text-gray-500 ml-4"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="currentColor"
                          className="bi bi-globe"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
                        </svg>
                        <p>Demo</p>
                      </a>
                    ) : null}

                    {port.code_link ? (
                      <a
                        href={port.code_link}
                        target="_blank"
                        className="transition duration-500 hover:text-orange-500 flex flex-col rounded-full w-20 h-20 bg-gray-800 p-0 border-0  items-center justify-center text-gray-500 ml-4"
                      >
                        <svg
                          className="fill-white bi bi-github"
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                        <p className="">Code</p>
                      </a>
                    ) : null}

                    {port.internal ? (
                      <Link
                        to={port.internal}
                        className="transition duration-500 hover:text-orange-500 flex flex-col rounded-full w-20 h-20 bg-gray-800 p-0 border-0  items-center justify-center text-gray-500 ml-4"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="currentColor"
                          className="bi bi-globe"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
                        </svg>
                        <p>
                          {cvinfo.language ? 'Ver más': 'See more'}
                        </p>
                      </Link>
                    ) : null}
                  </div>
                </div>
                <img
                  alt={port.id}
                  className="lg:w-1/2 w-full lg:h-auto  object-cover object-center rounded"
                  src={port.img}
                />
              </div>
            </div>
          </section>
        ))}
      </div>
    </Layout>
  );
}

export { Portfolio };
