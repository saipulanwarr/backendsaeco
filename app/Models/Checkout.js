'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Checkout extends Model {
    static get table(){
        return 'checkouts'
    }

    static get primaryKey(){
        return 'id'
    }

    province(){
        return this.belongsToMany('App/Models/Checkout')
    }
}

module.exports = Checkout
