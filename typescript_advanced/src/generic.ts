// const cars: string[] = ['Ford', 'Audi'];
// const cars2: Array<string> = ['Ford', 'Audi'];
//
// // const promise = new Promise<string>(resolve => {
// const promise: Promise<string> = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('Promise resolved');
//     }, 2000);
// });
//
// promise.then(data => {
//     console.log(data.toLowerCase());
// });

// function mergeObjects<T extends object, R extends object>(a: T, b: R) {
//     return Object.assign({}, a, b);
// }
//
// const merged = mergeObjects({name: 'dadadad'}, {age: 28});

// ===============
interface ILength {
    length: number;
}

function withCount<T extends ILength>(value: T): { value: T, count: string } {
    return {
        value,
        count: `in this object ${value.length} symbols`,
    };
}

// console.log(withCount('Hi typescript'));
// console.log(withCount(['I', '\'m', 'Array']));
// console.log(withCount({length: 11}));

//=================================================//
// function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
//     return obj[key];
// }
//
// const person = {
//     name: 'SSSSSSS',
//     age: 28,
//     // job: 'dev',
// };
// console.log(getObjectValue(person, 'name'));
// console.log(getObjectValue(person, 'job'));

//=================================================//
// class Collection<T extends number | string | boolean> {
//     // private _items: T[] = [];
//
//     constructor(private _items: T[] = []) {}
//
//     add(item: T) {
//         this._items.push(item);
//     }
//
//     remove(item: T) {
//         this._items = this._items.filter(i => i !== item);
//     }
//
//     get items(): T[] {
//         return this._items;
//     }
// }
//
// const strings = new Collection<string>(['I', 'am', 'strings']);
// strings.add('cccc');
// strings.remove('am');
// console.log(strings.items);

// const objects = new Collection([{a: 1}, {b: 2}]);
// objects.remove({b: 2});
// console.log(objects.items);

//=================================================//
interface Car {
    model: string;
    year: number;
}

function createAndValidateCar(model: string, year: number): Car {
    const car: Partial<Car> = {}; // временно создаем объект без ключей

    if (model.length > 3) {
        car.model = model;
    }

    if (year > 2000) {
        car.year = year;
    }

    return car as Car;
}

// ================================= //
const cars: Readonly<Array<string>> = ['Ford', 'Audi'];
// cars.shift();

const audi: Readonly<Car> = {
    model: 'Audi',
    year: 2015
};
// audi.model = 'Ferrari';





