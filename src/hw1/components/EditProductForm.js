import React, { Component, createRef } from 'react';
import { Table, Button, Icon, Input, Label, Confirm } from 'semantic-ui-react'

function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.round(rand);
}

class EditProductForm extends Component {
    inputNameRef = createRef()

    constructor(props) {
        super(props);
        this.state = {
            editedTitle: this.props.product ? this.props.product.title : '',
            editedPrice: this.props.product ? this.props.product.price : 0,
            editedPricePcs: this.props.product ? this.props.product.price_pcs : 0,
            editedImage: this.props.product ? this.props.product.images.preview : '',
            isEdit: this.props.product ? true : false
        }
    }

    componentDidMount() {
        this.inputNameRef.current.focus();
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

    updateProduct = () => {
        const { editedTitle, editedPrice, editedPricePcs, editedImage, isEdit } = this.state;
        const product = this.props.product ? this.props.product : {
            id: randomInteger(10000, 1000000),
            images: {
                preview: this.state.editedImage
            },
        };
        product.title = editedTitle;
        product.price = editedPrice;
        product.price_pcs = editedPricePcs;
        product.images.preview = editedImage;
        product.isEdit = false;

        this.setState({ adding: true });
        setTimeout(() => {
            this.props.confirm(product);
        }, 1000);
    }

    onCancel = () => {
        this.props.cancel(this.props.product);
    }

    render() {
        const { editedTitle, editedPrice, editedPricePcs, isEdit } = this.state;
        return (
            <Table.Row disabled={this.state.adding}>
                <Table.Cell>
                    <div className="new-product-name">
                        <Input ref={this.inputNameRef}
                            placeholder="new product name"
                            onChange={this.onChangeName}
                            value={editedTitle} type="text" />
                    </div>
                </Table.Cell>
                <Table.Cell className="price-column">
                    <Input onChange={this.onChangePrice} value={editedPrice} labelPosition='right' type='text' placeholder='Price UAH'>
                        <Label basic>₴</Label>
                        <input className="price-input" />
                    </Input>
                </Table.Cell>
                <Table.Cell className="price-column">
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
                        onClick={this.updateProduct}>
                        <Button.Content hidden>{isEdit ? <span>Save</span> : <span>Add</span>}</Button.Content>
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

export default EditProductForm;