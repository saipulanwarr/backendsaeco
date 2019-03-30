'use strict'

const Checkout = use('App/Models/Checkout');

class CheckoutController {
    async index({ response }){
        let checkout = await Checkout.all();

        return response.json(checkout);
    }

    async store({ request, response }){
        const checkoutInfo = request.only(['fullname',  'courier_id', 'bank_id'])

        const checkout = new Checkout()
        checkout.fullname = checkoutInfo.fullname
        checkout.courier_id = checkoutInfo.courier_id
        checkout.bank_id = checkoutInfo.bank_id

        await checkout.save()

        return response.status(201).json(checkout)
    }
}

module.exports = CheckoutController
