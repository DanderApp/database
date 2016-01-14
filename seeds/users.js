var knex = require('../db/knex')

exports.seed = function(knex, Promise) {
  return knex('user').del().then(function(){
    return Promise.all([
      knex('user').insert({
        first_name: 'Ryan',
        last_name: 'Douglas',
        email: null,
        profile_id: 'RPD1234',
        zipcode: 80201
      }),
      knex('user').insert({
        first_name: 'Derik',
        last_name: 'Linch',
        email: null,
        profile_id: 'DL1234',
        zipcode: 59801
      }),
      knex('user').insert({
        first_name: 'Zac',
        last_name: 'Smith',
        email: null,
        profile_id: 'ZS1234',
        zipcode: 99546
      })
    ]);
  }).then(function() {
    return knex('connection').del().then(function(){
      return Promise.all([
        knex('connection').insert({
          user_id: 1,
          petfinder_id: 1,
          liked: true
        }),
        knex('connection').insert({
          user_id: 2,
          petfinder_id: 1,
          liked: false
        }),
        knex('connection').insert({
          user_id: 1,
          petfinder_id: 2,
          liked: false
        }),
        knex('connection').insert({
          user_id: 2,
          petfinder_id: 2,
          liked: true
        }),
        knex('connection').insert({
          user_id: 3,
          petfinder_id: 3,
          liked: true
        })
      ])
    })
  })
};
