"use strict";
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
// 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
// let Guest:string[] = ["anika","vidia","eisha"];
// //Informing the guest that i found a bigger dinner table 
// Guest.map((i)=>console.log(`Dear ${i},I found a bigger dinner table.`));
// //add the guest in the beginning
// let guestFirst = "Gia";
// Guest.unshift(guestFirst);
// //adding guest in the middle
// let guestMiddle ="bubbi";
// let middleIndex = Guest.length / 2
// Guest.splice(middleIndex,0,guestMiddle)
// console.log(Guest)
// //adding last guest
// let guestLast = "meleny"
// Guest.push(guestLast)
// Guest.map((item)=>console.log(`Dear ${item}, You are still invited to a dinner.`))
// console.log(Guest)
// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.
// let Guest:string[] =[ 'Gia', 'anika', 'bubbi', 'vidia', 'eisha', 'meleny' ]
// console.log("I can invite only two people for dinner.")
// while (Guest.length > 2){
// let removeGuest = Guest.pop()
// console.log(`Dear ${removeGuest}, you are not invited to dinner.`)
// }
// Guest.map((items)=>
// console.log(`Dear ${items}, You are still ivited to dinner!`)
// )
// Guest.pop()
// Guest.pop()
// console.log(Guest)
// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// •1 Print your array in its original order.
// 2 Print your array in alphabetical order without modifying the actual list.
// 3 Show that your array is still in its original order by printing it.
// 4 Print your array in reverse alphabetical order without changing the order of the original list.
// 5 Show that your array is still in its original order by printing it again.
// 6 Reverse the order of your list. Print the array to show that its
// order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
let countries = ["pakistan", "india", "america", "china", "Zimbabwy"];
console.log("1 array in its original order.");
console.log(countries);
console.log("\n2 array in alphabetical order without modifying the actual list.");
console.log([...countries].sort());
console.log("\n3 array is still in its original order");
console.log(countries);
// 4 Print your array in reverse alphabetical order without changing the order of the original list.
console.log("\n4 array in reverse alphabetical order without changing the order of the original list.");
console.log([...countries].sort().reverse());
console.log("\n5 array is still in its original order by printing it again.");
console.log(countries);
console.log("\n6 Reverse the order of your list. Print the array to show that its order has changed.");
console.log(countries.sort());
// need to do more work on it
// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
// of people you are inviting to dinner.
// let Guest:string[] = ["anika","mustafa","eisha"];
// console.log(`i had invited ${Guest.length} guests to the dinner!`)
// 20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything
// else you’d like. Write a program that creates a list containing these items.
// let cities:string[] = ["karachi","Lahore","Islamabad","Quetta"];
// cities.map((items)=> console.log(items));
