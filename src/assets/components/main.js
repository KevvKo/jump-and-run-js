import {
    Switch,
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
            <Switch>
                <Route exact path="/" children={<Home />} />
                <Route path="/levelSelection" children={<LevelSelection />} />
                <Route path="/play" children={<Play />} />
                <Route path="/options" children={<Options />} />
                <Route path="/credits" children={<Credits />} />
                <Route path="/guide" children={<Guide />} />
            </Switch>
        </div>
    )
}

export default AppMain