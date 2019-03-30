'use strict'

const Database = use('Database');
const Order = use('App/Models/Order');
const Bank = use('App/Models/Bank');
const City = use('App/Models/City');
const Province = use('App/Models/Province');
const Courier = use('App/Models/Courier');

class OrderController {
    async index({ response }){
        let order = await Order.query().with('product').where('status', '=', 'cart').fetch()

        return response.json(order);
    }

    async store({ request, response }){
        const orderInfo = request.only(['qty', 'price_order', 'product_id', 'status', 'color_id'])

        const order = new Order()
        order.qty = orderInfo.qty
        order.price_order = orderInfo.price_order
        order.product_id = orderInfo.product_id
        order.status = orderInfo.status
        order.color_id = orderInfo.color_id

        await order.save()

        return response.status(201).json(order);
    }

    async update({ params, request, response }){
        const orderInfo = request.only(['qty', 'status'])

        const order = await Order.find(params.id)
        if(!order){
            return response.status(404).json({ data: 'Resource not found' })
        }

        order.qty = orderInfo.qty
        order.status = orderInfo.status

        await order.save()

        return response.status(200).json(order)
    }

    async delete({ params, response }){
        const order = await Order.find(params.id)
        if(!order){
            return response.status(404).json({ data: 'Resource not found' })
        }

        await order.delete()

        return response.status(204).json(null)
    }

    async countorder({ response }){
        const count = await Database.from('orders').count()

        return response.json(count);
    }
}

module.exports = OrderController
