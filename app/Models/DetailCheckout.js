'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class DetailCheckout extends Model {
    static get table(){
        return 'detailcheckouts'
    }

    static get primaryKey(){
        return 'id'
    }
}

module.exports = DetailCheckout
