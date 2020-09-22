import React, { Component } from 'react'
import {
    Button,
    TransitionablePortal,
} from 'semantic-ui-react'

export default class HomeWorkDescription extends Component {
    state = {
        open: false
    }

    handleOpen = () => this.setState({ open: true })

    handleClose = () => this.setState({ open: false })

    render() {
        const { open } = this.state

        return (
            <TransitionablePortal
                closeOnTriggerClick
                onOpen={this.handleOpen}
                onClose={this.handleClose}
                openOnTriggerClick
                trigger={
                    <Button
                        content={open ? 'Close Description' : 'Open Description'}
                        negative={open}
                        positive={!open}
                    />
                }
            >
                <div className="hw-description" dangerouslySetInnerHTML={{ __html: this.props.data }} />
            </TransitionablePortal>
        )
    }
}