import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        
        <div className="nav">
          <div className="logo">
            logo
          </div>
          <div className="profile">
            profile
          </div>
        </div>
       
      
       <div className="landing">
         <h1>Franca's kitchen</h1>
         <p>Explore the amazing dishes from our kitchen</p>
       </div>
       <button className="butt">Recipes</button>
       <footer href="">Setting</footer>
     </main>
   </div>
   
        
  );
}
