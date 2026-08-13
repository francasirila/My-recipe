import styles from "./footer.module.css";

export default function Contact() {
  return (
    <main>
      <div className={styles.heading}>
        <h1>Contact Us</h1>
        <p>Thank you for dinning with us</p>
      </div>

      <div>
        <div>
          <div className={styles.form1}>
            <div>
              <form action="/submit" method="post">
                <label for="name"> Name: </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                ></input>
              </form>
            </div>
            <div>
              <form action="/submit" method="post">
                <label for="contact">Contact: </label>
                <input
                  type="int"
                  id="contact"
                  placeholder="phone number"
                ></input>
              </form>
            </div>
          </div>

          <div className={styles.form2}> 
            <form action="/submit" method="post">
              <label for="email"> Email: </label>
              <input
                type="text"
                id="email"
                placeholder="Enter your email"
              ></input>
            </form>
            </div>

            <div className={styles.form3}>
                <div>
              <form>
                <label for="message">Message: </label>
                <input
                  type="text"
                  id="message"
                  placeholder="type your message"
                ></input>
              </form>
              <button type="submit">Send</button>
              </div>
          

          <div className={styles.subscribe}>
            <h3>New channel</h3>
            <p>
              Don't get left out when new recipes are out!
              <br />
              Subsribe to our news channel to get latest notifications{" "}
            </p>

            <form action="/submit" method="post">
              <label for="email"> email: </label>
              <input type="text" id="letter" placeholder="email"></input>

            </form>
                          <button type="submit">Subscribe</button>

          </div>
            </div>
        </div>
      </div>

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

      <div className={styles.footer}>
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
    </main>
  );
}
