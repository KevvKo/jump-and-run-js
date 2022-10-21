import React from "react";
import {
    Routes,
    Route
} from "react-router-dom";

import Home from '../routes/home';
import ChooseDifficulty from '../routes/chooseDifficulty';
import Play from '../routes/play';
import Credits from '../routes/credits';
import StarBackground from './starBackground';
import Highscores from "../routes/highscores";

function AppMain(){
    return(
        <div className="main">
            <StarBackground />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/highscores" element={<Highscores />} />
                <Route path="/chooseDifficulty" element={<ChooseDifficulty />} />
                <Route path="/play" element={<Play />} />
                <Route path="/credits" element={<Credits />} />
            </Routes>
        </div>
    );
}

export default AppMain;