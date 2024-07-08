import { useEffect } from "react";
import dataPrograms from "./dataPrograms";
import styles from "./Programs.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function ShowPrograms() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.container}>
      <h3>
        Proprietary <span>software</span>
      </h3>
      {dataPrograms.map((element) => (
        <div
          className={styles.element_box}
          key={element.id}
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <span> ✔︎ </span> <p>{element.text}</p>
        </div>
      ))}
      <button>Select equipment</button>
    </div>
  );
}

export default ShowPrograms;
