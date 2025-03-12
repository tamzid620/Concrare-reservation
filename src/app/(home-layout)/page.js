import Banner from "../Components/Shared/UserShared/Banner/Banner";
import OurGallery from "../Components/Shared/UserShared/OurGallery/OurGallery";
import OurProject from "../Components/Shared/UserShared/OurProject/OurProject";
import OurProperty from "../Components/Shared/UserShared/OurProperty/OurProperty";
import OurVIsion from "../Components/Shared/UserShared/OurVIsion/OurVIsion";


export const metadata = {
  title: "Home || Concrare",
  description: "Developed by marketien",
};

const Home = () => {
  return (
    <main className="-mt-[160px]">
      <Banner />
      <OurProject/>
      <OurProperty/>
      <OurGallery/>
      <OurVIsion/>
    </main>
  );
}

export default Home;
