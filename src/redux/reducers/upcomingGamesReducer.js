import { createReducer } from "redux-starter-kit"

export const upcomingGamesReducer = createReducer({
  data: [],
  error: null,
  loading: false
}, {
  FETCH_RACES_PENDING: (state, action) => {
    // "mutate" the array by calling push()
    state.loading = true
    state.data = []
    state.error =  null
  },
  FETCH_RACES_FULFILLED: (state, action) => {
    state.data = action.payload.data.upcoming
    state.loading = false
  },
  FETCH_RACES_REJECTED: (state, action) => {
    state.loading = false
    state.error = action.payload.message
  }
})