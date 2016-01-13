
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', function(table){
    table.increments().primary().unsigned();
    table.string('first_name');
    table.string('last_name');
    table.string('email');
    table.string('profile_id');
    table.integer('zipcode')
  }).then(function(){
    return knex.schema.createTable('connection', function(table){
      table.increments().primary().unsigned();
      table.integer('user_id').unsigned().references('id').inTable('user').onDelete('cascade');
      table.integer('petfinder_id');
      table.boolean('liked');
    })
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('connection').then(function(){
    return knex.schema.dropTable('user');
  })
};
