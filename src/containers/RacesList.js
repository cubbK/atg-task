import React, { useReducer } from 'react'
import { useSelector } from 'react-redux'
import { RaceCard } from 'components/RaceCard'
import Typography from '@material-ui/core/Typography'
import { createReducer } from 'redux-starter-kit'
import { apiUrl } from 'constants.js'
import axios from 'axios'

export function RacesList() {
    const upcomingRaces = useSelector(state => state.upcomingRaces)
    const resultsRaces = useSelector(state => state.resultsRaces)

    if (upcomingRaces.error || resultsRaces.error) {
        return (
            <Typography variant="h4" component="div">
                {upcomingRaces.error} - {resultsRaces.error}
            </Typography>
        )
    }

    if (upcomingRaces.loading) {
        return <div>Loading</div>
    }

    if (upcomingRaces.data.length === 0 && resultsRaces.data.length === 0) {
        return (
            <Typography variant="h4" component="div">
                Please use the search
            </Typography>
        )
    }

    if (upcomingRaces.data.length === 0) {
        return (
            <React.Fragment>
                <Typography variant="h4" component="div">
                    No upcoming races, showing results races
                </Typography>
                {resultsRaces.data.map(race => (
                    <RaceCard race={race} key={race.id} />
                ))}
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <Typography variant="h4" component="div">
                Upcoming Races
            </Typography>
            {upcomingRaces.data.map(race => (
                <RaceCardStateful race={race} key={race.id} />
            ))}
        </React.Fragment>
    )
}

function RaceCardStateful(props) {
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
        <RaceCard
            race={props.race}
            key={props.race.id}
            handleMoreClick={handleMoreClick}
        >
            123
        </RaceCard>
    )
}
