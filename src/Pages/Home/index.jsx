import React from "react";
import { About, Contact, Experiences, Home, Portfolio, Skills } from "../../components";
import { useCvInfo } from "../../context";

function HomePage() {
  const cvinfo = useCvInfo();

  return (
    <>
      {/* Here goes the About section */}
      <div className="bg-first flexCenter darkMode paddingX">
        <div className="boxWidth">
          <Home language={cvinfo.language} setLanguage={cvinfo.setLanguage} />
        </div>
      </div>

      {/* Here goes the About section */}
      <div className="bg-first flexCenter darkMode paddingX">
        <div className="boxWidth">
          <About language={cvinfo.language} setLanguage={cvinfo.setLanguage} />
        </div>
      </div>

      {/* Here goes the Skills Experiences Portfolio Testimonials Contact Footer sections */}
      <div className="bg-first paddingX flexCenter darkMode">
        <div className="boxWidth">
          <Skills language={cvinfo.language} />
          <Experiences language={cvinfo.language} className="-z-10" />
          <Portfolio language={cvinfo.language} />
          {/* <Testimonials /> */}
          <Contact language={cvinfo.language} />
        </div>
      </div>
    </>
  );
}

export { HomePage };
