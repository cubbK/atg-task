import React from 'react'
import styled from 'styled-components'
import { InputButton } from './autocompleteForm/InputButton'
import { InputAutocomplete } from './autocompleteForm/InputAutocomplete'

const Container = styled.div`
    display: flex;
`

export function AutocompleteForm(props) {
    return <Container>{props.children}</Container>
}

export { InputButton, InputAutocomplete }
