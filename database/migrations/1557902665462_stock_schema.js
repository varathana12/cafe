'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StockSchema extends Schema {
  up () {
    this.create('stocks', (table) => {
      table.increments()
      table.string('item_name', 255).notNullable().unique()
      table.decimal('amount', 10).defaultTo(0)
      table.timestamps()
    })
  }

  down () {
    this.drop('stocks')
  }
}

module.exports = StockSchema
