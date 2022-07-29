import { useSelector } from 'react-redux'
import './footer.css'

function AppFooter(){

    const artist = useSelector (state => state.music.artist)
    const title = useSelector (state => state.music.title)
    const musicPlays = useSelector (state => state.music.musicPlays)

    return(
        <footer className='block w-full fixed bottom-0 p-1.5'>
            <a className='hover:underline no-underline text-white opacity-60' href='https://github.com/KevvKo/jump-and-run-js'>@KevvKo</a>
            <div className="soundtrackDisplay float-right text-white opacity-60 mr-2.5 w-24 overflow-hidden">
                {musicPlays && 
                    <div className='w-max'>{artist + ' - ' + title}</div> 
                }
            </div>          
        </footer>
    )
}

export default AppFooter;