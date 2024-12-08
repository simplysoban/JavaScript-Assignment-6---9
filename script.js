console.log("-------------------------------")
console.log("Question 1")
console.log("-------------------------------")

var a = prompt("Enter a number");

console.log("Value of a is: ", a)
console.log("..................")


console.log("Value of ++a is: ", ++a)
console.log("Now the value of a is : ", a)
console.log("..................")


console.log("Value of a++ is: ", a++)
console.log("Now the value of a is : ", a)
console.log("..................")


console.log("Value of --a is: ", --a)
console.log("Now the value of a is : ", a)
console.log("..................")


console.log("Value of a-- is: ", a--)
console.log("Now the value of a is : ", a)

console.log("-------------------------------")
console.log("Question 2")
console.log("-------------------------------")

var a = 2;
var b = 1;

console.log("the value of a is: ", a, "and the value of b is: ", b)

var result = --a
console.log("The value of result is --a which is: ", result)

result = --a - --b
console.log("The value of result is --a - --b which is: ", result)

result = --a - --b + ++b
console.log("The value of result is --a - --b + ++b which is: ", result)

result = --a - --b + ++b + b--
console.log("The value of result is --a - --b + ++b + b-- which is: ", result)

console.log("-------------------------------")
console.log("Question 3")
console.log("-------------------------------")

var _name = prompt("Enter your name: ");
console.log("Hello" + _name + "!");

console.log("-------------------------------")
console.log("Question 4")
console.log("-------------------------------")

var table = Number(prompt("Enter a Number for table: "));

if (table > 0) {    
    console.log(table, " x 1 = ", table * 1);
    console.log(table, " x 2 = ", table * 2);
    console.log(table, " x 3 = ", table * 3);
    console.log(table, " x 4 = ", table * 4);
    console.log(table, " x 5 = ", table * 5);
    console.log(table, " x 6 = ", table * 6);
    console.log(table, " x 7 = ", table * 7);
    console.log(table, " x 8 = ", table * 8);
    console.log(table, " x 9 = ", table * 9);
    console.log(table, " x 10 = ", table * 10);
}else{
    table = 5;
    console.log(table, " x 1 = ", table * 1);
    console.log(table, " x 2 = ", table * 2);
    console.log(table, " x 3 = ", table * 3);
    console.log(table, " x 4 = ", table * 4);
    console.log(table, " x 5 = ", table * 5);
    console.log(table, " x 6 = ", table * 6);
    console.log(table, " x 7 = ", table * 7);
    console.log(table, " x 8 = ", table * 8);
    console.log(table, " x 9 = ", table * 9);
    console.log(table, " x 10 = ", table * 10);
}

console.log("-------------------------------")
console.log("Question 5")
console.log("-------------------------------")

var totalMarks = 100;

var subject1 = prompt("Enter 1st subject name: ");
var subject2 = prompt("Enter 2nd subject name: ");
var subject3 = prompt("Enter 3rd subject name: ");

var obtMarks1 = Number(prompt("Enter obtained marks of ", subject1, ": "));
var obtMarks2 = Number(prompt("Enter obtained marks of ", subject2, ": "));
var obtMarks3 = Number(prompt("Enter obtained marks of ", subject3, ": "));


console.log("Subject | Obtained Marks | Total Marks | Percentage");
console.log(subject1, "      ", obtMarks1, "      ", totalMarks, "      ", (obtMarks1 / totalMarks) * 100,"%");
console.log(subject2, "      ", obtMarks2, "      ", totalMarks, "      ", (obtMarks2 / totalMarks) * 100,"%");
console.log(subject3, "      ", obtMarks3, "      ", totalMarks, "      ", (obtMarks3 / totalMarks) * 100,"%");
console.log("Total:", "      ", obtMarks1 + obtMarks2 + obtMarks3, "      ", totalMarks*100, "      ", ((obtMarks1 + obtMarks2 + obtMarks3) / (totalMarks * 3)) * 100,"%")