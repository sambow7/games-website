

function greetUser() {
  let name = prompt("Hi, what is your name?");
  if (name == "Kassie") {
    name == prompt("I thought you were going to say potato? potato, potahto");
    if (name != "Potato") {
    name = prompt("No but seriously what is your name?")
    }
  }
  console.log("Hi, " + name);
  document.write("Welcome, I hope you like games " + name)
  return name;
}
greetUser();

let x = prompt("whats your favorite number?")
while (x <= 0) {
  console.log("#" + x);
  
}

let usersNum = prompt("Pick a number of potatos?")
for(let i = 1; i <= usersNum; i++){
  document.write("<img src='http://clipart-library.com/data_images/211326.jpg' alt= 'picture of controller' />" + i);

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

