import { AnimatePresence, motion } from "framer-motion";

interface IProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const Modal = ({ showModal, setShowModal }: IProps) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
        ></motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
