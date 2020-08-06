import Knex from 'knex';

export async function up(knex: Knex) {
  // quais alterações queremos realizar no banco de dados
  
  return knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('avatar').notNullable();
    table.string('whatsapp').notNullable();
    table.string('bio').notNullable();

  });
}

export async function down(knex: Knex) {
  // se deu merda o que eu faço pra voltar. Reverter alterações.
  return knex.schema.dropTable('users');
}