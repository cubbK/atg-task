import { resultsGamesReducer } from './resultsGamesReducer'

const defaultState = {
    data: [],
    error: null,
    loading: false,
}

describe('resultsGamesReducer', () => {
    it('sets loading from defaultState', () => {
        expect(
            resultsGamesReducer(defaultState, { type: 'FETCH_RACES_PENDING' })
        ).toEqual({ ...defaultState, loading: true })
    })

    it('sets state as expected after fulfilled', () => {
        expect(
            resultsGamesReducer(defaultState, {
                type: 'FETCH_RACES_FULFILLED',
                payload: { data: { results: 123 } },
            })
        ).toEqual({ ...defaultState, loading: false, data: 123 })
    })

    it('sets the error', () => {
        expect(
            resultsGamesReducer(defaultState, {
                type: 'FETCH_RACES_REJECTED',
                payload: { message: 'error' },
            })
        ).toEqual({ ...defaultState, error: 'error' })
    })

    it('recovers after an error', () => {
        expect(
            resultsGamesReducer(
                { ...defaultState, error: 'error' },
                {
                    type: 'FETCH_RACES_PENDING',
                }
            )
        ).toEqual({ ...defaultState, loading: true })
    })
})
