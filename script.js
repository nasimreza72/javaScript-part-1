//  let i;
// for (i=10;i<=20;i+=2){
//     if (i==16){
//         break;
//     }
    
// }
// console.log(i);

//  console.log(i);

// i=10, 10<=20 true, check if 10==16 false, 10=10+2
// i=12, 12<=20 true, check if 12==16 false,  12=12+2
// i=14, 14<=20 true, check if 14==16 false,  14=14+2
//i=16, 16<=20 true, check if 16==16 true, break;
//console.log(i);

// let numbers =["Antonia",24,33,41,50];
// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[3]);
// console.log(numbers[4]);

// for (let i=0; i<=numbers.length-1; i++) {
//     console.log(numbers[i]); 
// }


//These exercises are designed for practising "for" loops. Print all your results to the console.

//1. Addition. Write a program to add up the numbers 1 to 20.
//1,+2,+3,+4,+5,+6,+7,+8,+9,+10,+11,+12,+13,+14,+15,+16,+17,+18,+19,+20 = 210


// let i;
// let sum=0;
// for (i=1;i<=20;i++) {
//     sum=sum+i;
//     console.log(sum,i);
    
// }
// console.log(sum);

//i=1, sum=0; sum=0+1=1,i++
//i=2, sum=1, sum=1+2, i++
//i=3, sum=3, sum=3+3, i++
//i=4, sum=6, sum=6+4, i++

//2. There are i bottles of beer on the wall. Write a program that will output, "There is one bottle of beer on the wall." "There are two bottles of beer on the wall" up until there are five bottles.
// for (let i=1;i<=5;i++){
//     if(i>1){
//         console.log(`There are ${i} bottles of beers on the wall `);
//     } else {
//         console.log(`There is ${i} bottle of beer on the wall`);
//     }

// }


// 1. The odd/even reporter. Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
//Solution 

// for (let i=0; i<=20; i++){
//     if(i%2==0){
//         console.log(i+ " is even");
//     } else {
//         console.log(i + " is odd");
//     }
// }


// 2. Fizz Buzz. Write a program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

// let i;
// for(i=1; i<=100; i++){
//     if(i%15==0){ //if((i%3==0) && (i%5==0))
//         console.log(i + " FizzBuzz");
//     } else if (i%3==0){
//         console.log(i + " Fizz");
//     } else if (i%5==0){
//         console.log(i + " Buzz");
//     } else {
//         console.log(i);
//     }
// }


// // 3. Sum of Multiples. Write a program to add the multiples of 3 and 5 under 1000
// let j=0;
// for (i=1;i<=1000;i++){
//     if((i%3==0) && (i%5==0)){
//         j=j+i;
//         // console.log(i, j);
//     }
// }
// console.log(j);

// // 4.  Write programs that produce the following outputs:
// // a) 100 200 300 400 500 600 700 800 900 1000
// console.log( "solution 1");
// let number=100;
// for(i=1;i<=1000/number; i++){
//     console.log(number*i);
// }

// console.log( "solution 2")
// // number=100;
// for(i=100;i<=1000;i+=100){
//     console.log(i);
// }
// // b) 0 2 4 6 8 10
// console.log( "soluion b");
// for(i=0;i<=10;i+=2){
//     console.log(i);
//     // i+=2;
// }

// // c) 3 6 9 12 15
// console.log( "solution c");
// for(i=3;i<=15;i+=3){
//     console.log(i);
// }

// // d) 9 8 7 6 5 4 3 2 1 0
// console.log( "solution d");
// for(i=9;i>=0;i--){
//     console.log(i);
// }
// // e) 1 1 1 2 2 2 3 3 3 4 4 4

// console.log( "solution e");
// for(i=1;i<=12;i++){
//     // console.log(i);
//     // console.log(i);
//     // console.log(i);
//     if(i<=3){
//         let m=(i-i)+1;
//         console.log(m);
//     } else if(i<=6){
//         let n=(i-i)+2;
//         console.log(n);
//     } else if(i<=9){
//         let o=(i-i)+3;
//         console.log(o);
//     } else {
//         let p=(i-i)+4;
//         console.log(p);
//     }
// }

