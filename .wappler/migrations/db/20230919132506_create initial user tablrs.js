
exports.up = function(knex) {
  return knex.schema
    .createTable('user', async function (table) {
      table.increments('user_id');
      table.string('email');
      table.string('first_name');
      table.string('last_name');
      table.string('password');
      table.datetime('date_signup').defaultTo(knex.fn.now());
    })
    .createTable('role', async function (table) {
      table.increments('id');
      table.string('user_id');
      table.string('role', 1);
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('role')
    .dropTable('user')
};
