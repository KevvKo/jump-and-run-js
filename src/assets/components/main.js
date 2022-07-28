import {
    Routes,
    Route
} from "react-router-dom";

import Home from '../../routes/home'
import LevelSelection from '../../routes/levelSelection'
import Play from '../../routes/play'
import Options from '../../routes/options'
import Credits from '../../routes/credits'
import Guide from '../../routes/guide'
import StarBackground from './starBackground'
import './main.css'

function AppMain(){
    return(
        <div className="main">
            <StarBackground />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/levelSelection" element={<LevelSelection />} />
                <Route path="/play" element={<Play />} />
                <Route path="/options" element={<Options />} />
                <Route path="/credits" element={<Credits />} />
                <Route path="/guide" element={<Guide />} />
            </Routes>
        </div>
    )
}

export default AppMain