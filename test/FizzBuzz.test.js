import { test, expect } from 'vitest';
import { FizzBuzz } from '../src/FizzBuzz';

let fizzBuzzGame = new FizzBuzz();

test('Given 1 when converting fizzbuzz number then should return "1"', () => {
	// Given
    let numberToConvert = 1;
    // When
    let convertedNumber = fizzBuzzGame.convert(numberToConvert);
    // Then
    let expectedNumber = "1";
    expect(convertedNumber).toBe(expectedNumber);
});

test('Given 2 when converting fizzbuzz number then should return "2"', () => {
    // Given
    let numberToConvert = 2;
    // When 
    let convertedNumber = fizzBuzzGame.convert(numberToConvert);
    // Then
    let expectedNumber = "2";
    expect(convertedNumber).toBe(expectedNumber);
});

test('Given 3 when converting fizzbuzz number then should return "Fizz"', () => {
    // Given
    let numberToConvert = 3;
    // When
    let convertedNumber = fizzBuzzGame.convert(numberToConvert);
    // Then
    let expectedResult = "Fizz";
    expect(convertedNumber).toBe(expectedResult);
});

test('Given 6 when converting fizzbuzz number then should return "Fizz"', () => {
    // Given
    let numberToConvert = 6;
    // When
    let convertedNumber = fizzBuzzGame.convert(numberToConvert);
    // Then
    let expectedResult = "Fizz";
    expect(convertedNumber).toBe(expectedResult);
});

test('Given 5 when converting fizzbuzz number then should return "Buzz"', () => {
    // Given
    let numberToConvert = 5;
    // When 
    let convertedNumber = fizzBuzzGame.convert(numberToConvert);
    // Then
    let expectedResult = "Buzz";
    expect(convertedNumber).toBe(expectedResult);
});

test('Given 10 when converting fizzbuzz number then should return "Buzz"', () => {
	// Given
	let numberToConvert = 10;
	// When
	let convertedNumber = fizzBuzzGame.convert(numberToConvert);
	// Then
	let expectedResult = "Buzz";
	expect(convertedNumber).toBe(expectedResult);
});


test('Given 15 when converting fizzbuzz number then should return "FizzBuzz"', () => {
	// Given
	let numberToConvert = 15;
	// When
	let convertedNumber = fizzBuzzGame.convert(numberToConvert);
	// Then
	let expectedResult = "FizzBuzz";
	expect(convertedNumber).toBe(expectedResult);
});

test('Given 30 when converting fizzbuzz number then should return "FizzBuzz"', () => {
	// Given
	let numberToConvert = 30;
	// When
	let convertedNumber = fizzBuzzGame.convert(numberToConvert);
	// Then
	let expectedResult = "FizzBuzz";
	expect(convertedNumber).toBe(expectedResult);
});