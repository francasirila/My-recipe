import Image from "next/image";
import Homepage from "./components/Home/homepage";
import RecipeCard from "./components/Recipe/RecipeCard";
import styles from  "./page.module.css";

export default function Home() {
  return (
    <main>
      <Homepage/>
       <RecipeCard />
      


        </main>
    
  );
}
