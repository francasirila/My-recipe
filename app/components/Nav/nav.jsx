"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "find recipe", path: "/recipe" },
    { name: "browse", path: "/browse" },
    { name: "favorites", path: "/favorites" },
  ];

  return (
    <div style={{
      display: "flex",  
      justifyContent: "flex-start",
      gap: "20px",
      padding: "10px 30px",
      backgroundColor: "white",
      width: "100%",

    }}>
      
      <img 
        src="/macs.png" 
        alt="Logo" 
        className="nav-logo" 
        style={{ height: "40px",marginLeft: '10rem',marginTop: '40px'}} 
      />

      <div 
        className="nav-container"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "15px",
          height:'35px',
          marginLeft: '50rem',
          marginTop: '40px',
        }}
      >
        {menuItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <Link
              className="nav-link"
              key={item.path}
              href={item.path}
              style={{
                color: isActive ? "white" : "#D6365E",
                backgroundColor: isActive ? "#D6365E" : "white",
                display: "inline-flex", 
                padding: "8px 20px", 
                borderRadius: "9999px", 
                textDecoration: "none",


                fontWeight: "500",
                transition: "all 0.2s ease",
              }}
            >
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
