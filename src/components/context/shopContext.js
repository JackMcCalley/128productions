import React, { Component } from 'react'
import Client from 'shopify-buy'
// import storefrontAccessToken from '../shopify/Storefront'
const ShopContext = React.createContext()

const client = Client.buildClient({
    storefrontAccessToken: 'd7e2ed78dce4c816f7200ebbdf319b1a',
    domain: '128productions.myshopify.com'
})

class ShopProvider extends Component {

    state = {
        products: [],
        product: {},
        checkout: {},
        isCartOpen: false,
        test: 'test'
    }

    componentDidMount() {
        this.createCheckout()
    }

    createCheckout = async () => {
        const checkout = await client.checkout.create()
        this.setState({ checkout: checkout })
    }

    addItemToCheckout = async (variantId, quantity) => {
        const lineItemsToAdd = [{
            variantId,
            quantity: parseInt(quantity, 10)
        }]

        const checkout = await client.checkout.addLineItems(this.state.checkout.id, lineItemsToAdd)
        this.setState({ checkout: checkout })
    }

    fetchAllProducts = async () => {
        client.product.fetchAll().then((products) => {
            this.setState({products: products})
        })
    }

    fetchProductWithId = async (id) => {
        const product = await client.product.fetch(id)
        this.setState({ product: product})
    }

    closeCart = () => { this.setState({ isCartOpen: false }) }

    openCart= () => { this.setState({ isCartOpen: true }) }

    addItemsToCart

    render(){
        return(
            <ShopContext.Provider value={{
                ...this.state,
                fetchAllProducts: this.fetchAllProducts,
                fetchProductWithId: this.fetchProductWithId,
                closeCart: this.closeCart,
                openCart: this.openCart,
                addItemToCheckout: this.addItemToCheckout
            }} >
                {this.props.children}
            </ShopContext.Provider>
        )
    }
}

const ShopConsumer = ShopContext.Consumer

export { ShopConsumer, ShopContext }

export default ShopProvider