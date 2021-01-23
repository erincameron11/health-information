/*
  Function provided by SeamlessMD to perform unit testing on
==============================================================
  if test is a multiple of 3, return Fizz
  if test is not a multiple of 3, but is a multiple of 5, return Buzz
  if test is not a multiple of 3 or 5, return empty string

  To avoid a syntax error, I have modified the first line of the original function from:
      var fizzBuzz : function( test ){
  to:
      var fizzBuzz = function( test ){
*/


// Write at least 3 unit tests (any language, can be pseudo code) for the below javascript function:
var fizzBuzz = function( test ){
  if ( test % 3 === 0 ){
   	return 'Fizz';
  } else if (test % 5 === 0 ){
	  return 'Buzz';
  }
    return '';
}

// Testing an input of 3, expected result 'Fizz'
test('test = 3; output should be Fizz', () => {
  const result = fizzBuzz(3);
  expect(result).toBe("Fizz");
});

// Testing an input of 5, expected result 'Buzz'
test('test = 5; output should be Buzz', () => {
  const result = fizzBuzz(5);
  expect(result).toBe("Buzz");
});

// Testing an input of string, expected result empty string
test('test = "Hello"; output should be empty string', () => {
  const result = fizzBuzz("Hello");
  expect(result).toBe("");
});

// Testing an input of a different data structure (array), expected result empty string
test('test = [1, 2, 3, 4]; output should be empty string', () => {
  const result = fizzBuzz([1, 2, 3, 4]);
  expect(result).toBe("");
});

// Testing an input of a different data structure (array with different index values), 
// expected result empty string
test('test = [3, 30, 15, 9]; output should be empty string', () => {
  const result = fizzBuzz([3, 30, 15, 9]);
  expect(result).toBe("");
});

//  Testing an input of 30 (multiple of both 3 and 5), expected result 'Fizz'
test('test = 30; output should be Fizz', () => {
  const result = fizzBuzz(30);
  expect(result).toBe("Fizz");
});

//  Testing an input of 1.2, expected result empty string
test('test = 1.2; output should be empty string', () => {
  const result = fizzBuzz(1.2);
  expect(result).toBe("");
});

//  Testing an input of 0, expected result 'Fizz'
test('test = 0; output should be Fizz', () => {
  const result = fizzBuzz(0);
  expect(result).toBe("Fizz");
});


/* 
The original could be enhanced by accounting for results that 
are true for both "Fizz" and "Buzz". For example:

var fizzBuzz = function( test ){
  if ( test % 3 === 0 &&  test % 5 === 0 ){
    return 'FizzBuzz';
  } else if ( test % 3 === 0 ){
   	return 'Fizz';
  } else if (test % 5 === 0 ){
	  return 'Buzz';
  }
    return '';
}

*/
