'use strict'

const Bank = use('App/Models/Bank');

class BankController {
    async index({ response }){
        let bank = await Bank.all();

        return response.json(bank);
    }
}

module.exports = BankController
