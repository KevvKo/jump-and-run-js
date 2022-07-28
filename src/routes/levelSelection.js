import React from 'react'
import Level from '../components/level'

const LevelSelection = (props) => {
    return(
        <div className="levelSelection flex flex-row flex-wrap justify-center items-center">
            <Level></Level>
            {/* <Level></Level>
            <Level></Level> */}
        </div>
    )
}

export default LevelSelection;