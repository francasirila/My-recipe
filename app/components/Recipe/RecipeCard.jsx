import Styles from "./RecipeCard.module.css";



export default function  RecipeCard(){
  const cards=[
 {
   id: 1,
   name: "Classic Sourdough",
   blurb: "A crusty, artisanal loaf featuring a complex, tangy crumb structure.",
   rating: 5,
   emoji: "🥖",
   image: '/sourdough.jpg',
 },
 {
   id: 2,
   name: "Homemade Pasta",
   blurb: "Silky egg dough rolled thin for the ultimate fresh noodles.",
   rating: 5,
   emoji: "🍝",
   image: '/fresh_pasta.jpg',
 },
 {
   id: 3,
   name: "Cast Iron Pizza",
   blurb: "Thick, crispy crust loaded with bubbling mozzarella and fresh basil.",
   rating: 4,
   emoji: "🍕",
   image: '/pan_pizza.jpg',
 },
 {
   id: 4,
   name: "French Macarons",
   blurb: "Delicate almond meringue shells sandwiched with rich chocolate ganache.",
   rating: 5,
   emoji: "🧁",
   image: '/macarons.jpg',
 },
 {
   id: 5,
   name: "Slow Cooked Chili",
   blurb: "Hearty beef and beans simmered all day with smoky spices.",
   rating: 4,
   emoji: "🌶️",
   image: '/chili.jpg',
 },
 {
   id: 6,
   name: "Berry Galette",
   blurb: "A rustic, free-form pastry tart bursting with seasonal summer berries.",
   rating: 5,
   emoji: "🥧",
   image: '/berry_galette.jpg',
 },
 {
   id: 7,
   name: "Creamy Tonkotsu Ramen",
   blurb: "Rich, velvety pork broth served with tender chashu and noodles.",
   rating: 5,
   emoji: "🍜",
   image: '/ramen.jpg',
 },
 {
   id: 8,
   name: "Fluffy Pancakes",
   blurb: "Buttermilk hotcakes stacked high and drenched in pure maple syrup.",
   rating: 4,
   emoji: "🥞",
   image: '/pancakes.jpg',
 },
 {
   id: 9,
   name: "Thai Green Curry",
   blurb: "A vibrant, aromatic coconut curry packed with crisp garden vegetables.",
   rating: 4,
   emoji: "🍛",
   image: '/green_curry.jpg',
 },
 {
   id: 10,
   name: "Decadent Fudge Brownies",
   blurb: "Intensely fudgy chocolate squares with a shiny, crinkly top crust.",
   rating: 5,
   emoji: "🍫",
   image: '/brownies.jpg',
 }
];


 return (
  
      <div className={Styles.recipecard}>
        
        {cards.map((card, index) => (
          <div key={card.id} className={Styles.singleCard}>
            <div className={Styles.stepNumber}>{String(index + 1)}</div>
            <div className={Styles.emoji}>{card.emoji}</div>
            <h3 className={Styles.cardName}>{card.name}</h3>
            <p className={Styles.cardBlurb}>{card.blurb}</p>
            <div className={Styles.rating}>{"⭐".repeat(card.rating)}</div>
          </div>
        ))}
    </div>
  );
}
