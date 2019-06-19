import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { RaceCard } from './gameCard/RaceCard'

export function GameCard(props) {
    return (
        <Card>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    Id: {props.game && props.game.id}
                </Typography>
                <Typography variant="subtitle1" component="h5">
                    Start Time: {props.game && props.game.startTime}
                </Typography>
            </CardContent>
            {props.children}
        </Card>
    )
}

export { RaceCard }
