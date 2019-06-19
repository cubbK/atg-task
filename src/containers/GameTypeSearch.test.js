import React from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { upcomingGamesReducer } from 'redux/reducers/upcomingGamesReducer'
import { resultsGamesReducer } from 'redux/reducers/resultsGamesReducer'
import { render, waitForElement, fireEvent } from 'utils/test-utils'
import { GameTypeSearch } from './GameTypeSearch'

const renderComponent = () =>
    render(
        <Provider
            store={createStore(
                combineReducers({ upcomingGamesReducer, resultsGamesReducer })
            )}
        >
            <GameTypeSearch />
        </Provider>
    )

it('does suggest',async () => {
    const utils = renderComponent()
    const input = utils.getByLabelText('Game Type')

    fireEvent.change(input, { target: { value: 'V' } })
    fireEvent.focus(input)
    await waitForElement(() => utils.getAllByText('V'));
    await waitForElement(() => utils.getByText('75'));
})
