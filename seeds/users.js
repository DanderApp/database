
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({
      first_name: 'Ryan',
      last_name: 'Douglas',
      email: null,
      profile_id: 'RPD1234'
  }),
    knex('users').insert({
      first_name: 'Ryan',
      last_name: 'Douglas',
      email: null,
      profile_id: 'RPD1234'
  }),
    knex('users').insert({
      first_name: 'Ryan',
      last_name: 'Douglas',
      email: null,
      profile_id: 'RPD1234'
  });
};
