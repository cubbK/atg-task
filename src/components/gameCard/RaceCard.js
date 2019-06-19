import React from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

export function RaceCard(props) {
    const { race } = props
    return (
        <div>
            <Typography variant="h5" component="div">
                Race Number: {race.number} - Race Name: {race.name} - Race Start
                Time: {race.startTime}
            </Typography>

            <div>
                {race.starts.map(data => (
                    <RaceStart data={data} key={data.number} />
                ))}
            </div>
        </div>
    )
}

function RaceStart(props) {
    const { data } = props

    return (
        <ExpansionPanel>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>
                    Start Number: {data.number} - Horse Name: {data.horse.name}{' '}
                    -- Driver/rider:{' '}
                    {`${data.driver.firstName} ${data.driver.lastName}`}
                </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography>
                    Trainer:{' '}
                    {`${data.horse.trainer.firstName} ${
                        data.horse.trainer.lastName
                    }`}{' '}
                    - Father: {data.horse.pedigree.father.name}
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
}
