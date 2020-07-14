
exports.up = function(knex) {
    return knex.schema.createTable('sales', tbl => {
        tbl.boolean('sold').notNullable()

        tbl.integer('car_id').unsigned().references('id').inTable('cars') //.references() implies .foreign() no need for unsigned() --> doesn't allow negative value(makes it not negative)

        tbl.string('car_vin').unsigned().references('car.vin') // same as references('vin').inTable('cars')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('sales')
};
