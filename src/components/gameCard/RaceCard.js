import React from 'react'

export function RaceCard(props) {
    const { race } = props
    return (
        <div>
            Number: {race.number} - Name: {race.name} - Start Time:{' '}
            {race.startTime}
        </div>
    )
}
