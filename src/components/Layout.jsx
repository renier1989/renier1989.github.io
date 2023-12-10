import Modal from "react-modal";
import { useCvInfo } from "../context";
import ModalDetail from "./ModalDetail";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
  },
};
Modal.setAppElement("#root");

function Layout({ children }) {
  const {modal,closeModal,infoModal} = useCvInfo();
  
  
  return (
    <>
      <div className={`w-full overflow-hidden overflow-x-hidden font-poppins`}>
        {children}
      </div>
      <Modal isOpen={modal} 
      style={customStyles}  
      // className="Modal"
      overlayClassName="Overlay"
      onRequestClose={closeModal}>
              <ModalDetail data={infoModal}/>
      </Modal>
    </>
  );
}

export { Layout };
