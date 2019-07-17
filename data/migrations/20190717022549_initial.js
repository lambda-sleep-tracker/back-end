// implement changes to schema
exports.up = async function(knex) {
  await knex.schema.createTable('users', (tbl) => {
    tbl.increments('id');
    tbl
      .string('email')
      .unique()
      .notNullable();
    tbl
      .string('password')
      .notNullable();
    tbl
      .timestamp("created_at")
      .notNullable()
      .defaultTo(knex.fn.now());
  });

  await knex.schema.createTable('sleeps', (tbl) => {
    tbl.increments('id');
    tbl
      .string('bedtime');
    tbl
      .string('waketime');
    tbl
      .string('date');
    tbl
      .integer('sleepquality');
    tbl
      .integer('user_id')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
      .notNullable();
  });

};

// Undo changes
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('users');
  await knex.schema.dropTableIfExists('sleeps');

};
