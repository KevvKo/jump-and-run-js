import { useState } from 'react';

import menuTrack1 from "../assets/sound/menu/sappheiros-embrace.mp3";
import menuTrack2 from "../assets/sound/menu/Go Go Go - Kwon.mp3";
import menuTrack3 from "../assets/sound/menu/Ocean View - Patrick Patrikios.mp3";
import menuTrack4 from "../assets/sound/menu/Polyphonic Congas - Unicorn Heads.mp3";
import menuTrack5 from "../assets/sound/menu/Space Station Experience - Unicorn Heads.mp3";

import dramaTrack1 from "../assets/sound/drama/A Fever - Devon Church.mp3";
import dramaTrack2 from "../assets/sound/drama/Average - Patrick Patrikios.mp3";
import dramaTrack3 from "../assets/sound/drama/Forget Me Not - Patrick Patrikios.mp3";
import dramaTrack4 from "../assets/sound/drama/Weak Knight - Devon Church.mp3";


import gameTrack1 from "../assets/sound/game/Arpy - Dan Henig.mp3";
import gameTrack2 from "../assets/sound/game/Cover - Patrick Patrikios.mp3";
import gameTrack3 from "../assets/sound/game/Disco Heart - Coyote Hearing.mp3";
import gameTrack4 from "../assets/sound/game/Moons - Patrick Patrikios.mp3";
import gameTrack5 from "../assets/sound/game/Numb Limb Lips - The 129ers.mp3";
import gameTrack6 from "../assets/sound/game/Please Don't Go - Jeremy Black.mp3";
import gameTrack7 from "../assets/sound/game/Sink Whole Dream - The 129ers.mp3";

import { 
    replaceArtistName, 
    replaceTitleName, 
    stopMusic, 
    playMusic
} from '../store/actions/musicActions';
import { store } from '../store/store';

    
const dramaSounds = [
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
];

const gameSounds = [
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
    },
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
];

export const useMusic = () => {

    let index = 0;
    const [musicPaused, setMusicPaused ] = useState(true);
    const [audioElement] = useState( new Audio(gameSounds[index].file) );

    audioElement.onended = () =>{
  
      index < gameSounds.length ? index += 1 : index = 0;
  
      audioElement.src = gameSounds[index].file;
      audioElement.play();
  
      const artist = gameSounds[index].artist;
      const title = gameSounds[index].track;

      store.dispatch(replaceArtistName(artist));
      store.dispatch(replaceTitleName(title));
    };
  
    const toggleMenuMusic = () => {
    
      if(!audioElement.paused){
        audioElement.pause();
        store.dispatch(stopMusic());
    
      }else{
        const artist = gameSounds[index].artist;
        const title = gameSounds[index].track;

        audioElement.play();

        store.dispatch(replaceArtistName(artist));
        store.dispatch(replaceTitleName(title));
        store.dispatch(playMusic());
      }

      setMusicPaused(prev => !prev); 
    };

    return [musicPaused, toggleMenuMusic, gameSounds, dramaSounds];
};