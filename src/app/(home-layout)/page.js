import './Home.css'
import Banner from "../Components/Shared/UserShared/Banner/Banner";
import OurBasicInfo from "../Components/Shared/UserShared/OurBasicInfo/OurBasicInfo";
import OurCertificates from "../Components/Shared/UserShared/OurCertificates/OurCertificates";
import OurClients from "../Components/Shared/UserShared/OurClients/OurClients";
import OurExcellence from "../Components/Shared/UserShared/OurExcellence/OurExcellence";
import OurGallery from "../Components/Shared/UserShared/OurGallery/OurGallery";
import OurProject from "../Components/Shared/UserShared/OurProject/OurProject";
import OurProperty from "../Components/Shared/UserShared/OurProperty/OurProperty";
import OurVIsion from "../Components/Shared/UserShared/OurVIsion/OurVIsion";


export const metadata = {
  title: "Home || Concrare",
  description: "Developers Choices",
};

const Home = () => {
  return (
    <main className=" home-body">
      <Banner />
      <OurProject/>
      <OurProperty/>
      <OurGallery/>
      <OurVIsion/>
      <OurExcellence/>
      <OurClients/>
      <OurCertificates/>
      <OurBasicInfo/>
    </main>
  );
}

export default Home;
