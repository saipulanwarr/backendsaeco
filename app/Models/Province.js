'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Province extends Model {
    static get table(){
        return 'provinces'
    }

    static get primary(){
        return 'id'
    }

    checkout(){
        return this.hasMany('App/Models/Checkout');
    }
}

module.exports = Province
