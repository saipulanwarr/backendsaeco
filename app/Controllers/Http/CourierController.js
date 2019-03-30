'use strict'

const Courier = use('App/Models/Courier');

class CourierController {
    async index({ response }){
        let courier = await Courier.all();

        return response.json(courier);
    }
}

module.exports = CourierController
