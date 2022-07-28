import spaceship from '../assets/img/spaceship.png'
import laser from '../assets/img/laser.png'

export default function ImagePreloader(){
    return(
        <div className="images hidden">
            <img id = 'spaceship' src={ spaceship } />
            <img id = 'laser' src={ laser } />
        </div>
    )
}