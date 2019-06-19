import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { RaceCard } from './gameCard/RaceCard'

export function GameCard(props) {
    return (
        <Card>
            <CardContent>
                <Typography color="textSecondary" variant="h4" component="div">
                    Id: {props.game && props.game.id}
                </Typography>
                <Typography variant="h5" component="div">
                    Start Time: {props.game && props.game.startTime}
                </Typography>
                {props.children}
            </CardContent>
            
        </Card>
    )
}

export { RaceCard }
