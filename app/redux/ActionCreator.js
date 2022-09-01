import * as Constants from '../constants'

export const addPlayerDetail = (playerDetail) => {
    return {
        type: Constants.PLAYER_LIST_ADD_PLAYER_ACTION,
        payload: playerDetail
    }
}

export const editPlayerDetail = (playerDetail) => {
    return {
        type: Constants.PLAYER_LIST_EDIT_PLAYER_ACTION,
        payload: playerDetail
    }
}

export const deletePlayerDetail = (playerDetail) => {
    return {
        type: Constants.PLAYER_LIST_DELETE_PLAYER_ACTION,
        payload: playerDetail
    }
}

export const emptyList = () => {
    return {
        type: Constants.PLAYER_LIST_EMPTY_LIST
    }
}