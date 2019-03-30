'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Color extends Model {
    static get table(){
        return 'colors'
    }

    static get primary(){
        return 'id'
    }
}

module.exports = Color
