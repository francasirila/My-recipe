import styles from "./footer.module.css";

export default function Contact() {
  return (
    <main className={styles.main}>
        <div className={styles.heading}>
          <img src="/footer.png" alt="footer" width="25%" />
        </div>
      <div className={styles.footer}>
      



      
<div className={styles.socials}>
      <div className={styles.columns}>
        <div className={styles.columns2}>
          <h4>(+254) 7456797467</h4>
          <p>Get in touch with our amazing chefs at any time of the day</p>
        </div>

        <div className={styles.columns3}>
          <h4>franca@gmail.com</h4>
          <p>Suggest your favourite recipe to be published on our website</p>
        </div>

        <div className={styles.columns4}>
          <h4>Nairobi Karen</h4>
          <p>Visit us personally and enjoy the art of food making</p>
        </div>
      </div>

      <div className={styles.navigation}>
        <div>
          <h6>Dishes</h6>
          <p>The art of making food</p>
        </div>

        <div>
          <h6>Navigation</h6>
          <p>
            {" "}
            Home
            <br />
            Recipes
            <br />
            Contacts
          </p>
        </div>
        <div>
          <h6>Nairobi Karen</h6>
          <h6> (+254) 75637268</h6>
          <h6>franca@gmail.com</h6>
        </div>
      </div>
      </div>
      </div>
    </main>
  );
}