// console.log( " solution e.2");
// for(i=1;i<=4;i++){
//     for(j=1;j<=3;j++){
//         console.log(i);
//     }
// }

// console.log( "solution e.3");
// let repeat;
// for (repeat  = 1; repeat  <=4; repeat++) {
//     console.log((`${repeat}`).repeat(3))
// }

// console.log( "solution e.4");
// let newVariable=1;
// for(i=1;i<=4;){
//     console.log(i);
//     if((newVariable!==0)&&(newVariable % 3===0)){
//         i++;
//         newVariable=0;
//     }
//     newVariable++;
// }

// // f) 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

// console.log( "solution f");
// let r;
// let s;
// for (r=1;r<=3;r++){
//     for (s=0;s<=4;s++){
//         console.log(s);
//     }
// }

//Solution 4.B
// let matrix=[[],[],[],[],[],[]];
// for (i=1;i<=10;i++){
//     matrix[0].push((i + "00"));
//     matrix[3].unshift(i-1);
//     if(i%2==0){
//         matrix[1].push(i);
//     }
//     if(i%3===0 || i===10){
//         if(i%3==0){
//             matrix[2].push(i);
//         }
//         if (i==9){
//             matrix[2].push(12);
//         } else if (i==10){
//             matrix[2].push(15);
//         }
//     }
//     if(i<=4){
//         matrix[4].push((`${i}`).repeat(3));
//     } 
//     if(i<=5){
//         matrix[5].splice(i,0,i-1);
//     }
//     if(i===10){
//         let result="";
//         for (j=0;j<=5;j++){
//             if(j==5){
//                 result=String.fromCharCode(97+j) + ') ' + (matrix[j].join(" ") + " ").repeat(3);
//             } else {
//                 result=String.fromCharCode(97+j) + ') ' + (matrix[j].join(" "));
//             }
//             console.log(result);
//         }
//     }
// }

// 5.isPalindrome. Write a program to check whether a word is a palindrome or not. Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat.

// console.log( "solution 5.a");
// let palindrome="maria";
// for(i=0;i<palindrome.length/2;i++){
//     let length=palindrome.length;
//     if(palindrome[i]===palindrome[length-1-i]){
//         console.log("It is a palindrome");
//     } else {
//         console.log("It is not palindrome");
//         break;
//     }
   
// }


// console.log( "solution 5.b");
// let isPalindrome="mad";
// let palindromeReverse= isPalindrome.split("").reverse().join("");
// console.log(palindromeReverse);
// // console.log(typeof palindromeReverse);
// if (palindromeReverse===isPalindrome){
//     console.log("The word is palindrome? True");
// } else {
//     console.log("The word is palindrome? False");
// }


// let isPalindrome = "mad";
// console.log(isPalindrome.split(""))
// let PalindromeReverse = isPalindrome.split('').reverse().join('');

// console.log(PalindromeReverse);
// console.log(typeof PalindromeReverse)

// if (PalindromeReverse === isPalindrome){
//     console.log(`is the word ${isPalindrome} a Palindrome? true`);
// }
// else {
//     console.log(`is the word ${isPalindrome} a Palindrome? false`)
// }


// solution 5.c 
// let isPalindrome = "mad";
// console.log(isPalindrome.split(""))
// let PalindromeReverse = isPalindrome.split('').reverse().join('');

// console.log(PalindromeReverse);
// console.log(typeof PalindromeReverse)

// if (PalindromeReverse === isPalindrome){
//     console.log(`is the word ${isPalindrome} a Palindrome? true`);
// }
// else {
//     console.log(`is the word ${isPalindrome} a Palindrome? false`)
// }

//solution 5.d 
// let str = 'Hannah';
// str = str.toLowerCase();

