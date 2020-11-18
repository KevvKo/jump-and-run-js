import spaceship1 from '../../img/spaceship1.png'
import spaceship2 from '../../img/spaceship2.png'
import spaceship3 from '../../img/spaceship3.png'
import spaceship4 from '../../img/spaceship4.png'

export default class Spaceship{

    #x
    #y
    #imageIndex
    #images

    constructor(){
        
        this.#x = 0
        this.#y = 0
        this.#imageIndex = 0
        this.#images = [
            spaceship1, 
            spaceship2, 
            spaceship3, 
            spaceship4
        ]
    }
}