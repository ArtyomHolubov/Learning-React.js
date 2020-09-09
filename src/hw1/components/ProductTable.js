import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'
import products from './../../data/products.json';
import ProductRow from './ProductRow';

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

    render() {
        const { products, loading } = this.state;
        if (loading) return <div>Loading...</div>
        return (
            <Table celled selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell singleLine>Name</Table.HeaderCell>
                        <Table.HeaderCell>Price UAH</Table.HeaderCell>
                        <Table.HeaderCell>Price USD</Table.HeaderCell>
                        <Table.HeaderCell>Image</Table.HeaderCell>
                        <Table.HeaderCell>Actions</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {products.map(product =>
                        <ProductRow
                            data={product}
                            key={product.id}
                            onRemoveProduct={this.removeProduct}
                            onUpdateProduct={this.updateProduct} />
                    )}

                </Table.Body>
            </Table>
        );
    }
}

export default ProductTable;