// for(let i = 0 ; i<str.length /2; i++) {
//  // console.log(str[i]);
//  // console.log(str[str.length - 1 -i]);
//  if(str[i] === str[str.length - 1 -i]){
//   console.log(`correct, ${str} is a palindrome string`);
//  }else{
//   console.log(`wrong, ${str} is not a palindrome string`);
//  }
//  break;
// }

//solution 5.e
// let text="tarrattarrat";
// let  x = Math.floor(text.length/2);
// let isPalindrome=true;
// for (let i = 0; i < x; i++) {
//     if(text[i]!=text[text.length-i-1])
//         isPalindrome=false;
// }
// isPalindrome ? console.log(`${text} is Palindrome`) : console.log(`${text} is not Palindrome`);


//solution 5.f
// const word = "anna";
// let lengthOfName = word.length;
// let halfLength = lengthOfName/2;
// let halfLengthRounded = Math.floor(halfLength);
// let wordArray = word.split("");

// let wordPartOne = wordArray.slice(0, halfLengthRounded+1).join("");
// let secondHalf = wordArray.reverse().slice(0, halfLengthRounded+1).join("");

 
// if(wordPartOne === secondHalf){
//     console.log("its a Palindrome")
// }

// else{
//     console.log("its not a Palindrome");
// }




//Nested for loops 

// for ( let i=0; i<=10; i++){
//     for (let j=0; j<=12; j++){
//         console.log(i,j);
//     }
// }

//Write a JavaScript program to construct the following pattern, using a nested for loop.
// *  
// * *  
// * * *  
// * * * *  
// * * * * *  

// let i, k, asteriks;

// for (i=1;i<=6; i++){
//     asteriks="";
//     for (k=1;k<i;k++){
//         asteriks=asteriks + " *";
//     }
//     console.log(asteriks);
//     // asteriks="";
// } 

//solution b
// let Star= "*";
// let i; 
// for (i=1; i<=5; i++){
//     console.log(Star.repeat(i));
// }


//solution c
// for(let j = 1; j <=1 ; j++){
//     console.log( j);
//     for(let h = 2; h <=2; h++){
//      console.log( j, h);
//      for(let k = 3; k <=3; k++){
//      console.log( j, h, k);
//      for(let d = 4; d <=4; d++){
//      console.log( j, h, k, d);
//       for(let f = 5; f <=5; f++){
//        console.log( j, h, k, d, f);
//       }
//      }
//     }
//    }
//   }

  //solution d 
//   for(let i=0; i<=1; i++){

//     console.log("*")

//     for(let j=1; j<=1; j++ ){
//         console.log("**")

//         for(let k=1; k<=1; k++){
//             console.log("***")

//             for(let l=1; l<=1; l++ ){
//                 console.log("****")

//                 for(let m=1; m<=1; m++ ){
//                     console.log("*****")
                    
//                 }
                


//             }
//         }
//     }break
// }
//1,2,3,4,5,6,7,8,9,10
// let i=10;
// while(i>=-10) {
//     console.log(i);
//     i--;
// }

// console.log(i);

let i=20;
do {
    let p=2;
    console.log(i); 
    i++; 

}
while(i<1);

console.log(i);


//Repeat Exercises 
// 1. Run Along
// Create a while loop that runs as long as the variable i is less than 15. Print i.

// 2. Add it up
// Create a program which sums up numbers from 1-20 using a while loop.

// 3. Do this while i...
// Use a do, while loop to print The number is [i] while i is less than 20.

//4. Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers.

//Extra Bonus
//5. Write a JavaScript program which compute, the average marks of the following students. Then, this average is used to determine the corresponding grade.

// Student Name	  Marks
// David	         80
// Vinoth	         77
// Divya	         88
// Ishitha	         95
// Thomas	         68
// The grades are computed as follows:

// Range  Grade
// <60	    F
// <70      D
// <80	    C
// <90  	B
// <100	    A

//Output 
//Average grade 81,6
//Final group grade B

//6. Write a JavaScript program to find the armstrong numbers of 3 digits.
// Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.