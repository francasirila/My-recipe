import styles from "./homepage.module.css";
import Image from "next/image";

export default function Homepage() {
  const cards = [
    {
      id: 1,
      image: "/strawberry.jpg",
      name: "Veggie bowl",
      description: "a bowlful of good vibes",
      time: "20 min",
    },
    {
      id: 2,
      image: "/croissants.jpg",
      name: "Berry bites",
      description: "a little sweetness for your day",
      time: "15 min",
      path: "/browse",
    },
    {
      id: 3,
      image: "/lemoncake.jpg",
      name: "Dreamy bowl",
      description: "fresh, colorful and feel-good",
      time: "25 min",
    },
    {
      id: 4,
      image: "/brownies.png",
      name: "Sweet treat",
      description: "something lovely for later",
      time: "10 min",
    },
  ];

  return (
    <main className={styles.main}>

      {/* HERO SECTION */}
      <section className={styles.entirebody}>

        <div className={styles.body}>
          <p className={styles.passage1}>
            your kitchen but make it pretty
          </p>

          <h1>
            Cook something{" "}
            <span className={styles.heading}>sweet</span> today
          </h1>

          <p className={styles.passage2}>
            Blush & Basil is your cozy corner for healthy bowls,
            cute little snacks and dreamy drinks — search by what's
            already in your fridge and save your favorites for later.
          </p>
        </div>

        <div className={styles.image}>
          <Image
            src="/vanilla.png"
            alt="Vanilla cake with blueberries and lemon"
            width={700}
            height={300}
            priority
          />
        </div>

      </section>


      {/* CTA BUTTON */}
      <div className={styles.butt}>
        <button>
          find a recipe for me
        </button>
      </div>


      {/* EXPLORE SECTION */}
      <section className={styles.explore}>

        <div className={styles.intro}>
          <p className={styles.cravingText}>
            pick your craving
          </p>

          <h2>
            three little worlds to explore
          </h2>

          <p className={styles.introDescription}>
            whichever mood you are in, we've got a plate for it
          </p>
        </div>


        <div className={styles.samples}>

          <div className={`${styles.sampleCard} ${styles.healthy}`}>
            <h4>Healthy</h4>
            <p>leafy, colorful, feel-good plates</p>
          </div>

          <div className={`${styles.sampleCard} ${styles.snacks}`}>
            <h4>Snacks</h4>
            <p>cute little bites for any craving</p>
          </div>

          <div className={`${styles.sampleCard} ${styles.drinks}`}>
            <h4>Drinks</h4>
            <p>sippable, dreamy, a little floral</p>
          </div>

        </div>

      </section>


      {/* RECIPE CARDS */}
      <section className={styles.recipeSection}>

        <div className={styles.recipeIntro}>
          <p>something you might love</p>
          <h2>little recipes for your day</h2>
        </div>

        <div className={styles.recipeGrid}>

          {cards.map((card) => (
            <div
              className={styles.recipeCard}
              key={card.id}
            >

              <div className={styles.recipeImage}>
                <Image
                  src={card.image}
                  alt={card.name}
                  width={700}
                  height={220}
                />
              </div>

              <div className={styles.recipeInfo}>
                <h3>{card.name}</h3>

                <p>{card.description}</p>

                <span>{card.time}</span>
              </div>

            </div>
          ))}

        </div>

      </section>

    </main>
  );
}