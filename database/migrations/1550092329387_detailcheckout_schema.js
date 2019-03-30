'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DetailcheckoutSchema extends Schema {
  up () {
    this.create('detailcheckouts', (table) => {
      table.increments()
      table.integer('checkout_id').unsigned().references('id').inTable('checkouts')
      table.integer('order_id').unsigned().references('id').inTable('orders')
      table.timestamps()
    })
  }

  down () {
    this.drop('detailcheckouts')
  }
}

module.exports = DetailcheckoutSchema
