import React, { Component } from 'react';
import { Header, Table, Button, Icon, Image } from 'semantic-ui-react'

class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            editedTitle: props.data.title,
            editedPrice: props.data.price,
            editedPricePcs: props.data.price_pcs,
            editedImage: props.data.images.preview,
            isEdit: false,
        }
    }

    onEdit = () => {
        this.setState({ isEdit: true })
    }

    onCancel = () => {
        this.setState({
            isEdit: false,
            editedName: this.props.name
        })
    }

    onChangeName = (e) => {
        this.setState({
            editedName: e.target.value
        })
    }

    updateUser = () => {
        const { editedName } = this.state;
        const { position } = this.props;
        this.props.onUpdateUser(editedName, position);
        this.setState({ isEdit: false })
    }

    render() {
        const { isEdit, editedTitle, editedPrice, editedPricePcs, editedImage } = this.state;
        const { data, onRemoveProduct } = this.props;
        return (
            // <li>
            //     {
            //     isEdit
            //         ? <input onChange={this.onChangeName} value={editedName} type="text"/>
            //         : <span>{name} #{position}</span>
            //      }

            //     {!isEdit && <button onClick={this.onEdit}>Edit User</button> }
            //     {!isEdit && <button onClick={() => onRemoveProduct(position)}>Remove user</button> }

            //     {isEdit && <button onClick={this.updateUser}>Save</button>}
            //     {isEdit && <button onClick={this.onCancel}>Cancel</button>}
            // </li>
            //test

            <Table.Row>
                <Table.Cell>
                    <Header as='h4' textAlign='left'>
                        {data.title}
                    </Header>
                </Table.Cell>
                <Table.Cell singleLine>
                    {data.price}
                </Table.Cell>
                <Table.Cell singleLine>
                    {data.price_pcs}
                </Table.Cell>
                <Table.Cell textAlign='right'>
                    <Image src={data.images.preview} size='mini' verticalAlign='top' />
                </Table.Cell>
                <Table.Cell collapsing>
                    {/* <Button animated='fade' primary>
                        <Button.Content hidden>Edit</Button.Content>
                        <Button.Content visible>
                            <Icon name='edit' />
                        </Button.Content>
                    </Button> */}
                    <Button animated='fade'
                            color='red'
                            onClick={() => onRemoveProduct(data.id)}>
                        <Button.Content hidden>Delete</Button.Content>
                        <Button.Content visible>
                            <Icon name='delete' />
                        </Button.Content>
                    </Button>
                </Table.Cell>

            </Table.Row>
        );
    }
}

export default User;


export function User2({ name, position }) {
    return <div>{name} #{position}</div>
}