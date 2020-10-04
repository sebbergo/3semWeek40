import "./style.css"
import "bootstrap/dist/css/bootstrap.css"
import "./jokeFacade"
import jokeFacade from "./jokeFacade"
import userFacade from "./userFacade";

/* 
  Add your JavaScript for all exercises Below or in separate js-files, which you must the import above
*/

//Jokes list
function makeListItems() {
  /* JS For Exercise-1 below */
  const jokes = jokeFacade.getJokes();
  //let jokeList = jokes.map(joke => "<li>" + joke + "</li>")
  let jokeList = jokes.map(joke => `<li>${joke}</li>`)
  const listItemsAsStr = jokeList.join("")
  document.getElementById("jokes").innerHTML = listItemsAsStr
}

makeListItems()

//Find joke with ID
function getJokeById() {
  let jokeId = document.getElementById("jokeId").value
  let joke = jokeFacade.getJokeById(jokeId)
  document.getElementById("pTag").innerHTML = joke
}

document.getElementById("jokeByIdButton").addEventListener('click', getJokeById)

//Make new joke
function addJoke() {
  let joke = document.getElementById("joke").value
  jokeFacade.addJoke(joke)
  makeListItems()
}

document.getElementById("addJokeButton").addEventListener('click', addJoke)

/* JS For Exercise-2 below */

//Fetch quote
function fetchQuote() {
  let url = "https://studypoints.info/jokes/api/jokes/period/hour";
  fetch(url)
    .then(res => res.json())
    .then(data => {
      let pTag = document.getElementById("pTag2")
      pTag.innerHTML = data.joke
    })
}
setInterval(fetchQuote, 3600000)
document.getElementById("quoteFetchButton").addEventListener('click', fetchQuote)


/* JS For Exercise-3 below */

//Show all users table
function getAllUsers() {
  userFacade.getUsers()
    .then(data => {
      let table = document.getElementById("allUserRows")
      let result = ''
      data.forEach((x) => {
        result += getTableRow(x)
      })
      table.innerHTML = result
    })
}

getAllUsers()

function getTableRow(member) {
  return `<tr>
  <td>${member.id}</td>
  <td>${member.age}</td>
  <td>${member.name}</td>
  <td></td>
  <td>${member.gender}</td>
  <td>${member.email}</td>
  </tr>`;
}

//Show a single user from table from their ID
function getUserById() {
  let id = document.getElementById("userIdFind").value
  userFacade.getUser(id)
    .then(data => {
      let pTag = document.getElementById("pTagFindUser")
      let result = ''
      data.forEach((x) => {
        if (x.id == id) {
          result = "ID: " + x.id + ", age: " + x.age + ", name: " + x.name + ", gender: " + x.gender + ", email:" + x.email
          pTag.innerHTML = result
        }
      })

    })
}

document.getElementById("userIdBtn").addEventListener('click', getUserById)

//Add en new user til table
function addUserForm() {
  let age = document.getElementById("userAge").value
  let name = document.getElementById("userName").value
  let gender = document.getElementById("userGender").value
  let email = document.getElementById("userEmail").value

  const user = {
    age: age,
    name: name,
    gender: gender,
    email: email
  }

  userFacade.addUser(user)
    .then(user => JSON.stringify(user))
    .catch(err => {
      if (err.status) {
        err.fullError.then(e => document.getElementById("errorAdd").innerText = e.msg)
      }
      else { console.log("Network error"); }
    });
}

document.getElementById("userInfoBtn").addEventListener('click', (event) => {
  addUserForm()
  getAllUsers()
})

//Edit user in table
function editUserForm() {
  //get id
  let id = document.getElementById("userIdEdit").value

  //get values
  let age = document.getElementById("editAge").value
  let name = document.getElementById("editName").value
  let gender = document.getElementById("editGender").value
  let email = document.getElementById("editEmail").value

  //make user
  const user = {
    age: age,
    name: name,
    gender: gender,
    email: email
  }

  //get user id
  user.id = id

  //edit the user
  userFacade.editUser(user)
    .then(user => JSON.stringify(user))
    .catch(err => {
      if (err.status) {
        err.fullError.then(e => document.getElementById("errorEdit").innerText = e.msg)
      }
      else { console.log("Network error"); }
    });
}

document.getElementById("editUserBtn").addEventListener('click', (event) => {
  editUserForm()
  getAllUsers()
})

//Delete user from the table
function deleteUserForm() {
  let id = document.getElementById("userIdDelete").value

  userFacade.deleteUser(id)
    .then(user => JSON.stringify(user))
    .catch(err => {
      if (err.status) {
        err.fullError.then(e => document.getElementById("errorDelete").innerText = e.msg)
      }
      else { console.log("Network error"); }
    });
}

document.getElementById("deleteUserBtn").addEventListener('click', (event) => {
  deleteUserForm()
  getAllUsers()
})

/* 
Do NOT focus on the code below, UNLESS you want to use this code for something different than
the Period2-week2-day3 Exercises
*/

function hideAllShowOne(idToShow) {
  document.getElementById("about_html").style = "display:none"
  document.getElementById("ex1_html").style = "display:none"
  document.getElementById("ex2_html").style = "display:none"
  document.getElementById("ex3_html").style = "display:none"
  document.getElementById(idToShow).style = "display:block"
}

function menuItemClicked(evt) {
  const id = evt.target.id;
  switch (id) {
    case "ex1": hideAllShowOne("ex1_html"); break
    case "ex2": hideAllShowOne("ex2_html"); break
    case "ex3": hideAllShowOne("ex3_html"); break
    default: hideAllShowOne("about_html"); break
  }
  evt.preventDefault();
}
document.getElementById("menu").onclick = menuItemClicked;
hideAllShowOne("about_html");



