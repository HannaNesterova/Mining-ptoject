import { useEffect } from "react";
import styles from "./Unit_box.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import spaceCar from "../img/space_car.png";
import ShowUnitData from "./ShowUnitData";

function UnitBox() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.container}>
      <h2>Creation of a revenue cell</h2>
      <div
        className={styles.unit_variants}
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <span>Selection and purchase of equipment</span>
        <span>Hosting your equipment in GTeh data center</span>
        <span>Equipment maintenance and repair</span>
      </div>

      <div className={styles.unit_box_section}>
        <div className={styles.spaceCar}>
          <img src={spaceCar} alt="space" />
        </div>
        <div>
          <ShowUnitData />
        </div>
      </div>
    </div>
  );
}

export default UnitBox;
