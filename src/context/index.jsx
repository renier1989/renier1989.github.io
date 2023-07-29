import React, { createContext, useContext, useState } from 'react';
const CvContext = createContext();

function CvProvider({children}) {
// const [darkMode, setDarkMode] = useState(false);
  // FALSE = English - TRUE = Spanish
    const [language, setLanguage] = useState(false);
    
    return (
        <CvContext.Provider value={{
            language,
            setLanguage
        }}>
            {children}
        </CvContext.Provider>
    );
}

function useCvInfo (){
    const cvinfo = useContext(CvContext);
    return cvinfo
}

export {CvProvider, useCvInfo}