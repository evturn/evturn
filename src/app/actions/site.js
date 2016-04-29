import { dispatch } from 'store'

const TOGGLE_MENU     =       _ => ({ type: 'TOGGLE_MENU' })
const PAGE_TRANSITION = payload => ({ type: 'PAGE_TRANSITION', payload })

export const pageTransition = props =>  dispatch(PAGE_TRANSITION(props))
export const toggleMenu = _ =>  dispatch(TOGGLE_MENU())