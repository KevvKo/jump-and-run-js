import { useSelector } from 'react-redux'
import './footer.css'

function AppFooter(){

    const artist = useSelector (state => state.music.artist)
    const title = useSelector (state => state.music.title)
    const musicPlays = useSelector (state => state.music.musicPlays)

    return (
        <footer>
            <a href='https://github.com/KevvKo/jump-and-run-js'>@KevvKo</a>
            <div className="soundtrackDisplay">
                {musicPlays && <div>{artist + ' - ' + title}</div> }
            </div>          
        </footer>
    )
}

export default AppFooter;