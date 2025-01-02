import { Routes , Route} from "react-router-dom";
import Home from "./pages/home";
import Userlogin from "./pages/Userlogin";
import Captionlogin from "./pages/Captionlogin";
import Usersignup from "./pages/Usersignup";
import Captionsignup from "./pages/Captionsignup";
import Userprofile from "./pages/Userprofile";
import Captionprofile from "./pages/Captionprofile";
import Index from "./pages/Index";
import UserProtedWrap from "./components/UserProtedWrap";
import HomeProtedWrap from "./components/HomeProtedWrap";
import Ridding from "./pages/Ridding";
import CaptionHome from "./pages/CaptionHome";
import CaptionRiding from "./pages/CaptionRiding";

export default function App() {
  return (
  <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/userlogin" element={<Userlogin />} />
      <Route  path="/usersignup" element={<Usersignup/>}/>
      <Route  path="/userprofile" element={<Userprofile/>}/>
      <Route path="/captionlogin" element={<Captionlogin />} />
      <Route path="/captionsignup" element={<Captionsignup />} />
      <Route path="/captionprofile" element={<Captionprofile />} />
      <Route path="/captionhome" element={<CaptionHome/>} />
      <Route path="/captionhome" element={<CaptionHome/>} />
      <Route path="/captionriding" element={<CaptionRiding/>} />
      <Route path="/ride" element={<Ridding/>} />
      <Route path="/home" element={<Index/>} />

      {/* <Route path="/home" element={
        <HomeProtedWrap>
        <Index />
        </HomeProtedWrap>

      } /> */}

      <Route path="*" element={<h1>Not Found Page </h1>} />
    </Routes>
      
  </>
  );
}
