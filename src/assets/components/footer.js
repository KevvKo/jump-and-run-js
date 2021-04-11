import './footer.css'
import SoundtrackDisplay from './soundtrackDisplay'

function AppFooter(props){
    return (
        <footer>
            <a href='https://github.com/KevvKo/jump-and-run-js'>@KevvKo</a>
            <SoundtrackDisplay artist={props.artist} title={props.title} audio={props.audio}/>
        </footer>
    )
}

export default AppFooter;