// Primitivas
let primitivaString = 'string';

let primitivaNumber = 1234;

let primitivaBigInt = 123456789012345678901234567890n;

let primitivaBoolean = true;

let primitivaSymbol = Symbol("xpto");
let primitivaSymbol2 = Symbol("xpto");

if (primitivaSymbol === primitivaSymbol2) {
    console.log(true)
}

const primitivaUndefined = undefined;

const primitivaNull = null;

// Wrappers primitivos

primitivaString.toUpperCase();

primitivaNumber.toFixed(2);

primitivaBigInt.toString();

primitivaBoolean.valueOf();

primitivaSymbol.description;
