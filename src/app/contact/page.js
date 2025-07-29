import styles from "./contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h1>
        <a href={"contact/email"}>E-mail</a>
      </h1>
      <h1>
        <a href={"contact/github"}>GitHub</a>
      </h1>
    </div>
  );
}
