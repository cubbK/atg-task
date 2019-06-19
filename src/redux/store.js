import { configureStore, getDefaultMiddleware } from 'redux-starter-kit'
import { upcomingGamesReducer } from './reducers/upcomingGamesReducer'
import { resultsGamesReducer } from './reducers/resultsGamesReducer'
import promiseMiddleware from "redux-promise-middleware";
import thunk from 'redux-thunk'

const store = configureStore({
    reducer: {
      upcomingGames: upcomingGamesReducer,
      resultsGames: resultsGamesReducer
    },
    middleware: [promiseMiddleware, thunk]
})

export default store
