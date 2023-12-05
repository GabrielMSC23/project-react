import { Routes, Route } from "react-router-dom";

import Home from "./home";
import Dash from "./dash";
import Avatar from "./avatar";
import Trailer from "./Trailer_invasao";
import Trailerhora from "./Plano_Riodejaneiro";
import Trailerjhon from "./Trailer_Jhonwick";
import TrailerTWD from "./Trailer_TWD";
import Trailerp from "./Trailer_powerrangers"
import TrailerM from "./Trailer_Mandalorian";

const Main = () => (
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/dash" element={<Dash/>}/>
        <Route exact path="/avatar" element={<Avatar/>}/>
        <Route exact path="/Trailer_invasao" element={<Trailer/>}/>
        <Route exact path="/Trailer_horadorush" element={<Trailerhora/>}/>
        <Route exact path="/Trailer_Jhonwick" element={<Trailerjhon/>}/>
        <Route exact path="/Trailer_TWD" element={<TrailerTWD/>}/>
        <Route exact path="/Trailer_powerrangers" element={<Trailerp/>}/>
        <Route exact path="/Trailer_Mandalorian" element={<TrailerM/>}/>
    </Routes>
)
export default Main;


