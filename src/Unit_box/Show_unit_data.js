import unit_data from "./unit_data";
import styles from "./Unit_box.module.css";

function Show_unit_data() {
  return (
    <div className={styles.unit_data}>
      <h3>
        We help with selection, purchase and placement of cryptocurrency mining
        equipment
      </h3>
      {unit_data.map((element) => (
        <div className={styles.element_box} key={element.id}>
          <img src={element.logo} alt="img" />
          <p>{element.text}</p>
        </div>
      ))}
      <button>Select equipment</button>
    </div>
  );
}

export default Show_unit_data;
