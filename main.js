"use strict";
// 2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric,
// would you like to learn some Python today?”
let personName = "usman iqbal";
let message = `Hello ${personName}, would you like to learn typescript`;
console.log(message);
// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let person = "usman iqbal";
console.log(person.toLowerCase());
console.log(person.toUpperCase());
console.log(person.charAt(0).toUpperCase() + person.slice(1));
// 4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the
// following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
console.log('Ralph Waldo said, "Life is a journey, Not a destination."');
// 5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let famous_person = "Ralph Waldo";
let message1 = "Life is a journey, Not a destination.";
console.log(`${famous_person} said, "${message1}"`);
