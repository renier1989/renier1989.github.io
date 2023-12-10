import React, { createContext, useContext, useEffect, useState } from "react";
const CvContext = createContext();

function CvProvider({ children }) {
  // const [darkMode, setDarkMode] = useState(false);
  // FALSE = English - TRUE = Spanish
  const [language, setLanguage] = useState(false);
  const [modal, setModal] = useState(false);
  const [infoModal, setInfoModal] = useState({});
  const handleOpenModal = (info) => {
    setModal(!modal);
    setInfoModal(info);
  };

  const salirDePagina = (url) => {
    window.open(url, "_blank");
  };

  

  const closeModal = () => {
    setModal(false);
  };

  return (
    <CvContext.Provider
      value={{
        language,
        setLanguage,
        modal,
        handleOpenModal,
        closeModal,
        infoModal,
        salirDePagina
      }}
    >
      {children}
    </CvContext.Provider>
  );
}

function useCvInfo() {
  const cvinfo = useContext(CvContext);
  return cvinfo;
}

export { CvProvider, useCvInfo };
