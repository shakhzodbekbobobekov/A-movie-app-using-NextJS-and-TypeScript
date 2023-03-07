var getMyNewCar = function (car) {
    return "My car name is ".concat(car.names, ", it is data of made ").concat(car.dataOfMade);
};
console.log(getMyNewCar({ names: "Gentra", dataOfMade: 2023 }));
