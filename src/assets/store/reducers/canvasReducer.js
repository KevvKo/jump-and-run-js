const initialState= {
    width: 0,
    height: 0
}

function canvasReducer( state = initialState, action) {

    if(action.type === 'canvas/scaleWidth'){

        const canvas = document.getElementById('gameBoard')
        const width = window.innerWidth
        canvas.width = width

        return {
            ...state,
            width: width
        }
    }

    if(action.type === 'canvas/scaleHeight'){

        const canvas = document.getElementById('gameBoard')
        const height = window.innerHeight
        const header = document.querySelector('header')

        canvas.height = height - header.offsetHeight - 6

        return {
            ...state,
            height: state.height
        }
    }

    return state;
}

export default canvasReducer