
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { vin: 'ROWVALUE1', make: "toyota", model:"corolla", mileage: 0 , status_of_the_title: 'new'},
        { vin: 'ROWVALUE2', make: "honda", model:"civic", mileage: 1},
        { vin: 'ROWVALUE3', make: "chevrolet", model:"chevy", mileage: 20}
      ]);
    });
};
