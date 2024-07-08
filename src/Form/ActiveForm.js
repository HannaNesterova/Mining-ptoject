import styles from "./Form.module.css";

function ActiveForm() {
  return (
    <div>
      <form className={styles.form}>
        <input type="text" placeholder="Your name" />
        <input type="email" placeholder="E-mail" />
        <input type="text" placeholder="Your text" />
        <button>Send</button>
        <p>Stay up to date with all our events. Join #gteh in Telegram!</p>
      </form>
    </div>
  );
}

export default ActiveForm;
