import { useState } from "react";
import styles from "./Form.module.css";
import ModuleWindow from "../ModuleWindow/ModuleWindow";

function Form() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModal = () => {
    setModalIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        {modalIsOpen && (
          <div className={styles.modalOverlay} onClick={handleModal}>
            <div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <ModuleWindow />
            </div>
          </div>
        )}
        <h3>
          {" "}
          Provide <span>sustainable income </span>
          from mining
        </h3>
        <p>Own physical server infrastructure</p>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className={styles.buttons}
        >
          <button onClick={handleModal}>Start mining</button>
        </div>
        <h6>Become part of the community</h6>
        <ModuleWindow />
      </div>
    </div>
  );
}

export default Form;
