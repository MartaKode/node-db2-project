
exports.up = function(knex) {
    return knex.schema.createTable('sales', tbl => {
        tbl.boolean('sold').notNullable()

        tbl.integer('car_id').unsigned()
        tbl.foreign('car_id').references('id').inTable('cars')

        tbl.string('car_vin').unsigned()
        tbl.foreign('car_vin').references('VIN').inTable('cars')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('sales')
};
