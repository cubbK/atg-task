import React from 'react'
import { useSelector } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import { GameCardStateful } from './GameCardStateful'
import Divider from '@material-ui/core/Divider'

export function GamesList() {
    const upcomingGames = useSelector(state => state.upcomingGames)
    const resultsGames = useSelector(state => state.resultsGames)

    if (upcomingGames.error || resultsGames.error) {
        return (
            <Typography variant="h4" component="div">
                {upcomingGames.error} - {resultsGames.error}
            </Typography>
        )
    }

    if (upcomingGames.loading) {
        return <div>Loading</div>
    }

    if (upcomingGames.data.length === 0 && resultsGames.data.length === 0) {
        return (
            <Typography variant="h4" component="div">
                Please use the search
            </Typography>
        )
    }

    if (upcomingGames.data.length === 0) {
        return (
            <React.Fragment>
                <Typography variant="h4" component="div">
                    No upcoming games, showing results games
                </Typography>
                {resultsGames.data.map(game => (
                    <React.Fragment key={game.id}>
                        <GameCardStateful game={game} />
                        <Divider />
                    </React.Fragment>
                ))}
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <Typography variant="h4" component="div">
                Upcoming Games
            </Typography>
            {upcomingGames.data.map(game => (
                <React.Fragment key={game.id}>
                    <GameCardStateful game={game} />
                    <Divider />
                </React.Fragment>
            ))}
        </React.Fragment>
    )
}
