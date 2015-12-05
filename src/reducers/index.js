import { combineReducers } from 'redux'
import update from 'react-addons-update'

import { TOGGLE_BANNER, TOGGLE_DEMO, DEMO_ZOOM }  from '../constants/ActionTypes'
import initialState from '../store/initialState.json'

export default (state = initialState, action) => {
    switch (action.type){
        case TOGGLE_BANNER:
            return update(state, {
                [action.id]: {
                    active: {
                        isBannerActive: { $set: action.isBannerActive }
                    }
                }
            })
            break;
        case TOGGLE_DEMO:
            return update(state, {
                [action.id]: {
                    active: {
                        isDemoActive: { $set: action.isDemoActive }
                    }
                }
            })
            break;
        case DEMO_ZOOM:
            return update(state, {
                [action.id]: {
                    active: {
                        demoZoomSrc: { $set: action.src },
                        demoZoomDescription: { $set: action.description }
                    }
                }
            })
            break;
        default: 
            return state;
            break;
    }
}