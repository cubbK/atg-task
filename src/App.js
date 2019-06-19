import React from 'react'
import store from './redux/store'
import { Provider } from 'react-redux'
import { GameTypeSearch } from './containers/GameTypeSearch'
import { GamesList } from './containers/GamesList'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'

const Container = styled.div`
    padding: 0 20px;
    & > * {
        margin: 20px 0;
    }
`

function App() {
    return (
        <Provider store={store}>
            <Container>
                <Typography variant="h1">ATG TASK</Typography>
                <GameTypeSearch />
                <GamesList />
            </Container>
        </Provider>
    )
}

export default App
