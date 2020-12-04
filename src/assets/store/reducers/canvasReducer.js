const initialState= {
    width: 0,
    height: 0
}

function canvasReducer( state = initialState, action) {

    if(action.type === 'canvas/scaleWidth'){

        const canvas = document.getElementById('gameBoard')
        const width = window.innerWidth
        const height = window.innerHeight
        const header = document.querySelector('header')

        canvas.width = width
        canvas.height = height - header.offsetHeight - 6

        return {
            ...state,
            width: width,
            height: height
        }
    }

    return state;
}

export default canvasReducer