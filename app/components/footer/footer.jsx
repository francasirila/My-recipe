import styles from "./footer.module.css";

export default function Contact() {
  return (
    <main className={styles.main}>
        <div className={styles.heading}>
          <img src="/footer.png" alt="footer" width="25%" />
        </div>
      <div className={styles.footer}>
      

        <div className={styles.form}>
          <form action="/submit" method="post">
            <label for="name"> Name: </label>
            <input type="text" id="name" placeholder="Enter your name"></input>
          </form>

          <form action="/submit" method="post">
            <label for="contact">Contact: </label>
            <input
              style={{
                alignItems: "center",
                width: "100%",
                height: "100%",
                border: "1px solid #ccc",
                borderRadius: "4px",
                lineHeight: "2.5",
                padding: "10px",
                boxSizing: "border-box",
              }}
              type="number"
              id="contact"
              placeholder="phone number"
            ></input>
          </form>

          <form action="/submit" method="post">
            <label for="email"> Email: </label>
            <input
              type="text"
              id="email"
              placeholder="Enter your email"
            ></input>
          </form>

          <form>
            <label for="message">Message: </label>
            <input
              type="text"
              id="message"
              placeholder="type your message"
            ></input>
          </form>
          <button className={styles.button} type="submit">
            Send
          </button>
        </div>


      
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
