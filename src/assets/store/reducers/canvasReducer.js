const initialState= {
    width: 0,
    height: 0
}

function canvasReducer( state = initialState, action) {

    if(action.type === 'canvas/Scale'){

        const canvas = document.getElementById('gameBoard')
        const width = window.innerWidth
        const height = window.innerHeight

        canvas.width = width
        canvas.height = height

        return {
            ...state,
            width: width,
            height: height
        }
    }

    return state;
}

export default canvasReducer