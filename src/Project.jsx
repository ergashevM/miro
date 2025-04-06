import "./App.css";
import Navigation from "./components/A_navigation";
import OfferForRegister from "./components/B_offer";
import Sponsors from "./components/C_sponsors";
import Collaboration from "./components/D_collaboration";
import Unity from "./components/E_unity";
import Online_work from "./components/F_online_work";
import Box from "./components/G_banner";
import Construction from "./components/H_construction";
import Teams from "./components/I_teams";
import Results from "./components/J_results";
import Comments from "./components/K_comments";
import Ad from "./components/L_ad";
import Footer from "./components/M_footer";

function Project() {
  return (
    <div>
      <Navigation />
      <OfferForRegister />
      <Sponsors />
      <Collaboration />
      <Unity />
      <Online_work />
      <Box />
      <Construction/>
      <Teams/>
      <Results/>
      <Comments/>
      <Ad/>
      <Footer/>
    </div>
  );
}

export default Project;
