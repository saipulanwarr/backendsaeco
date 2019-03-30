'use strict'

const DetailCheckout = use('App/Models/DetailCheckout');


class DetailcheckoutController {
    async store({ request, response }){
        const detailCheckout = request.only(['checkout_id', 'order_id'])

        const detail = new DetailCheckout()
        detail.checkout_id = detailCheckout.checkout_id
        detail.order_id = detailCheckout.order_id

        await detail.save()

        return response.status(201).json(detail)
    }
}

module.exports = DetailcheckoutController
