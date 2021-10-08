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
    render(){

        return(
            <span>
            </span>
        )
    }
}