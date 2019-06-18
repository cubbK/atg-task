import React from 'react'
import Button from '@material-ui/core/Button'

export function InputButton(props) {
    return (
        <Button variant="contained" component="span" {...props}>
            {props.children}
        </Button>
    )
}
