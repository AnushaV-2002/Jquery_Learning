//jquery
//jquery is a javascript library- to make javascript  much easier
//benfits
//it  makes DOM manipulation easier
//it makes animations easier
//easier way to work with ajax 
//there are jquery plugins
//chaining - we can apply effects or events or methods in single line while selecting the element
//code is easy to read
/*there are lot of plugins 
>image slider
>form enhancement plugin, etc...,*/
/*how to use jquery ?
//download jquery file from jquery.com 
//include jquery.js file and our script file in html file inside body tag*/


/*jquery statement
//jquery statement always starts with $
//to select an element*/
//with javascript how to select
var hello=document.getElementById("hello");
console.log(hello);
//with jquery how to select
var hello1=$("#hello");
console.log(hello1); 
/*with jquery statement what we are doing with DOM IT WILL RETURN BACK THE JQUERY OBJECT,
SO WE CAN APPLY METHODS AND PROPERTIES TO IT*/
/*WHEN WE GRAB A ELEMENT USING JQUERY IT WRAP THAT ELEMENT INTO A WRAPPER AND RETURN BACK AS A 
JQUERY OBJECT(I.E., IT IS LIKE A SWEET WRAPPER)*/
//WE CAN UNWRAP THE WRAPPER BY 
hello1[0];
console.log(hello1[0]);
/*WHEN WE UNWRAP IT WE CAN USE METHODS AND PROPERTIES THAT WE USE INSIDE THE 
JQUERY OBJECTS . WE NEED TO DO IT BY JAVASCRIPT METHODS ONLY*/
//using jquery
hello1.css("backgroundColor","red");
console.log(hello1);
//using javascript
hello1[0].css("color","blue");
console.log(hello1[0]);//it shows error because it is not a jquery object.


//jquery selectors
/*to grab the content of html using css selector in done by jquery selectors*/
//jquery selectors are
//element selector
$("h3").css("border","1px solid black");

//CLASS SELECTOR
$(".wrapper").css("border","1px solid blue");

//id selector
$("#points-of-sale").css("border","1px solid red");


//jquery filters
//first and last
$(".wrapper nav ul li:first").css("border","1px solid red");
$(".wrapper nav ul li:last").css("border","1px solid red");

//first-child and last-child
$("#contact ul:first-child").css("border","1px solid red"); 
/*here first-child means it should be the first child of the id, then only
 it apply for it*/
$("#contact ul:last-child").css("border","1px solid red");
/*here last-child means it should be the first child of the id, then only
 it apply for it*/

 //not
 $("section:not('#contact')").css("border","1px solid red");
 /*here not means it selects all section expect contact section element*/

 //ODD AND EVEN
 $(".wrapper nav ul li:even").css("border","1px solid red");
 $(".wrapper nav ul li:odd").css("border","1px solid yellow");
 /*in jquery the index starts from 0, so it counts from 0 and according to that
 even and odd is applied*/

//lt and gt
$(".wrapper nav ul li:lt(3)").css("border","1px solid red");

/*less than(lt) means what value we mentioning that less than values will be 
get applied*/
$(".wrapper nav ul li:gt(3)").css("border","1px solid red");
/*gt means it apply to after that elements what value is mentioned*/

//attribute filters
$("div[class]").css("border","1px solid red");
/*it apply to div element which have attribute class so in that way we are
filtering that element and applying to it*/
$("img[alt]").css("border","1px solid red");
$("img[alt=quote]").css("border","1px solid red");

//jquery DOM Traversing
/*DOM Stands for Document object model is the way of selecting or grabing 
the elements content and manipulating it*/
/*DOM IS THE GRAPHICAL WAY OF REPRESENTING THE HTML ELEMENTS RELATIONSHIP IN 
GRAPHICAL WAY IN TREE STRUCTURE*/
/*TO TRAVERSE USING JAVASCRIPT IT MIGHT BE COMPLEX, IT CAN BE MADE EASY USING 
JQUERY*/