// Hash Map
// Hash Map and Hash Table are the same thing

/*
// Hash Map are used to store key-value pairs
// Keys in a Hash Table are not ordered
// Unlike Arrays, they are very fast for inserting and removing
*/

/*
// Big O
// Average Case
// Insert O(1)
// Deletion O(1)
// Access O(1)
//
// Worst case would be O(n) for Access and Deletion
// But that is a rare occurance and when a hash table is one sided.
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
// i.e. We turn strings into a valid array index.
//
// A function that performs this task is called a has function.
//
// What makes a good hash?
// Fast i.e. constant time.
// Doesnt cluster ourputs as specific indices, but distributes uniformly.
// Deterministic (same inputs yields same output).
*/

/*
// How we handle Collisions
//
// 1. Separate Chaining
// At each index in out array we store values using a more sophisticated data structure (i.e. an array or a linked list).
// This allows us to store multiple key-value pairs at the same index.
// Essentially you add an array at an index that can hold multple key-value pairs
//
// 2. Linear Probing
// When we find a collision, we search through an array to find the next empty slot.
// Unlike separate chaining, this allows us to store a single key-value at each index.
*/

/*
// Implementation
// We will implement using Separate Chaining
// 
// Set
// 1. Accepts a key and a value
// 2. Hashes the key
// 3. Stores the key-value pair in the hash map array via separate chaining
//
// Get
// 1. Accepts a Key
// 2. Hashes the key
// 3. Retieves the key-value pair in the hash map
// 4. If the key isn't found, return indefined
*/

class HashMap {
  // Default prime number if we don't specify one
  constructor(siize = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;

    // This reduces collisions
    let primeNumber = 31;

    // We will look only at the first 100 characters
    // We are assumimg that we won't have a string with more than 100 characters
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];

      // Map "a" to 1, "b" to 2, "c" to 3, etc.
      // The "- 96" converts it to be alphabetically
      let value = char.char.CodeAt(0) - 96;
      total = (total + primeNumber + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, value) {
    let index = this._hash(key);

    if (!this.keyMap[index]) {
      // Put an array into the index of the keyMap
      this.keyMap[index] = [];
    }

    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);

    if (!this.keyMap[index]) return undefined;

    // Loop through the array at that index
    for (let i = 0; i < this.keyMap[index].length; i++) {
      // 'i' is the key-value inside the array
      // '0' is where we store the key. 1 is where we store the value
      if (this.keyMap[index][i][0] === key) {
        // To return the entire key-value pair we remove [1]
        // Here we are just returning the value in the pair
        return this.keyMap[index][i][1];
      }
    }
  }

  // Returns an array of all keys
  keys() {
    let keysArray = [];

    // Loop through the array at that index
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          // Check if their is a duplicate value
          if (!keysArray.includes(this.keyMap[i][j][0])) {
            keysArray.push(this.keyMap[i][j][0]);
          }
        }
      }
    }

    return keysArray;
  }

  // Returns an array of all values
  values() {
    let valuesArray = [];

    // Loop through the array at that index
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          // Check if their is a duplicate value
          if (!valuesArray.includes(this.keyMap[i][j][1])) {
            valuesArray.push(this.keyMap[i][j][1]);
          }
        }
      }
    }

    return valuesArray;
  }
}

/*
let hm = new HashMap(17);
hm.set("Hello World", "How are you!");
hm.set("I love", "Pizza");
hm.set("Lamborghini", "Aventador");
*/
