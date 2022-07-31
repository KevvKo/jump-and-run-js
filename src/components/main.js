import React from "react";
import {
    Routes,
    Route
} from "react-router-dom";

import Home from '../routes/home';
import ChooseDifficulty from '../routes/chooseDifficulty';
import Play from '../routes/play';
import Options from '../routes/options';
import Credits from '../routes/credits';
import Guide from '../routes/guide';
import StarBackground from './starBackground';

function AppMain(){
    return(
        <div className="main">
            <StarBackground />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chooseDifficulty" element={<ChooseDifficulty />} />
                <Route path="/play" element={<Play />} />
                <Route path="/options" element={<Options />} />
                <Route path="/credits" element={<Credits />} />
                <Route path="/guide" element={<Guide />} />
            </Routes>
        </div>
    );
}

export default AppMain;