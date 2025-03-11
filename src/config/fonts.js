import { Playfair_Display, Poppins } from "next/font/google";

export const playfair = Playfair_Display ({
   weight: [ "400", "900"],
    subsets: ["latin"],
     preload: true, 
});

export const poppins = Poppins({
   weight: ["300", "400", "700", "900"], 
   subsets: ["latin"],
    preload: true, 
});