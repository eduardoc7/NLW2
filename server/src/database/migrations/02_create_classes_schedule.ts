import Knex from 'knex';

export async function up(knex: Knex) {
  // quais alterações queremos realizar no banco de dados
  
  return knex.schema.createTable('class_schedule', table => {
    table.increments('id').primary();

    table.integer('week_day').notNullable();
    table.integer('from').notNullable();
    table.integer('to').notNullable();

    table.integer('class_id')
      .notNullable()
      .references('id')
      .inTable('classes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
}

export async function down(knex: Knex) {
  // se deu merda o que eu faço pra voltar. Reverter alterações.
  return knex.schema.dropTable('class_schedule');
}