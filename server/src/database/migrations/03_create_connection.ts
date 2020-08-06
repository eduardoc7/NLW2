import Knex from 'knex';

export async function up(knex: Knex) {
  // quais alterações queremos realizar no banco de dados
  
  return knex.schema.createTable('connections', table => {
    table.increments('id').primary();

    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    table.timestamp('created_at')
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
      .notNullable();
  });
}

export async function down(knex: Knex) {
  // se deu merda o que eu faço pra voltar. Reverter alterações.
  return knex.schema.dropTable('connections');
}