
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { vin: 'rowValue1', make: "vroom vroom", model:"model", mileage: 0 , status_of_the_title: 'new'},
        { vin: 'rowValue2', make: "vroom vroom", model:"model", mileage: 1},
        { vin: 'rowValue3', make: "vroom vroom", model:"model", mileage: 20}
      ]);
    });
};
