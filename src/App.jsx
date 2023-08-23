// import styles from "./constants/style"
import { BrowserRouter, HashRouter, Route, Routes, useRoutes } from "react-router-dom";
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
      <HashRouter>
        <Layout>
          
              <div className="boxWidth">
                <Header />
              </div>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/portfolio" element={<Portfolio />} />
              </Routes>

                {/* <AppRoutes /> */}

            {/* Here goes the About section */}
            <div className="bg-second flexCenter p-2 paragraph">
              <div className="boxWidth">
                <Footer 
                // language={cvinfo.language}
                />
              </div>
            </div>

        </Layout>
      </HashRouter>
    </CvProvider>
  )
}

export default App