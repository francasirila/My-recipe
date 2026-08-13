import { Geist, Geist_Mono } from "next/font/google";
import "./global.css";
import Nav from "./components/Nav/nav";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh',
        margin: 0,
        backgroundColor: 'white',
          }}>
        <Nav />
        
        <main style={{ flex: 1, width: '100%',marginTop: "70px", borderTop: "3px solid #D6365E", marginTop: "25px"
 }}>
          {children} 
                 </main>
      </body>
    </html>
  );
}