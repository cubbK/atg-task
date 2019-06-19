import React, { useReducer } from 'react'
import { GameCard, RaceCard } from 'components/GameCard'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import { createReducer } from 'redux-starter-kit'
import { apiUrl } from 'constants.js'
import axios from 'axios'

export function GameCardStateful(props) {
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
          const request = await axios.get(`${apiUrl}games/${props.game.id}`)
          gameDispatch({ type: 'fulfilled', payload: request.data })
          console.log(request.data)
      } catch (err) {
          gameDispatch({ type: 'error', payload: err.message })
      }
  }
  if (game.error) {
      return (
          <GameCard game={props.game} key={props.game.id}>
              <CardActions>
                  <Button onClick={handleMoreClick}>More</Button>
              </CardActions>
              {game.error}
          </GameCard>
      )
  }
  return (
      <GameCard game={props.game} key={props.game.id}>
          {game.loading === false && Object.entries(game.data).length === 0 && (
              <CardActions>
                  <Button size="medium" onClick={handleMoreClick}>More</Button>
              </CardActions>
          )}
          {game.loading && 'Loading'}
          {Object.entries(game.data).length !== 0 && mapRaces(game.data)}
      </GameCard>
  )
}

function mapRaces(data) {
  return data.races.map(race => <RaceCard race={race} key={race.id} />)
}
