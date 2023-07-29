// import styles from "./constants/style"
import { BrowserRouter, useRoutes } from "react-router-dom";
import { Header, Footer } from "./components"
// import { useState } from "react"
import { Layout } from "./components/Layout";
import { HomePage } from "./Pages/Home";
import { Portfolio } from "./Pages/Portfolio";
import { CvProvider, useCvInfo } from "./context";

const AppRoutes = () => {

  let routes = useRoutes([
    {path : '/', element : <HomePage />},
    {path : '/portfolio', element : <Portfolio />}
  ]);

  return routes;
}

function App() {
  // const cvinfo = useCvInfo();

  
  return (
    <CvProvider>
      <BrowserRouter>
        <Layout>
              <div className="boxWidth">
                <Header 
                  // language={cvinfo.language}
                  // setLanguage={cvinfo.setLanguage}
                  />
              </div>

                <AppRoutes />

            {/* Here goes the About section */}
            <div className="bg-second flexCenter p-2 paragraph">
              <div className="boxWidth">
                <Footer 
                // language={cvinfo.language}
                />
              </div>
            </div>

        </Layout>
      </BrowserRouter>
    </CvProvider>
  )
}

export default App