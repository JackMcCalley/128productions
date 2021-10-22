import React, { Component } from 'react'
import Client from 'shopify-buy'
const ShopContext = React.createContext()

const client = Client.buildClient({
    storefrontAccessToken: 'd7e2ed78dce4c816f7200ebbdf319b1a',
    domain: '128productions.myshopify.com'
})

class ShopProvider extends Component {
    state = {
        products: [],
        product: {},
        collections: [],
        checkout: {},
        isCartOpen: false,
        test: 'test'
    }

    componentDidMount() {
        //check if localStorage has a checkout_id
        if (sessionStorage.checkout_id) {
            this.fetchCheckout(localStorage.checkout_id)
        } else {
            this.createCheckout()
        }

    }

    createCheckout = async () => {
        const checkout = await client.checkout.create()
        sessionStorage.setItem("checkout_id", checkout.id)
        await this.setState({ checkout: checkout })
    }

    fetchCheckout = async (checkoutId) => {
        client.checkout.fetch(checkoutId).then(checkout =>{
            this.setState({checkout: checkout})
        }).catch(err => console.long(err))
    }

    addItemToCheckout = async (variantId, quantity) => {
        const lineItemsToAdd = [{
            variantId,
            quantity: parseInt(quantity, 10)
        }]

        const checkout = await client.checkout.addLineItems(this.state.checkout.id, lineItemsToAdd)
        this.setState({ checkout: checkout })
    }

    removeItemFromCheckout = async (variantId, quantity) => {
        const lineItemsToRemove= [{
            variantId
        }]

        const checkout = await client.checkout.removeLineItems(this.state.checkoutId, lineItemsToRemove)
        this.setState({ checkout: checkout })
    }

    fetchAllProducts = async () => {
        client.product.fetchAll().then((products) => {
            this.setState({products: products})
        })
    }

    fetchAllCollections = async () => {
        client.collection.fetchAllWithProducts().then((collections) => {
            this.setState({collections: collections})
          });
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