import React, {Component} from 'react'
import Client from 'shopify-buy'
import storefrontAccessToken from './shopify/Storefront'
import Products from './shopify/Products'
import Product from './shopify/Product'
import Cart from './shopify/Cart'
import VariantSelector from './shopify/VariantSelector'

const client = Client.buildClient({
    storefrontAccessToken: `${storefrontAccessToken}`,
    domain: '128productions.myshopify.com'

})

export default class Merch extends Component {
    constructor(props) {
        super(props);
        this.state = {
         isCartOpen: false,
         checkout: { lineItems: [] },
         products: [],
         product: [],
         shop: {},
         didMount: false
        }

       this.handleCartClose = this.handleCartClose.bind(this);
       this.addVariantToCart = this.addVariantToCart.bind(this);
       this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
       this.removeLineItemInCart = this.removeLineItemInCart.bind(this);

       client.product.fetchAll().then((res) => {
        this.setState({
          products: res,
        })
      })
      client.shop.fetchInfo().then((res) => {
        this.setState({
          shop: res,
        })
      });
    }

    addVariantToCart(variantId, quantity){
        this.setState({
          isCartOpen: true,
        });
          const lineItemsToAdd = [{variantId, quantity: parseInt(quantity, 10)}]
          const checkoutId = this.state.checkout.id
          return client.checkout.addLineItems(checkoutId, lineItemsToAdd).then(res => {
          this.setState({
            checkout: res,
          });
        });
      };

      updateQuantityInCart(lineItemId, quantity) {
        const checkoutId = this.state.checkout.id
        const lineItemsToUpdate = [{id: lineItemId, quantity: parseInt(quantity, 10)}]
    
        return client.checkout.updateLineItems(checkoutId, lineItemsToUpdate).then(res => {
        this.setState({
          checkout: res,
        });
        });
      }

      removeLineItemInCart(lineItemId) {
        const checkoutId = this.state.checkout.id
    
        return client.checkout.removeLineItems(checkoutId, [lineItemId]).then(res => {
        this.setState({
          checkout: res,
        });
        });
      }

      handleCartClose() {
        this.setState({
          isCartOpen: false,
        });
        }
    render(){
        let displayProducts;

        displayProducts = 
        <Products
            addVariantToCart={this.addVariantToCart}
            client={client}
            product={this.state.product}
        />
        return(
            <span>
            </span>
        )
    }
}