'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CheckoutSchema extends Schema {
  up () {
    this.create('checkouts', (table) => {
      table.increments()
      table.string('fullname').nullable()
      table.string('email').nullable()
      table.string('notelp').nullable()
      table.string('address').nullable()
      table.integer('province_id').unsigned().references('id').inTable('provinces')
      table.integer('city_id').unsigned().references('id').inTable('cities')
      table.integer('courier_id').unsigned().references('id').inTable('couriers')
      table.integer('bank_id').unsigned().references('id').inTable('banks')
      table.timestamps()
    })
  }

  down () {
    this.drop('checkouts')
  }
}

module.exports = CheckoutSchema
