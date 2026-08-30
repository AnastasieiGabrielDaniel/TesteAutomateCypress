import { faker } from '@faker-js/faker';

export const inform ={
    inventoryInfo: 'Sauce Labs Bike Light',
    overview: 'Checkout: Overview',
    completed: 'Checkout: Complete!',
    finalOrder: 'Thank you for your order!',
    myCart: 'Your Cart',
    myInfo: 'Checkout: Your Information'
};

export const random ={
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    postalCode: faker.location.zipCode()
};