import React from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { upcomingGamesReducer } from 'redux/reducers/upcomingGamesReducer'
import { resultsGamesReducer } from 'redux/reducers/resultsGamesReducer'
import { render, waitForElement, fireEvent, cleanup } from 'utils/test-utils'
import { GamesList } from './GamesList'

afterEach(cleanup)

const mockData = {
    upcomingGames: {
        data: [
            {
                id: 'V65_2019-06-20_79_2',
                startTime: '2019-06-20T18:30:00',
            },
            {
                id: 'V65_2019-06-20_79_3',
                startTime: '2019-06-20T18:30:00',
            },
        ],
        error: null,
        loading: false,
    },
    resultsGames: {
        data: [
            {
                id: 'V65_2019-06-20_79_4',
                startTime: '2019-06-20T18:30:00',
            },
        ],
        error: null,
        loading: false,
    },
}

const mockDataWithoutUpcomingGames = {
    upcomingGames: {
        data: [],
        error: null,
        loading: false,
    },
    resultsGames: {
        data: [
            {
                id: 'V65_2019-06-20_79_4',
                startTime: '2019-06-20T18:30:00',
            },
        ],
        error: null,
        loading: false,
    },
}

const renderComponent = data =>
    render(
        <Provider
            store={createStore(
                combineReducers({
                    upcomingGames: upcomingGamesReducer,
                    resultsGames: resultsGamesReducer,
                }),
                data
            )}
        >
            <GamesList />
        </Provider>
    )

it('has upcoming games', async () => {
    const utils = renderComponent(mockData)

    await waitForElement(() => utils.getByText('Upcoming Games'))
})

it('has enough upcoming games', async () => {
    const utils = renderComponent(mockData)
    expect(utils.getAllByText(/Id: V65/i).length).toBe(2)
})


it('has results games when there are no upcoming ones', async () => {
    const utils = renderComponent(mockDataWithoutUpcomingGames)
    await waitForElement(() => utils.getByText('No upcoming games, showing results games'))
})

it('has enough results games when there are no upcoming ones', async () => {
  const utils = renderComponent(mockDataWithoutUpcomingGames)
  expect(utils.getAllByText(/Id: V65/i).length).toBe(1)
})