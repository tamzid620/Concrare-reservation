import Banner from "../Components/Shared/UserShared/Banner/Banner";
import OurProject from "../Components/Shared/UserShared/OurProject/OurProject";
import OurProperty from "../Components/Shared/UserShared/OurProperty/OurProperty";


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
    </main>
  );
}

export default Home;
