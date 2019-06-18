import React, { useState } from 'react'
import {
    AutocompleteForm,
    InputAutocomplete,
    InputButton,
} from '../components/AutocompleteForm'
import { useDispatch } from 'react-redux'
import { fetchRaces } from "redux/actions"

const suggestions = [
    { label: 'V75' },
    { label: 'V65' },
    { label: 'V64' },
    { label: 'V4' },
]

export function GameTypeSearch(props) {
    const [inputValue, setInputValue] = useState('')

    function handleInputChange (event, { newValue }) {
        setInputValue(newValue)
    }

    const dispatch = useDispatch()
    function handleSearch() {
      dispatch(fetchRaces(inputValue))
    }

    return (
        <AutocompleteForm>
            <InputAutocomplete
                suggestions={suggestions}
                id={'react-autosuggest-simple'}
                label={'Game Type'}
                placeholder={
                    'Search a Game Type(possible values are V75, V65, V64 and V4)'
                }
                value={inputValue}
                onChange={handleInputChange}
            />
            <InputButton onClick={handleSearch}>Search</InputButton>
        </AutocompleteForm>
    )
}
