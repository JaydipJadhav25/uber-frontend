import { Routes , Route} from "react-router-dom";
import Home from "./pages/home";
import Userlogin from "./pages/Userlogin";
import Captionlogin from "./pages/Captionlogin";
import Usersignup from "./pages/Usersignup";
import Captionsignup from "./pages/Captionsignup";
import Userprofile from "./pages/Userprofile";
import Captionprofile from "./pages/Captionprofile";

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
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
      
  </>
  );
}
