import { configureStore, getDefaultMiddleware } from 'redux-starter-kit'
import { upcomingRacesReducer } from './reducers/upcomingRacesReducer'
import { resultsRacesReducer } from './reducers/resultsRacesReducer'
import promiseMiddleware from "redux-promise-middleware";
import thunk from 'redux-thunk'

const store = configureStore({
    reducer: {
      upcomingRaces: upcomingRacesReducer,
      resultsRaces: resultsRacesReducer
    },
    middleware: [promiseMiddleware, thunk]
})

export default store
