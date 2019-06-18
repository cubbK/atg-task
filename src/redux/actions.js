import axios from 'axios'

export function fetchRaces(raceType) {
    console.log(
        'https://www.atg.se/services/racinginfo/v1/api/products/' +
            raceType.toUpperCase()
    )
    return {
        type: 'FETCH_RACES',
        payload: axios.get(
            'https://www.atg.se/services/racinginfo/v1/api/products/' +
                raceType.toUpperCase(),
            {
                mode: 'no-cors',
                headers: {
                  'Access-Control-Allow-Origin': '*',
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
            }
        ),
    }
}
