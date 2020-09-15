import React, { Component } from 'react';
import { Table, Button, Dimmer, Loader } from 'semantic-ui-react'
import ProductRow from './ProductRow';
import EditProductForm from './EditProductForm';
import products from './../../data/products.json';
import delay from '../sevices/DelayService';

class ProductTable extends Component {
    state = {
        products: [],
        loading: false,
        isAddingNewProduct: false
    }

    async componentDidMount() {
        this.setState({ loading: true });
        await delay();
        this.setState({ loading: false });
        this.setState({ products: products.data });
    }

    updateProduct = async (updatedProduct, force) => {
        const { products } = this.state;
        if (force) await delay();
        this.setState({
            products: products.map((product) => updatedProduct.id === product.id ? updatedProduct : product)
        });
    }

    startAddProduct = () => {
        this.setState((prevState) => ({ isAddingNewProduct: !prevState.isAddingNewProduct }))
    }

    addProduct = (newProduct) => {
        const { products, isAddingNewProduct } = this.state;
        this.setState({
            products: [newProduct, ...products],
            isAddingNewProduct: !isAddingNewProduct
        });
    }

    startEdit = (product) => {
        product.isEdit = true;
        this.updateProduct(product);
    }

    cancelEdit = (product) => {
        product.isEdit = false;
        this.updateProduct(product);
    }

    removeProduct = async (id) => {
        const { products } = this.state;
        await delay();
        this.setState({
            products: products.filter((product, i) => id !== product.id)
        })
    }

    render() {
        const { products, loading, isAddingNewProduct } = this.state;

        return (
            <>
                <Button onClick={this.startAddProduct}>Add product</Button>
                {loading ?
                    <Dimmer active>
                        <Loader active inline='centered' />
                    </Dimmer> :
                    <Table celled selectable collapsing>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Name</Table.HeaderCell>
                                <Table.HeaderCell textAlign='right'>Price UAH</Table.HeaderCell>
                                <Table.HeaderCell textAlign='right'>Price USD</Table.HeaderCell>
                                <Table.HeaderCell>Image</Table.HeaderCell>
                                <Table.HeaderCell>Actions</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {isAddingNewProduct &&
                                <EditProductForm cancel={this.startAddProduct}
                                    confirm={this.addProduct}></EditProductForm>}
                            {products.map(product =>
                                product.isEdit ?
                                    <EditProductForm product={product}
                                        key={product.id}
                                        cancel={this.cancelEdit}
                                        confirm={this.updateProduct}></EditProductForm> :
                                    <ProductRow
                                        data={product}
                                        key={product.id}
                                        edit={this.startEdit}
                                        remove={this.removeProduct} />
                            )}
                        </Table.Body>
                    </Table>
                }
            </>
        );
    }
}

export default ProductTable;