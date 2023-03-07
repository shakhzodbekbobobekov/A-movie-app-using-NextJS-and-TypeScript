interface Icar {
    name: string;
    color: string;
    isBallon: number;
    speed: ISpeedCar;
    price:IPriceCar;
}


interface ISpeedCar {
    max: number;
    min: number
}

interface IPriceCar {
    total: string;
    credit: string;
    discount: number;
}

const car:Icar
