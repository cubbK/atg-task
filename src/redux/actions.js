import axios from 'axios'
const serverUrl = 'http://localhost:3001/'

export function fetchRaces(raceType) {
    const request = axios
        .get(serverUrl + 'products/' + raceType.toUpperCase(), {})
        .then(request => console.log(request.data))
    return {
        type: 'FETCH_RACES',
        payload: axios.get(serverUrl + 'products/' + raceType.toUpperCase()),
    }
}
