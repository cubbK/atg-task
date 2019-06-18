import React from 'react'
import { InputAutocomplete } from './components/InputAutocomplete'

const suggestions = [
    { label: 'V75' },
    { label: 'V65' },
    { label: 'V64' },
    { label: 'V4' },
]

function App() {
    return (
        <div>
            Hey
            <InputAutocomplete
                suggestions={suggestions}
                id={'react-autosuggest-simple'}
                label={'Game Type'}
                placeholder={
                    'Search a Game Type(possible values are V75, V65, V64, V4)'
                }
            />
        </div>
    )
}

export default App
