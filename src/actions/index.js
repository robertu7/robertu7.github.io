import { TOGGLE_BANNER, TOGGLE_DEMO, DEMO_ZOOM }  from '../constants/ActionTypes'

/*
 * action creators
 */
export function toggleBanner(id, isBannerActive) {
    return { type: TOGGLE_BANNER, id, isBannerActive }
}

export function toggleDemo(id, isDemoActive) {
    return { type: TOGGLE_DEMO, id, isDemoActive }
}

export function demoZoom(id, src, description) {
    return { type: DEMO_ZOOM, id, src, description }
}