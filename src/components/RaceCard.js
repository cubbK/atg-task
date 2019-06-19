import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

export function RaceCard(props) {
    return (
        <Card>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    Id: {props.race && props.race.id}
                </Typography>
                <Typography variant="subtitle1" component="h5">
                    Start Time: {props.race && props.race.startTime}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={props.handleMoreClick}>More</Button>
            </CardActions>
            {props.children}
        </Card>
    )
}
