
exports.up = function(knex, Promise) {
  return Promise.all([knex.schema.createTable('shelter', function(table){
    table.increments('shelter_id').primary().unsigned();
    table.integer('zipcode').unsigned();
    table.integer('phone_number').unsigned();
    table.string('name');
    }),
      knex.schema.createTable('breed', function(table){
      table.increments('breed_id').primary().unsigned();
      table.string('name');
      })
  ]).then(function(){
      return knex.schema.createTable('dog', function(table){
        table.increments('dog_id').primary().unsigned();
        table.integer('petfinder_id');
        table.string('name');
        table.string('age');
        table.string('sex');
        table.integer('breed_id').unsigned().references('breed_id').inTable('breed').onDelete('cascade');
        table.string('pic_url');
        table.boolean('is_adopted');
        table.integer('shelter_id').unsigned().references('shelter_id').inTable('shelter').onDelete('cascade');
      })
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('dog').then(function(){
     return Promise.all([
       knex.schema.dropTable('shelter'),
       knex.schema.dropTable('breed')
     ])
  })
};
