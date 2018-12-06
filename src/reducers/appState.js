import { GET_ITEMS, ITEM_RECEIVED } from '../constants'
import { Map as ImmutableMap, List as ImmutableList } from 'immutable'

const initialState = new ImmutableMap({
  isLoading: false,
  items: new ImmutableList([])
})

const appState = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return state.merge({ isLoading: true })
    case ITEM_RECEIVED:
      return state.merge({
        items: action.json,
        isLoading: false
      })
    default:
      return state
  }
}

export default appState