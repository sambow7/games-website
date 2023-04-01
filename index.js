function greetUser() {
  let name = prompt("Hi, what is your name?");
  if (name == "Kassie") {
    name == prompt("I thought you were going to say potato? potato, potahto");
    if (name != "Potato") {
    name = prompt("No but seriously what is your name?")
    }
  }
  console.log("hi, " + name);
  document.write("Welcome, I hope you like games " + name)
  return name;
}
greetUser();

let usersNum = prompt("Pick a number of potatos between 1 & 7")
for(let i = 0; i < usersNum; i++){
  document.write("<img src='images/luis-villasmil-ITFwHdPEED0-unsplash.jpg' alt= 'picture of controller' />");
}

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

