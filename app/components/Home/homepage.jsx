import styles from "./homepage.module.css";
import Image from "next/image";

export default function Homepage() {
  return (
    <main>
      <div className={styles.entirebody}>
        <div className={styles.body}>
          <p className={styles.passage1}>your kitchen but make it pretty</p>
          <h1>Cook something <br/> <span className={styles.heading}>sweet</span> today</h1>
          <p className={styles.passage2}>
           Blush & basil is your cozy corner for healthy bowls,<br/> 
           cute little snacks and dreamy drinks-search by whats<br/> 
             already in your fridge and save your favorites for later
          </p>
          </div>

        <div className={styles.image}>
          <Image src="/macs.png" alt="food" width={450} height={450} />
        </div>
    </div>
    <div className={styles.butt}>
              <button style={{ borderRadius: "23px",width: "8vw", backgroundColor: "#D6365E", color: "white", border: "none"}}>find a recipe for me</button>
              <button style={{ borderRadius: "23px",width: "8vw", color: "#D6365E",backgroundColor: "#ffffff", border: "1px solid #D6365E"}}>browse collection</button>
</div>
    </main>
  );
}
