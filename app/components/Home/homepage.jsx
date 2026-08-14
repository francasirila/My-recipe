import { Cardo } from "next/font/google";
import styles from "./homepage.module.css";
import Image from "next/image";

export default function Homepage() {
  const cards = [
    {
      id: 1,
      image: "/brownies.png",
      name: "Veggie bowl",
      description: "a bowful of good vibes",
      time : "date"

  },
    {
      id: 1,
      image: "/brownies.png",
      name: "Veggie bowl",
      description: "a bowful of good vibes",
      time : "date",
      path : "/browse"

  },  {
      id: 1,
      image: "/brownies.png",
      name: "Veggie bowl",
      description: "a bowful of good vibes",
      time : "date"

  },  {
      id: 1,
      image: "/brownies.png",
      name: "Veggie bowl",
      description: "a bowful of good vibes",
      time : "date"

  },
]
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
          <Image src="/macs.png" alt="food" width={450}   height={450} />
        </div>
    </div>
    <div className={styles.butt}>
              <button style={{ borderRadius: "23px",width: "8vw", backgroundColor: "#D6365E", color: "white", border: "none"}}>find a recipe for me</button>
              <button style={{ borderRadius: "23px",width: "8vw", color: "#D6365E",backgroundColor: "#ffffff", border: "1px solid #D6365E"}}>browse collection</button>
</div>
<div className={styles.explore}>
  <div className={styles.intro}>
    <p style={{color: "#D6365E"}}>pick your craving</p>
    <h2>three little worlds to explore</h2>
    <p style={{color: "#4A2438"}}>whichever mood you are in, we've got a plate for it</p>
  </div>

  <div className={styles.samples}>  
    <div style={{backgroundColor: "#A8C4A2", borderRadius: "20px", padding: "20px"}} >
      <h4>Healthy</h4>
      <p>leafy, colorful, feel good plates</p>
    </div>
    <div style={{backgroundColor: "#FFD97D", borderRadius: "20px",padding: "20px"}}>
       <h4>Snacks</h4>
      <p>cute little bites for any craving</p>
    </div>
    <div style={{backgroundColor: "#D9C7F5", borderRadius: "20px", padding: "20px"}}>
       <h4>Drinks</h4>
      <p>Sippable, dreamy, a little floral</p>
    </div>
  </div>
</div>
<div>
  {cards.map((card) =>{
    <card
    key={card.id}
    image={card.image}
    name={card.name}
    description={card.description}
    />
  }
)
  }
</div>

    </main>
  );
}
