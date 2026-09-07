import styles from "./page.module.css";
import Footer from "../components/footer/footer";

export default function Contact() {
  return (
    <div className={styles.body}>
    <div className={styles.form}> 
      <form action="/submit" method="post">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
        />

        <label htmlFor="contact">Contact:</label>
        <input
          type="tel"
          id="contact"
          name="contact"
          placeholder="Phone number"
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Type your message"
        />

        <button className={styles.button} type="submit">
          Send
        </button>
      </form>
    
    </div>
     <Footer /> 
    </div>
    
  );
}