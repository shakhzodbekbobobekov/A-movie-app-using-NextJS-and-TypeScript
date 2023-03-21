import MuiModal from "@mui/material/Modal";
import { useInfoStore } from "../../store/index";
import { FaTimes } from "react-icons/fa";

const Modal = () => {
  const { modal, setModal, currentMovie } = useInfoStore();

  const handleClose = () => {
    setModal(false);
  };

  return (
    <>
      <MuiModal open={modal} onClose={handleClose}>
        <>
          <button
            onClick={() => setModal(false)}
            className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818]"
          >
            <FaTimes />
          </button>
          <p >{currentMovie.overview}</p>
        </>
      </MuiModal>
    </>
  );
};

export default Modal;
