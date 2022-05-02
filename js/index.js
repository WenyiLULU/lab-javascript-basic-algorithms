console.log("I'm ready!");
// Iteration 1: Names and Input
//1.1 Create a variable `hacker1` with the driver's name.
let hacker1 = "Wenyi";

//1.2 Print `"The driver's name is XXXX"`.
console.log(`"The driver's name is ${hacker1}"`);

//1.3 Create a variable `hacker2` with the navigator's name.
let hacker2 = "Ironhack"

//1.4 Print `"The navigator's name is YYYY"`.
console.log(`"The navigator's name is ${hacker2}"`);

// Iteration 2: Conditionalss
//- The driver has the longest name, it has XX characters. or
//- It seems that the navigator has the longest name, it has XX characters. or
//- Wow, you both have equally long names, XX characters!.
if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
} else if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}

// Iteration 3: Loops
//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let characters = "";
for (let i = 0; i < hacker1.length; i+=1) {
    characters += hacker1[i].toUpperCase();
    characters += " ";
};
console.log(characters);

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let characters2 = "";
for (let i = hacker2.length - 1; i >= 0; i-=1) {
    characters2 += hacker2[i];
};
console.log(characters2);

//3.3 Depending on the lexicographic order of the strings, print:
//- The driver's name goes first.
//- Yo, the navigator goes first definitely.
//- What?! You both have the same name?
if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
};

/* Bonus 1:
Go to lorem ipsum generator and:

Generate 3 paragraphs. Store the text in a variable type of string.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears.*/

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mollis, risus sed feugiat porta, velit metus commodo eros, tempor viverra orci mauris id felis. Phasellus fringilla mollis pellentesque. Aliquam volutpat lobortis eros id suscipit. Morbi luctus et ante id pretium. Etiam condimentum eros vel dui placerat, quis vehicula diam efficitur. Sed tincidunt ex ex, id commodo quam semper ut. Curabitur suscipit ligula mauris. Ut et urna luctus, placerat erat at, aliquet tortor. Ut metus turpis, lacinia vel neque vitae, mattis vehicula orci. Maecenas vitae felis a ipsum molestie cursus. Phasellus elementum mauris elit, quis suscipit lacus congue in. Ut in leo non risus pellentesque placerat eget non eros. Vestibulum sodales et ligula ut eleifend. Donec leo tortor, laoreet vitae tristique ut, pulvinar vitae eros. Morbi sed elit ac orci porta lacinia.
Pellentesque justo dolor, mattis sit amet est lobortis, pretium consequat magna. Aliquam bibendum consectetur nisl, in gravida mauris lobortis at. Quisque suscipit odio vitae leo rutrum efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas vel nisi sit amet arcu vestibulum laoreet. Donec arcu enim, luctus et ultrices at, porttitor sed velit. Duis finibus, mi ac lobortis congue, urna enim varius eros, in finibus lacus nunc vitae metus.
Etiam nec leo eget velit molestie sodales. Donec sed massa vestibulum, faucibus ex bibendum, pulvinar felis. Aliquam erat volutpat. Vestibulum gravida tortor non sapien vehicula, quis condimentum libero ornare. Maecenas eget varius dui. Maecenas ultrices accumsan odio sit amet efficitur. Pellentesque et tincidunt tortor, id tincidunt felis. Integer facilisis sem nisl, vel lobortis quam aliquet eget. Mauris laoreet quam vitae nulla euismod sagittis. Curabitur dapibus ex nibh, nec ornare nisl faucibus id. In vitae sodales enim, non bibendum quam. `

let words = text.replace(/[\n]/, ' ').split(' ');
console.log(words.length);
let count = 0;
for (let i = 0; i < words.length; i+=1) {
    if(words[i] === 'et' || words[i] === 'et,' || words[i] === 'et.'){
        count +=1;
    }
};
console.log (count);

/*Bonus 2:
Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" and "No 'x' in Nixon". */
let phraseToCheck = "A man, a plan, a canal, Panama!"
let letters = phraseToCheck.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
let reverseLetters = "";
for (let i = letters.length - 1; i >= 0; i-=1) {
    reverseLetters += letters[i];
};
if (reverseLetters === letters){
    console.log(`"${phraseToCheck}" is a Palindrome.`);
} else {
    console.log(`"${phraseToCheck}" is not a Palindrome.`);
};
