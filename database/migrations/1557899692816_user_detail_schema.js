'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserDetailSchema extends Schema {
  up () {
    this.create('user_details', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('user_details')
  }
}

module.exports = UserDetailSchema
