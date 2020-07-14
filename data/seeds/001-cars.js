
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { VIN: 'rowValue1', make: "vroom vroom", model:"model", mileage: 0 , status_of_the_title: 'new'},
        { VIN: 'rowValue2', make: "vroom vroom", model:"model", mileage: 1},
        { VIN: 'rowValue3', make: "vroom vroom", model:"model", mileage: 20}
      ]);
    });
};
