import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('items').insert([
    { title: 'Lâmpadas', image: 'lampadas.svg'},
    { title: 'Pilhas e baterias', image: 'baterias.svg'},
    { title: 'Papéis e Papelão', image: 'papeis-papelap.svg'},
    { title: 'Residuos Eletrônicos', image: 'eletronicos.svg'},
    { title: 'Óleo de Cozinha', image: 'oleo.svg'}
  ])
}