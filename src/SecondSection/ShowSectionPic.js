import { useEffect } from "react";
import second_section_data from "./secondSrctionData";
import styles from "./SecondSection.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function ShowSectionPic() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.section_pic}>
      <div className={styles.pic_box}>
        {second_section_data.map((element) => (
          <div
            key={element.id}
            className={styles.box}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img src={element.img} alt="img" width={"300px"} />
            <p>{element.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowSectionPic;
