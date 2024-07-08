import emailjs from "emailjs-com";
import styles from "./ModuleWindow.module.css";
import { useState } from "react";

function ModuleWindow() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmite = (e) => {
    e.preventDefault();

    const serviceId = "service_vmivskl";
    const templateId = "template_0wdas6u";
    const publicKey = "AT7LUyK1OrB7dTNXn";

    const templateParams = {
      form_name: name,
      form_email: email,
      to_name: "Maining",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        alert("Emaile sent successfully", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        alert("Error", error);
      });
  };
  return (
    <div className={styles.main_module}>
      <h5>Fill the form, and we'll contact you</h5>
      <form onSubmit={handleSubmite} className={styles.form}>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Your text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">SEND</button>
      </form>
    </div>
  );
}

export default ModuleWindow;
