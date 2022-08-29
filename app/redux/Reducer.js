import * as Constants from '../constants'

const initialState = {
    playerDetails: []
}

const playerDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Constants.PLAYER_LIST_ADD_PLAYER_ACTION:
            return {
            ...state,
            playerDetails: [...state.playerDetails, action.payload]
            }
        case Constants.PLAYER_LIST_EDIT_PLAYER_ACTION:
            return {
            ...state,
            playerDetails: playerDetails.map((playerDetail) => {
                if(playerDetail.name !== action.payload.name)
                    return playerDetail
                return action.payload
            })
            }
        case Constants.PLAYER_LIST_DELETE_PLAYER_ACTION:
            return {
            ...state,
            playerDetails: playerDetails.filter((playerDetail) => playerDetail.name !== action.payload.name)
            }
        default:
            return state;
    }
}

export default playerDetailsReducer