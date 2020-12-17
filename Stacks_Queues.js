// Stack
// LiFo

// Ex.
// Manage Function Incovation
// Undo/Redo
// Routing (the History Object on a browser)

//var stack = [];
// This is from the end
stack.push(55); // Push adds a value to the end of a stack/array
stack.pop(); // Pop removes tha last item

// This is from the beginning
stack.unshift(50); // Adds to the beginning
stack.unshift(25); // Adds to the begginning
stack.shift(); // Removes first item in stack

// Effeciency
// Push and Pop are more effecient since you don't have to
// reindex the array. That is if we are using arrays.
