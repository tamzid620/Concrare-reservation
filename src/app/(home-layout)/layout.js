"use client" ;
import { useEffect, useState } from "react";
import HomeLoading from "../Components/HomeLoading/HomeLoading";
import Footer from "../Components/Shared/UserShared/Footer/Footer";
import Navbar from "../Components/Shared/UserShared/Navbar/Navbar";
import "../globals.css";

const UserLayout = ({ children })  => {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 
    
    return () => clearTimeout(timer);
    
  }, []);

  return (
    <html lang="en">
      <body>
     {loading ? (
          <HomeLoading />
        ) : (
          <>
            <Navbar />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}

export default UserLayout ;
