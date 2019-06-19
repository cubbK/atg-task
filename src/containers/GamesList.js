import React, { useReducer } from 'react'
import { useSelector } from 'react-redux'
import { GameCard, RaceCard } from 'components/GameCard'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import { createReducer } from 'redux-starter-kit'
import { apiUrl } from 'constants.js'
import axios from 'axios'

export function GamesList() {
    const upcomingGames = useSelector(state => state.upcomingGames)
    const resultsGames = useSelector(state => state.resultsGames)

    if (upcomingGames.error || resultsGames.error) {
        return (
            <Typography variant="h4" component="div">
                {upcomingGames.error} - {resultsGames.error}
            </Typography>
        )
    }

    if (upcomingGames.loading) {
        return <div>Loading</div>
    }

    if (upcomingGames.data.length === 0 && resultsGames.data.length === 0) {
        return (
            <Typography variant="h4" component="div">
                Please use the search
            </Typography>
        )
    }

    if (upcomingGames.data.length === 0) {
        return (
            <React.Fragment>
                <Typography variant="h4" component="div">
                    No upcoming games, showing results games
                </Typography>
                {resultsGames.data.map(race => (
                  <GameCardStateful race={race} key={race.id} />
                ))}
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <Typography variant="h4" component="div">
                Upcoming Games
            </Typography>
            {upcomingGames.data.map(game => (
                <GameCardStateful game={game} key={game.id} />
            ))}
        </React.Fragment>
    )
}

function GameCardStateful(props) {
    const gameDefaultState = { data: {}, loading: false, error: null }

    const gameReducer = createReducer(gameDefaultState, {
        loading: (state, action) => {
            state.loading = true
            state.data = {}
            state.error = null
        },
        fulfilled: (state, action) => {
            state.data = action.payload
            state.loading = false
        },
        error: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
    })

    const [game, gameDispatch] = useReducer(gameReducer, gameDefaultState)

    async function handleMoreClick() {
      console.log('triggered')
        gameDispatch({ type: 'loading' })
        try {
            const request = await axios.get(`${apiUrl}games/${props.race.id}`)
            gameDispatch({ type: 'fulfilled', payload: request.data })
            console.log(request.data)
        } catch (err) {
            gameDispatch({ type: 'error', payload: err.message })
        }
    }

    return (
        <GameCard
            game={props.game}
            key={props.game.id}
        >
            {game.loading === false && Object.entries(game.data).length === 0 && (
                <CardActions>
                    <Button onClick={handleMoreClick}>More</Button>
                </CardActions>
            )}
            {game.loading && 'Loading'}
            {Object.entries(game.data).length !== 0 && 123}
        </GameCard>
    )
}

function mapRaces(data) {
  return data.races.map(race => <RaceCard race={race} key={race.id}/>)
}
