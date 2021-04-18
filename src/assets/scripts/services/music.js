import menuTrack1 from "../../sound/menu/sappheiros-embrace.mp3"
import menuTrack2 from "../../sound/menu/Go Go Go - Kwon.mp3"
import menuTrack3 from "../../sound/menu/Ocean View - Patrick Patrikios.mp3"
import menuTrack4 from "../../sound/menu/Polyphonic Congas - Unicorn Heads.mp3"
import menuTrack5 from "../../sound/menu/Space Station Experience - Unicorn Heads.mp3"

import dramaTrack1 from "../../sound/drama/A Fever - Devon Church.mp3"
import dramaTrack2 from "../../sound/drama/Average - Patrick Patrikios.mp3"
import dramaTrack3 from "../../sound/drama/Forget Me Not - Patrick Patrikios.mp3"
import dramaTrack4 from "../../sound/drama/Weak Knight - Devon Church.mp3"


import gameTrack1 from "../../sound/game/Arpy - Dan Henig.mp3"
import gameTrack2 from "../../sound/game/Cover - Patrick Patrikios.mp3"
import gameTrack3 from "../../sound/game/Disco Heart - Coyote Hearing.mp3"
import gameTrack4 from "../../sound/game/Moons - Patrick Patrikios.mp3"
import gameTrack5 from "../../sound/game/Numb Limb Lips - The 129ers.mp3"
import gameTrack6 from "../../sound/game/Please Don't Go - Jeremy Black.mp3"
import gameTrack7 from "../../sound/game/Sink Whole Dream - The 129ers.mp3"

export function useDrameMusic(){
    
    const dramaTracks = [
        {
            "artist"    :   "Devon Church",
            "track"     :   "A Fever",
            "file"      :   dramaTrack1
        },
        {
            "artist"    :   "Patrick Patrikios",
            "track"     :   "Average",
            "file"      :   dramaTrack2
        },
        {
            "artist"    :   "Patrick Patrikios",
            "track"     :   "Forget Me Not",
            "file"      :   dramaTrack3
        },
        {
            "artist"    :   "Devon Church",
            "track"     :   "Weak Knight",
            "file"      :   dramaTrack4
        },
    ]
}
export function useGameMusic(){

    const gameMusic = [
        {
            "artist"    :   "Dan Hening",
            "track"     :   "Arpy",
            "file"      :   gameTrack2
        },
        {
            "artist"    :   "Patrick Patrikios",
            "track"     :   "Cover",
            "file"      :   gameTrack3
        },
        {
            "artist"    :   "Coyote Hearing",
            "track"     :   "Disco Heart",
            "file"      :   gameTrack1
        },
        {
            "artist"    :   "Patrick Patrikios",
            "track"     :   "Moons",
            "file"      :   gameTrack4
        },   
        {
            "artist"    :   "The 129ers",
            "track"     :   "Numb Limb Lips",
            "file"      :   gameTrack5
        },   
        {
            "artist"    :   "Jeremy Black",
            "track"     :   "Please Don't Go",
            "file"      :   gameTrack6
        },
        {
            "artist"    :   "The 129ers",
            "track"     :   "Sink Whole",
            "file"      :   gameTrack7
        }   
    ]

    return gameMusic
}

export function useMenuMusic(){

    const menuMusic = [
        {
            "artist"    :   "sappheiros",
            "track"     :   "embrace",
            "file"      :   menuTrack1
        },
        {
            "artist"    :   "Known",
            "track"     :   "Go Go Go",
            "file"      :   menuTrack2
        },
        {
            "artist"    :   "Patrick Patrikios",
            "track"     :   "Ocean View",
            "file"      :   menuTrack3
        }, 
        {
            "artist"    :   "Unicorn Heads",
            "track"     :   "Polyphonic Congas",
            "file"      :   menuTrack4
        }, 
        {
            "artist"    :   "Unicorn Heads",
            "track"     :   "Space Station Experience",
            "file"      :   menuTrack5
        }
    ]  

    return menuMusic
}