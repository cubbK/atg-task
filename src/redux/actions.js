import axios from 'axios'
import { apiUrl } from "constants.js"

export function fetchRaces(raceType) {
    return {
        type: 'FETCH_RACES',
        payload: axios.get(apiUrl + 'products/' + raceType.toUpperCase()),
    }
}
