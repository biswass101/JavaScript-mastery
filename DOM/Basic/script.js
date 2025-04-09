const list = document.getElementById('list');
console.log(list.innerHTML  );

//finding html elements-->
const heading = document.getElementById('heading');
const paragraph= document.getElementsByTagName('p');
const article = document.getElementsByClassName('art');

console.log(heading);
console.log(paragraph);
console.log(article);


//Changing Html Elements-->
const containerDiv = document.getElementById('container');
const inputField = document.getElementById('ipt');
const para = document.getElementById('para');

containerDiv.innerHTML = '<h1>Heading Under the Container</h1>'

inputField.setAttribute('type', 'password');
inputField.setAttribute('value', "2025Niloy");

para.innerText = 'This will be the red text';
para.style.color = 'red';


//Adding and Deleting Elements
const madeOfDiv = document.createElement('div');
madeOfDiv.innerText = "text in made of div by dom";
document.body.appendChild(madeOfDiv);
document.body.removeChild(madeOfDiv);

//Selecting Element by querySelector-->
const paras = document.querySelectorAll("p.intro");
// console.log(paras)
paras[1].innerHTML = "para 2 text changed";

