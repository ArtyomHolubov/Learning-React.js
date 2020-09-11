import React, { Component } from 'react';
import { Header, Table, Button, Icon, Image, Input, Label, Confirm } from 'semantic-ui-react'

function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.round(rand);
}

class AddProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editedTitle: '',
            editedPrice: 0,
            editedPricePcs: 0,
            editedImage: ''
        }

        this.cancel = this.props.cancel;
    }

    onCancel = () => {
        this.cancel();
    }

    onChangeName = (e) => {
        this.setState({
            editedTitle: e.target.value
        })
    }

    onChangePrice = (e) => {
        this.setState({
            editedPrice: e.target.value,
            editedPricePcs: (e.target.value / 28).toFixed(2)
        })
    }

    onChangePricePcs = (e) => {
        this.setState({
            editedPricePcs: e.target.value,
            editedPrice: (e.target.value * 28).toFixed(0),
        })
    }

    addProduct = () => {
        let newProduct = {
            id: randomInteger(10000, 1000000),
            title: this.state.editedTitle,
            price: this.state.editedPrice,
            price_pcs: this.state.editedPricePcs,
            images: {
                preview: this.state.editedImage
            }
        }

        this.setState({ adding: true });
        setTimeout(() => {
            this.setState({
                adding: false,
                editedTitle: '',
                editedPrice: 0,
                editedPricePcs: 0,
                editedImage: ''
            });
            this.props.addProduct(newProduct);
        }, 1000);
    }

    render() {
        const { isEdit, editedTitle, editedPrice, editedPricePcs, editedImage } = this.state;
        const { onRemoveProduct } = this.props;
        return (
            <Table.Row disabled={this.state.removing || this.state.updaiting}>
                <Table.Cell>
                    <div className="new-product-name">
                        <Input placeholder="new product name" onChange={this.onChangeName} value={editedTitle} type="text" />
                    </div>
                </Table.Cell>
                <Table.Cell>
                    <Input onChange={this.onChangePrice} value={editedPrice} labelPosition='right' type='text' placeholder='Price UAH'>
                        <Label basic>₴</Label>
                        <input className="price-input" />
                    </Input>
                </Table.Cell>
                <Table.Cell>
                    <Input onChange={this.onChangePricePcs} value={editedPricePcs} labelPosition='right' type='text' placeholder='Price USD'>
                        <Label basic>$</Label>
                        <input className="price-input" />
                    </Input>
                </Table.Cell>
                <Table.Cell>
                </Table.Cell>
                <Table.Cell collapsing>
                    <Button animated='fade'
                        primary
                        loading={this.state.adding}
                        onClick={this.addProduct}>
                        <Button.Content hidden>Add</Button.Content>
                        <Button.Content visible>
                            <Icon name='check' />
                        </Button.Content>
                    </Button>
                    <Button animated='fade'
                        color='red'
                        onClick={this.onCancel}>
                        <Button.Content hidden>Cancel</Button.Content>
                        <Button.Content visible>
                            <Icon name='stop circle outline' />
                        </Button.Content>
                    </Button>
                </Table.Cell>
            </Table.Row>
        );
    }
}

export default AddProductForm;