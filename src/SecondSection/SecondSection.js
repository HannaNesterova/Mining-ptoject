import { useEffect, useState } from "react";
import styles from "./SecondSection.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import ModuleWindow from "../ModuleWindow/ModuleWindow";

function SecondSection() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModal = () => {
    setModalIsOpen((prev) => !prev);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.background}>
      <div className={styles.overlay}></div>

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

      <div className={styles.container}>
        <h1>
          {" "}
          Provide <span>sustainable income </span>
          from mining
        </h1>
        <p>Own physical server infrastructure</p>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className={styles.buttons}
        >
          <button onClick={handleModal}>Start mining</button>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
