import Image from "next/image";
import Banner from "../Components/Shared/UserShared/Banner/Banner";
import OurProject from "../Components/Shared/UserShared/OurProject/OurProject";


export const metadata = {
  title: "Home || Concrare",
  description: "Developed by marketien",
};

const Home = () => {
  return (
    <main className="-mt-[160px]">
      <Banner />
      <OurProject/>
    </main>
  );
}

export default Home;
