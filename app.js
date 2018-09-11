/*
1. interpolate is the ability to add strings with variables (const var = Forrest{ console.log(`run ${var} run`)})
 concatenate is combining 2 separate strings to make one E.g. if you have surame = "Smith" and firstName = "John"
 you can concatenate that into console.log("John " + "Smith")
 2. DRY means don't repeat yourself, pay attention because we don't want out code to become bloated with repeated lines
 3. assigning value to a variable let var = 6, we've given it a number 6 value. declaring we give the value a name on the left side of the = sign
 4 We should always use const until interpreter gives you an error, unless you know
 the variable will be redefined (cannot be redefinied but the contents or values of it can change)(can't 
 change what the data type is but can manipulate the data) and when you get the error, change it to let, which is
 a variable that can be redefined, most commonly used in loops.
 5.Unix question: What is a "parent" directory? The directory that houses another directory
6. Unix, again: If you're not sure about how to use a Unix command, how can you get more info without being connected to the internet?
 7. hitting tab so that what you're typing auto completes
*/

/*
Remember: Expressions in JavaScript are anything that can be said to have a value.
Remember: Variable assignment is a right-to-left operation: the expression on the right side of the equal sign gets evaluated AND THEN put into the variable declared on the left side.
Using the provided variable definitions, replace the blanks with mathematical or boolean operators that make the expression evaluate to true.
Test your answers by using console.log in front of each expression in your answer file.
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';
a < b;
c > d;
'Name' === 'Name';
a < b < c;
a === a < d;
e == 'Kevin';
48 == '48';
*/

/* Part 3 WHILE LOOPS
1. Infinite loop?
Either no because there is nothing to prove (true) false, or yes because true can never be proven false 
so it will always be running
2. Infinite loop II
No because it won't run since you can't redefine const. 
3. Reading code
variable letters is defined as the string value "A"
let letters = "A";
we're starting with iterator at 0
let i = 0;
while the iterator is less than 20
while (i < 20) {
add value of A to variable letters
    letters += "A";
iterator plus 1
	i++;
}
print to the console what letters will be
console.log(letters);
It prints AAAAAAAAAAA which I did not expect because I just assume everything is going to be a number

//Part 4 LOOPS
1. while loops perform an operation until a condition is met or when we don't knkow how many times we need something
to run in order to get the condition we're looking for.
  For loops are more concise than while loops, and runs a defined number of times that we know.
  They can be interchangeable because they will loop until something we want happens
2 for(i=0; i<=999; i++){
    console.log(i);
}
3// for (let i = 0; i < 100; i++) {
//	console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
//  }
3b. The first part of the control statement is: i=0 - we're starting at 0
The second part of the control statement is: i<= 999 - iterate until i is less than or equal to 999
The third part of the control statement is: i++ - add 1 to every iteration 

4. Using a postfix operator i-- instead of i++, write a for loop that iterates in reverse: 
console.log() a countdown from 999 to 0:
for(i=999; i>=1; i--){
    console.log(i);
}

5. Write a for loop that uses interpolation to print a message to the console that includes the current value of i.

The loop should run from 1 to 10.

Expected output in the console:

The value of i is: 1 of 10 etc

for(i=0; i<=10; i++){
    console.log(`the value of i is ${i} of 10`);
}

