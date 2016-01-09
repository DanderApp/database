
exports.up = function(knex, Promise) {
  return Promise.all([knex.schema.createTable('shelter', function(table){
    table.increments();
    table.integer('zipcode').unsigned();
    table.integer('phone_number').unsigned();
    table.string('name');
    }),
      knex.schema.createTable('breed', function(table){
      table.increments();
      table.string('name');
      })
  ]).then(function(){
      return Promise.all([
      knex.schema.createTable('dog', function(table){
        table.increments();
        table.string('name');
        table.string('age');
        table.string('sex');
        table.string('breed_id').unsigned().references('id').inTable('breed').onDelete('cascade');
        table.string('pic_url');
        table.integer('shelter_id').unsigned().references('id').inTable('shelter').onDelete('cascade');
      }),
      knex.schema.createTable('person', function(table){
        table.increments();
        table.string('name');
        table.string('email');
        table.string('password');
        table.integer('shelter_id').unsigned().references('id').inTable('shelter').onDelete('cascade');
      })
    ]).then(function(){
        return knex.schema.createTable('connection', function(table){
          table.integer('dog_id');
          table.integer('person_id');
          table.primary(['dog_id', 'person_id'])
        })
      })
    })
};

exports.down = function(knex, Promise) {

};
