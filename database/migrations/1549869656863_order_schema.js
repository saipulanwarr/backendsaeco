'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderSchema extends Schema {
  up () {
    this.create('orders', (table) => {
      table.increments()
      table.integer('qty').nullable()
      table.double('price_order').nullable()
      table.string('status').nullable()
      table.integer('product_id').unsigned().references().inTable('products')
      table.integer('color_id').unsigned().references().inTable('colors')
      table.timestamps()
    })
  }

  down () {
    this.drop('orders')
  }
}

module.exports = OrderSchema
