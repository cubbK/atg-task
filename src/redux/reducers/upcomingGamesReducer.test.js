import { upcomingGamesReducer } from './upcomingGamesReducer'

const defaultState = {
    data: [],
    error: null,
    loading: false,
}

describe('upcomingGamesReducer', () => {
    it('sets loading from defaultState', () => {
        expect(
            upcomingGamesReducer(defaultState, { type: 'FETCH_RACES_PENDING' })
        ).toEqual({ ...defaultState, loading: true })
    })

    it('sets state as expected after fulfilled', () => {
        expect(
            upcomingGamesReducer(defaultState, {
                type: 'FETCH_RACES_FULFILLED',
                payload: { data: { upcoming: 123 } },
            })
        ).toEqual({ ...defaultState, loading: false, data: 123 })
    })

    it('sets the error', () => {
        expect(
            upcomingGamesReducer(defaultState, {
                type: 'FETCH_RACES_REJECTED',
                payload: { message: 'error' },
            })
        ).toEqual({ ...defaultState, error: 'error' })
    })

    it('recovers after an error', () => {
        expect(
            upcomingGamesReducer(
                { ...defaultState, error: 'error' },
                {
                    type: 'FETCH_RACES_PENDING',
                }
            )
        ).toEqual({ ...defaultState, loading: true })
    })
})
