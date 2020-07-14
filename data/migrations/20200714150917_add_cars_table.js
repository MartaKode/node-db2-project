
exports.up = function (knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments('id') //primary key

        tbl.string('vin', 128).unique().notNullable() //Vehicle identification Number (can contains capital letters)

        tbl.string('make', 128).notNullable()

        tbl.string('model', 128).notNullable()

        tbl.decimal('mileage').defaultTo(0)

        //below not required
        tbl.string('transmission_type')

        tbl.text('status_of_the_title')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('cars')
};
