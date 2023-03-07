interface ICar {
    names: string;
    dataOfMade: number;
    numberGet?:number | string;
}

const getMyNewCar = (car: ICar):string => {
    return `My car name is ${car.names}, it is data of made ${car.dataOfMade}`
}



console.log(getMyNewCar({names:"Gentra", dataOfMade:2023}))