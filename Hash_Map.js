// Hash Map
// Hash Map and Hash Table are the same thing

/*
// Hash Map are used to store key-value pairs
// Keys in a Hash Table are not ordered
// Unlike Arrays, they are very fast for inserting and removing
*/

/*
// Python has Dictionaries
// JS has Objects and Maps*
// * Objects have som erestrictions, but are basically has tables
// Java, Go, Scala haves Maps
// Ruby has Hashes
*/

// We implement our own Hash Map here.
// We will do this by using an array.

/*
// Hashing
// In order to look up values by key,
// we need a way to convert keys into valid array indices.
// i.e. We turn strings into a valid array index
//
// A function that performs this task is called a has function.
//
// What makes a good hash?
// Fast i.e. constant time
// Doesnt cluster ourputs as specific indices, but distributes uniformly
// Deterministic (same inputs yields same output)
*/

function hash(key, arrayLen) {
  let total = 0;

  for (let char of key) {
    // Map "a" to 1, "b" to 2, "c" to 3, etc.
    // The "- 96" converts it to be alphabetically
    let value = char.char.CodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }

  return total;
}
