import Styles from "./RecipeCard.module.css";
import Image from "next/image";

export default function RecipeCard() {
  const cards = [
    {
      id: 1,
      name: "Classic Sourdough",
      blurb:
        "A crusty, artisanal loaf featuring a complex, tangy crumb structure.",
      rating: 5,
      image: "/image1.jpg",
    },
    {
      id: 2,
      name: "Homemade Pasta",
      blurb: "Silky egg dough rolled thin for the ultimate fresh noodles.",
      rating: 5,
      image: "/food2.jpg",
    },
    {
      id: 3,
      name: "Cast Iron Pizza",
      blurb:
        "Thick, crispy crust loaded with bubbling mozzarella and fresh basil.",
      rating: 4,
      image: "/pizza.jpg",
    },
    {
      id: 4,
      name: "French Macarons",
      blurb:
        "Delicate almond meringue shells sandwiched with rich chocolate ganache.",
      rating: 5,
      image: "/macaroons.jpg",
    },
    {
      id: 5,
      name: "Slow Cooked Chili",
      blurb: "Hearty beef and beans simmered all day with smoky spices.",
      rating: 4,
      image: "/chilli.jpg",
    },
    {
      id: 6,
      name: "Berry Galette",
      blurb:
        "A rustic, free-form pastry tart bursting with seasonal summer berries.",
      rating: 5,
      image: "/berry.jpg",
    },
    {
      id: 7,
      name: "Creamy Tonkotsu Ramen",
      blurb: "Rich, velvety pork broth served with tender chashu and noodles.",
      rating: 5,
      image: "/ramen2.jpg",
    },
    {
      id: 8,
      name: "Fluffy Pancakes",
      blurb:
        "Buttermilk hotcakes stacked high and drenched in pure maple syrup.",
      rating: 4,
      image: "/pancakes.jpg",
    },
    {
      id: 9,
      name: "Thai Green Curry",
      blurb:
        "A vibrant, aromatic coconut curry packed with crisp garden vegetables.",
      rating: 4,
      image: "/curry.jpg",
    },
    {
      id: 10,
      name: "Decadent Fudge Brownies",
      blurb:
        "Intensely fudgy chocolate squares with a shiny, crinkly top crust.",
      rating: 5,
      image: "/brownies.png",
    },
    {
    id: 11,
    name: "Gourmet Smash Burger",
    blurb: "Double seared patties with melted cheddar, crisp pickles, and signature house sauce.",
    rating: 5,
    image: "/burger.jpg",
  },
  {
    id: 12,
    name: "Artisan Avocado Toast",
    blurb: "Thick sourdough topped with smashed avocado, poached egg, and chili flakes.",
    rating: 5,
    image: "/avocado.jpg",
  },
  ];

  return (
    <div className={Styles.recipecard}>
      {cards.map((card, index) => (
        <div key={card.id} className={Styles.singleCard}>
          <div className={Styles.emoji}>{card.emoji}</div>
          <div className={Styles.image}>
            <Image src={card.image} alt={card.name} width={250} height={300} />
          </div>
          <h3 className={Styles.cardName}>{card.name}</h3>
          <p className={Styles.cardBlurb}>{card.blurb}</p>
          <div className={Styles.rating}>{"⭐".repeat(card.rating)}</div>
        </div>
      ))}
    </div>
  );
}
