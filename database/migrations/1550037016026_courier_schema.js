'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CourierSchema extends Schema {
  up () {
    this.create('couriers', (table) => {
      table.increments()
      table.string('name_courier').nullable()
      table.string('shipping').nullable()
      table.string('image_courier').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('couriers')
  }
}

module.exports = CourierSchema
