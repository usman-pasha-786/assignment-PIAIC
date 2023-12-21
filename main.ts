// 2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric,
// would you like to learn some Python today?”
// let personName = "usman iqbal";
// let message = `Hello ${personName}, would you like to learn typescript`;
// console.log(message);

// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// let person = "usman iqbal";
// console.log(person.toLowerCase());
// console.log(person.toUpperCase());
// console.log(person.charAt(0).toUpperCase()+person.slice(1));

// 4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the
// following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
// console.log('Ralph Waldo said, "Life is a journey, Not a destination."');

// 5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
// let famous_person = "Ralph Waldo";
// let message1 ="Life is a journey, Not a destination.";
// console.log(`${famous_person} said, "${message1}"`);

// 6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
// character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
// let stripedName = "Muhammad\tUsman";
// console.log(stripedName);
// let stripedName1 = "Muhammad\nUsman";
// console.log(stripedName1);

// 7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results. 
// let addition8 = 4 + 4;
// console.log(addition8);
// let subtraction8 = 16 - 8;
// console.log(subtraction8);
// let multiplication8 = 4 * 2;
// console.log(multiplication8);
// let division8 = 16 / 2;
// console.log(division8);


// 8. You should create four lines that look like this:
// _____________________________________________
// _____________________________________________
// _____________________________________________
// _____________________________________________
// Your output should simply be four lines with the number 8 appearing once on each line.
// let line4 = "_"
// console.log("8."+line4.repeat(40))
// console.log("8."+line4.repeat(40))
// console.log("8."+line4.repeat(40))
// console.log("8."+line4.repeat(40))

// 9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
// let favorite_number = 10;
// let message = `Number ${favorite_number} is my favourite number!`;
// console.log(message);

// 10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write
// because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence
// describing what the program does.

//  simple program by useing backtick and use variable in it
// let favorite_number = 10;
// let message = `Number ${favorite_number} is my favourite number!`;
// console.log(message);

// date 15/12/2023
// program of operators
// let addition8 = 4 + 4;
// console.log(addition8);
// let subtraction8 = 16 - 8;
// console.log(subtraction8);
// let multiplication8 = 4 * 2;
// console.log(multiplication8);
// let division8 = 16 / 2;
// console.log(division8);


// 11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
// let names:string[] = ["anika","mustafa","eisha"];
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);


// 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message
// should be the same, but each message should be personalized with the person’s name.
// let names:string[] = ["anika","mustafa","eisha"];
// let message = "You are invited to dinner.";
// console.log(names[0]+","+message);
// console.log(names[1]+","+message);
// console.log(names[2]+","+message);


// 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list
// // to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
// let vehicles:string[] = [
//     "Civic",
//     "Corrolla",
//     "BMW",
//     "Mercedez Benz"
// ];
// vehicles.map((i)=>
// console.log(`I would like to own a ${i}.`))


// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
// invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
// let Guest:string[] = ["anika","mustafa","eisha"];
// Guest.map((i)=>
// console.log(`Dear ${i}, You are cordially invited to a dinner.`))

// 15. Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still
// in your list.

// let Guest:string[] = ["anika","mustafa","eisha"];
// // i heard that mustafa can not make the dinner with us
// let outGuest = "mustafa";
// console.log(`${outGuest}, can not make the dinner with us.`)
// // i want to invite vidia for dinner thatswhy i want to replacing the guest
// let inGuest = "vidia";
// Guest[Guest.indexOf(outGuest)] = inGuest
// Guest.map((i)=>
// console.log(`Dear ${i},You are cordially invited to dinner.`)) 
