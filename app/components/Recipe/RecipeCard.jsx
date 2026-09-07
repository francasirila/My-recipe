import styles from "./RecipeCard.module.css";
import Image from "next/image";

export default function RecipeCards() {
  const cards = [
    {
      id: 1,
      name: "Classic Sourdough",
      blurb:
        "A crusty, artisanal loaf featuring a complex, tangy crumb structure.",
      time: "45 min",
      image: "/image1.jpg",
    },
    {
      id: 2,
      name: "Homemade Pasta",
      blurb:
        "Silky egg dough rolled thin for the ultimate fresh noodles.",
      time: "30 min",
      image: "/food2.jpg",
    },
    {
      id: 3,
      name: "Cast Iron Pizza",
      blurb:
        "Thick, crispy crust loaded with bubbling mozzarella and fresh basil.",
      time: "35 min",
      image: "/pizza.jpg",
    },
    {
      id: 4,
      name: "French Macarons",
      blurb:
        "Delicate almond meringue shells sandwiched with rich chocolate ganache.",
      time: "50 min",
      image: "/macaroons.jpg",
    },
    {
      id: 5,
      name: "Slow Cooked Chili",
      blurb:
        "Hearty beef and beans simmered all day with smoky spices.",
      time: "1 hr 30 min",
      image: "/chilli.jpg",
    },
    {
      id: 6,
      name: "Berry Galette",
      blurb:
        "A rustic, free-form pastry tart bursting with seasonal summer berries.",
      time: "40 min",
      image: "/berry.jpg",
    },
    {
      id: 7,
      name: "Creamy Tonkotsu Ramen",
      blurb:
        "Rich, velvety pork broth served with tender chashu and noodles.",
      time: "1 hr",
      image: "/tofu.png",
    },
    {
      id: 8,
      name: "Fluffy Pancakes",
      blurb:
        "Buttermilk hotcakes stacked high and drenched in pure maple syrup.",
      time: "20 min",
      image: "/pancakes.jpg",
    },
    {
      id: 9,
      name: "Thai Green Curry",
      blurb:
        "A vibrant, aromatic coconut curry packed with crisp garden vegetables.",
      time: "35 min",
      image: "/curry.jpg",
    },
    {
      id: 10,
      name: "Decadent Fudge Brownies",
      blurb:
        "Intensely fudgy chocolate squares with a shiny, crinkly top crust.",
      time: "30 min",
      image: "/brownies.png",
    },
    {
      id: 11,
      name: "Gourmet Smash Burger",
      blurb:
        "Double seared patties with melted cheddar, crisp pickles, and signature house sauce.",
      time: "25 min",
      image: "/burger.jpg",
    },
    {
      id: 12,
      name: "Artisan Avocado Toast",
      blurb:
        "Thick sourdough topped with smashed avocado, poached egg, and chili flakes.",
      time: "15 min",
      image: "/avocado.jpg",
    },
  ];

  return (
    <div className={styles.recipecard}>
      {cards.map((card) => (
        <div
          key={card.id}
          className={styles.singleCard}
        >
          <div className={styles.image}>
            <Image
              src={card.image}
              alt={card.name}
              width={300}
              height={220}
            />
          </div>

          <h3 className={styles.cardName}>
            {card.name}
          </h3>

          <p className={styles.cardBlurb}>
            {card.blurb}
          </p>

          <span className={styles.time}>
            {card.time}
          </span>
        </div>
      ))}
    </div>
  );
}
