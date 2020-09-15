import React, { Component } from 'react';
import { Header, Table, Button, Icon, Image, Input, Label, Confirm } from 'semantic-ui-react'

class ProductRow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: props.data
        }
    }

    startEdit = () => {
        this.props.edit(this.state.product);
    }

    startRemove = () => {
        this.setState({ openConfirmDelete: true });
    }

    removeCancel = () => {
        this.setState({ openConfirmDelete: false });
    }

    removeConfirm = () => {
        this.setState({ openConfirmDelete: false });
        this.setState({ removing: true });
        setTimeout(() => {
            this.setState({ removing: false });
            this.props.remove(this.state.product.id);
        }, 1000);
    }

    render() {
        const { product } = this.state;
        return (
            <>
                <Table.Row disabled={this.state.removing || this.state.updaiting}>
                    <Table.Cell>
                        <Header as='h4' textAlign='left'>
                            {product.title}
                        </Header>
                    </Table.Cell>
                    <Table.Cell className="price-column" textAlign='right'>
                        {product.price}
                    </Table.Cell>
                    <Table.Cell className="price-column" textAlign='right'>
                        {product.price_pcs}
                    </Table.Cell>
                    <Table.Cell textAlign='right'>
                        <Image src={product.images.preview} size='mini' verticalAlign='top' />
                    </Table.Cell>
                    <Table.Cell collapsing>
                        <Button animated='fade'
                            primary
                            loading={this.state.updaiting}
                            onClick={this.startEdit}>
                            <Button.Content hidden>Edit</Button.Content>
                            <Button.Content visible>
                                <Icon name='edit' />
                            </Button.Content>
                        </Button>
                        <Button animated='fade'
                            color='red'
                            loading={this.state.removing}
                            onClick={this.startRemove}>
                            <Button.Content hidden>Delete</Button.Content>
                            <Button.Content visible>
                                <Icon name='delete' />
                            </Button.Content>
                        </Button>
                    </Table.Cell>
                </Table.Row>
                <Confirm
                    open={this.state.openConfirmDelete}
                    confirmButton={'Delete'}
                    header={'Do you want to delete?'}
                    content={product.title}
                    onCancel={this.removeCancel}
                    onConfirm={this.removeConfirm}
                />
            </>
        );
    }
}

export default ProductRow;