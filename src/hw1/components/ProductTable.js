import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react'
import products from './../../data/products.json';
import ProductRow from './ProductRow';
import AddProductForm from './AddProductForm';

class ProductTable extends Component {
    state = {
        products: [],
        loading: false
    }
    componentDidMount() {
        this.setState({ products: products.data });
    }

    removeProduct = (id) => {
        const { products } = this.state;
        this.setState({
            products: products.filter((product, i) => id !== product.id)
        })
    }

    updateProduct = (updatedProduct) => {
        const { products } = this.state;
        this.setState({
            users: products.map((product) => updatedProduct.id === product.id ? updatedProduct : product)
        })
    }

    addNewProduct = () => {
        this.setState((prevState) => ({ isAddingNewProduct: !prevState.isAddingNewProduct }))
    }

    addProduct = (newProduct) => {
        const { products } = this.state;
        this.setState({
            products: [newProduct, ...products]
        })
    }

    render() {
        const { products, loading } = this.state;
        if (loading) return <div>Loading...</div>
        return (
            <div>
                <Button onClick={this.addNewProduct}>Add product</Button>
                <Table celled selectable collapsing>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Price UAH</Table.HeaderCell>
                            <Table.HeaderCell>Price USD</Table.HeaderCell>
                            <Table.HeaderCell>Image</Table.HeaderCell>
                            <Table.HeaderCell>Actions</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {this.state.isAddingNewProduct &&
                            <AddProductForm cancel={this.addNewProduct}
                                            addProduct={this.addProduct}></AddProductForm>}
                        {products.map(product =>
                            <ProductRow
                                data={product}
                                key={product.id}
                                onRemoveProduct={this.removeProduct}
                                onUpdateProduct={this.updateProduct} />
                        )}

                    </Table.Body>
                </Table>
            </div>
        );
    }
}

export default ProductTable;