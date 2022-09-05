import * as Constants from '../constants'

const initialState = {
    playerDetails: [], 
    playerNames: []
}

const playerDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Constants.PLAYER_LIST_ADD_PLAYER_ACTION:
            if(!state.playerNames.includes(action.payload.name)) {
                return {
                ...state,
                playerDetails: [...state.playerDetails, action.payload],
                playerNames: [...state.playerNames, action.payload.name]
                }
            }
        case Constants.PLAYER_LIST_EDIT_PLAYER_ACTION:
            return {
            ...state,
            playerDetails: state.playerDetails.map((playerDetail) => {
                if(playerDetail.name !== action.payload.name)
                    return playerDetail
                return action.payload
            })
            }
        case Constants.PLAYER_LIST_DELETE_PLAYER_ACTION:
            return {
            ...state,
            playerDetails: state.playerDetails.filter((playerDetail) => playerDetail.name !== action.payload.name),
            playerNames: state.playerNames.filter((playerName) => playerName !== action.payload.name)
            }
        case Constants.PLAYER_LIST_EMPTY_LIST:
            return {
            ...state,
            playerDetails: [],
            playerNames: []
            }
        default:
            return state;
    }
}

export default playerDetailsReducer