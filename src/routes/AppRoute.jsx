import { BrowserRouter , Routes , Route} from "react-router-dom";
import Home from "../pages/Home";
import Wwepage from "../pages/Wwepage";
import ContactPage from "../pages/ContactPage";
import Loginpage from "../pages/Loginpage";

const AppRoute =()=> {
    return(
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Loginpage/>}/>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/wwe" element={<Wwepage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                
                

                
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoute;