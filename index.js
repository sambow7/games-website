// alert("A name must be given to enter");
// let usersName = prompt("A name must be given to enter");

// console.log("Hi " +usersName + ", hope you like games?");
// document.write("Hi " +usersName + ", hope you like games?")

// if (usersName == "Kassie") {
//   alert("Ello guvna! Thanks for checking on me teach.");
// } else if (usersName == "Sam") {
//   alert("Ello Master");
// } else if (usersName == "potato") {
//   alert("MMMMMM po-ta-to")
// } else {
//   alert("Ello!")
// }

function greetUser(){
  let name = prompt("What is your name?");
  if(name ==""){
    name = prompt("No but seriously what is your name?");
  if(name =="Kassie"){
    name = prompt("I thought you were going to say potato? One more time please, thanks.")     
  } 
  }  
  console.log("hi, " + name);
  return name;
}
greetUser();