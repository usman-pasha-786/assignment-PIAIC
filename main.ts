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

// let countries: string[] = ["pakistan", "india", "america", "china", "Zimbabwy"];
// console.log("1 array in its original order.")
// console.log(countries)
// console.log("\n2 array in alphabetical order without modifying the actual list.")
// console.log([...countries].sort())
// console.log("\n3 array is still in its original order")
// console.log(countries)
// // 4 Print your array in reverse alphabetical order without changing the order of the original list.
// console.log("\n4 array in reverse alphabetical order without changing the order of the original list.")
// console.log([...countries].sort().reverse())

// console.log("\n5 array is still in its original order by printing it again.")
// console.log(countries)
// console.log("\n6 Reverse the order of your list. Print the array to show that its order has changed.")
// console.log(countries.sort())

// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
// of people you are inviting to dinner.

// let Guest:string[] = ["anika","mustafa","eisha"];
// console.log(`i had invited ${Guest.length} guests to the dinner!`)


// 20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything
// else you’d like. Write a program that creates a list containing these items.
// let cities:string[] = ["karachi","Lahore","Islamabad","Quetta"];
// cities.map((items)=> console.log(items));

// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// let student1 = {
//     name: "Mustafa Pasha",
//     age: 18,
//     course: "Ai, Web3, Metaverse"
// };
// let student2 = {
//     name: "Anika Usman",
//     age: 19,
//     course: "Ai, Web3, Metaverse"
// };
// let student3 = {
//     name: "Usman",
//     age: 45,
//     course: "Ai, Web3, Metaverse"
// };
// console.log(student1.name)
// console.log(student2.name)
// console.log(student3.name)
// const arr =[{ name: "Mustafa Pasha",
// age: 18,
// course: "Ai, Web3, Metaverse"}]
// arr.push(student2)
// arr.push(student3)
// console.log(arr)



// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs
// to produce an index error. Make sure you correct the error before closing the program.
// let countries: string[] = 
// ["pakistan",
// "india",
// "america",
// "china", 
// "Zimbabwy"];
// console.log(countries[6]);
// console.log(countries[0]);


// 23. Conditional Tests: Write a series of conditional tests. Print a statement
// describing each test and your prediction for the results of each test. Your code
// should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

// let car = "subaru";
// console.log(car == "subaru")  //True
// console.log(car == "Honda")  //False
// console.log(car === "subaru")  //True
// console.log(car === "SubarU")  //False
// console.log(car !== "Toyota")  //True
// console.log(car !== "subaru")  //False
// console.log(car != "Mazda")  //True
// console.log(car != "subaru")  //False
// console.log(car != "SUBARU")  //True
// console.log(car != "subaru")  //False




// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

// let str1 = "Hello World";
// let str2 = "hello world";
// console.log(str1 === str2); //False
// console.log(str1 !== str2); // True

// let text1 = "Hello World";
// let text2 = "hello world";
// console.log(text1.toLowerCase() === text2)
// console.log(text1.toLowerCase() === text2.toUpperCase())

// let num1 = 100;
// let num2 = 50;
// console.log(num1 === num2) //False
// console.log(num1 !== num2) //True
// console.log(num1 > num2) //True
// console.log(num1 < num2) //False
// console.log(num1 >= num2) //True
// console.log(num1 <= num2) //False

// let a = 50;
// let b = 100;
// let c = 200;
// console.log(a < b && b < c); //both conditions are true. True
// console.log(a > b || b < c); //One condition is true.True
// console.log(a < b && b > c); //One condition is fasle . False
// console.log(a > b || b > c); // Both conditions are false. False

// let countries:string[] = ["pakistan","india","china","iran","afghanistan"]
// console.log(countries.includes("china"));
// console.log(countries.includes("usa"));

// let countries:string[] = ["pakistan","india","china","iran","afghanistan"]
// console.log(!countries.includes("usa"))
// console.log(!countries.includes("pakistan"))



// 25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a
// variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print
// a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that
// fails. (The version that fails will have no output.)

// let alien_color = "green";
// if ( alien_color === "green"){
//     console.log("Congratulation! You have earn 5 points")
// }

// alien_color = "blue";
// if ( alien_color === "green"){
    // console.log("You have earned 5 points")
// }



// 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
// write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.

// let alien_color = "green";
// if ( alien_color === "green"){
//     console.log("Congratulation! You have earn 5 points");
// }else{
//     console.log("Congratulation! You have earn 10 points");
// }

// alien_color = "blue";
// if ( alien_color === "green"){
//     console.log("Congratulation! You have earn 5 points");
// }else{
//     console.log("Congratulation! You have earn 10 points");
// }




// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.


// 1st version
// let alien_color = "green";
// if ( alien_color === "green"){
//     console.log("Congratulation! You have earn 5 points");
// }else if( alien_color === "yellow"){
//     console.log("Congratulation! You have earn 10 points");
// }else if( alien_color === "red"){
//     console.log("Congratulation! You have earn 15 points");
// }else{
//     console.log("Not found any color");
// }

// 2nd version
// alien_color = "yellow";
// if ( alien_color === "green"){
//     console.log("Congratulation! You have earn 5 points");
// }else if( alien_color === "yellow"){
//     console.log("Congratulation! You have earn 10 points");
// }else if( alien_color === "red"){
//     console.log("Congratulation! You have earn 15 points");
// }else{
//     console.log("Not found any color");
// }

// 3rd version
// alien_color = "red";
// if ( alien_color === "green"){
//     console.log("Congratulation! You have earn 5 points");
// }else if( alien_color === "yellow"){
//     console.log("Congratulation! You have earn 10 points");
// }else if( alien_color === "red"){
//     console.log("Congratulation! You have earn 15 points");
// }else{
//     console.log("Not found any color");
// }

// 28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// if person < 2:
// console.log("baby");
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.

// let person = 2;
// if(person < 2){
//     console.log("person is baby!");
// }
// else if(person >=2 && person < 4){
//     console.log("person is toddler.");
// }
// else if(person >= 4 && person < 13){
//     console.log("person is Kid.");
// }
// else if(person >= 13 && person < 20){
//     console.log("person is teenager.");
// }
// else if(person >= 20 && person < 65){
//     console.log("person is Adult.");
// }
// else{
//     console.log("person is elder");
// }


// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!

// let favorite_fruits:string[] = ["apple","mango","banana"];
// if(favorite_fruits.includes("apple")){
//     console.log("I really like apples.");
// }if(favorite_fruits.includes("mango")){
//     console.log("I love mangoes.");
// }if(favorite_fruits.includes("banana")){
//     console.log("I like banana flavour.");
// }if(favorite_fruits.includes("kiwi")){
//     console.log("I like kiwies.");
// }if(favorite_fruits.includes("cherry")){
//     console.log("i want to eat cherries.");
// }


// 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user
// after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.


// let userNames:string[] = ["admin","mustafa","anika","eisha","bubbi","gia"];
// for(let i in userNames){
//     if(userNames[i] === "admin"){
//         console.log(`Hello Admin, would you like to see status report.`);
//     }else{
//         console.log(`Hello ${userNames[i]}, Thank you for logging in again`);
//     }
// }


