/* @flow */

import {List} from 'immutable';

const list: List<number> = List.of(1, 2);


class Animal {
    name: string;
}

class Dog extends Animal {
    breed: string;
}

class Cat extends Animal {
    color: string;
}



let animals: List<Animal> = List.of();
let dogs: List<Dog> = List.of();

// nope
// animals = dogs;

// dogs = animals;