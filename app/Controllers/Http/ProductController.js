'use strict'

const Product = use('App/Models/Product');
const Color = use('App/Models/Color');

class ProductController {
    async index({ response }){
       let products = await Product.all()

       return response.json(products)
    }

    async show({ params, response }){
        const product = await Product.find(params.id)

        return response.json(product)
    }

    async color({ response }){
        let color = await Color.all()

        return response.json(color)
    }
}

module.exports = ProductController
