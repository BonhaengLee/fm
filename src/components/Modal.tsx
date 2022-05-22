import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

interface IProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: "200px", opacity: 1, transition: { delay: 0.5 } },
};

const Modal = ({ showModal }: IProps) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="modal"
            variants={modal}
            initial="hidden"
            animate="visible"
          >
            <p>Want to make another pizza?</p>
            <Link to="/">
              <button>Start again </button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
