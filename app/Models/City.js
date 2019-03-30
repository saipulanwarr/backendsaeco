'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class City extends Model {
    static get table(){
        return 'cities'
    }

    static get primary(){
        return 'id'
    }
}

module.exports = City
