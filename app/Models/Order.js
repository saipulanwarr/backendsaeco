'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {
    static get table(){
        return 'orders'
    }

    static get primaryKey(){
        return 'id'
    }

    product(){
        return this.belongsTo('App/Models/Product');
    }
}

module.exports = Order
