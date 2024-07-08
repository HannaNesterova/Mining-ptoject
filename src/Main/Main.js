import { useEffect, useState } from "react";
import styles from "./Main.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import ModuleWindow from "../ModuleWindow/ModuleWindow";

function Main() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleModal = () => {
    setModalIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.background}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <h1>
          {" "}
          BECOME A PART <span>OF THE MINING BUSINESS</span>
        </h1>
        <p>
          We provide services on selection and configuration of computing
          equipment to create passive income with the help of high-tech data
          centers and our own pool
        </p>
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
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className={styles.buttons}
        >
          <button onClick={handleModal}>Start mining</button>
          <button>Details</button>
        </div>
      </div>
    </div>
  );
}

export default Main;
