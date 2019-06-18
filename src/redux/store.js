import { configureStore, getDefaultMiddleware } from 'redux-starter-kit'
import { upcomingRacesReducer } from './reducers/upcomingRacesReducer'
import { resultsRacesReducer } from './reducers/resultsRacesReducer'
import promiseMiddleware from "redux-promise-middleware";

const store = configureStore({
    reducer: {
      upcomingRaces: upcomingRacesReducer,
      resultsRaces: resultsRacesReducer
    },
    middleware: [promiseMiddleware, ...getDefaultMiddleware()]
})

export default store
