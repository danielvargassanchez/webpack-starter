import "../styles/index.scss";
import { Persona } from "../modules/classes";

var listPersons = [];
var mainTable = document.getElementById("main-table");
var inputName = document.getElementById("name");
var inputLastname = document.getElementById("lastname");
var inputAge = document.getElementById("age");
var filterTable = document.getElementById("filter-table");
var inputFilter = document.getElementById("filterByName");
var listFilter = [];

export function add(option) {
  let newPerson = new Persona(
    inputName.value.trim(),
    inputLastname.value.trim(),
    inputAge.value.trim()
  );

  if (validate(newPerson)) {
    switch (option) {
      case 0:
        addStart(newPerson);
        cleanInput();
        break;
      case 1:
        addEnd(newPerson);
        cleanInput();
        break;
      default:
        console.log("No option");
    }
  } else {
    alert("insert all data");
  }
}

function validate(person) {
  return person.name.first != "" && person.name.last != "" && person.age != ""
    ? true
    : false;
}
//add new object
function addStart(person) {
  listPersons.unshift(person);
  refresh();
}
function addEnd(person) {
  listPersons.push(person);
  refresh();
}

export function deleteElement(option) {
  switch (option) {
    case 0:
      deleteStart();
      break;
    case 1:
      deleteEnd();
      break;
    default:
      console.log("invalid option");
  }
}

function deleteStart() {
  listPersons.shift();
  refresh();
}
function deleteEnd() {
  listPersons.pop();
  refresh();
}

export function refresh() {
  deleteTable();
  listPersons.forEach((person, index) => {
    var row = `<tr> 
                    <td> ${person.name.first} </td>
                    <td> ${person.name.last} </td>
                    <td> ${person.age} </td>
                    <td>  <button class="btn btn-info" onClick="app.myBio(${index})"> Bio </button> </td>
                    <td>  <button class="btn btn-info" onClick="app.myFarwell(${index})"> Farwell </button> </td>
                </tr>`;
    let tr = document.createElement("TR");
    tr.innerHTML = row;
    mainTable.appendChild(tr);
  });
}

function deleteTable() {
  let rowCount = mainTable.rows.length;
  for (var x = rowCount - 1; x > 0; x--) {
    mainTable.deleteRow(x);
  }
}
export function filterByName() {
  listFilter = [];
  let filterName = inputFilter.value.trim();

  if (filterName != "") {
    listPersons.forEach((person) => {
      person.name.first == filterName
        ? listFilter.push(person)
        : console.log("");
    });

    refreshFilterTable();
  } else {
    alert("Insert a name");
  }
}

function refreshFilterTable() {
  deleteFilterTable();
  listFilter.forEach((person, index) => {
    var row = `<tr> 
                          <td> ${person.name.first} </td>
                          <td> ${person.name.last} </td>
                          <td> ${person.age} </td>
                  </tr>`;

    let tr = document.createElement("TR");
    tr.innerHTML = row;
    filterTable.appendChild(tr);
  });
}

function deleteFilterTable() {
  let rowCount = filterTable.rows.length;
  for (var x = rowCount - 1; x > 0; x--) {
    filterTable.deleteRow(x);
  }
}

function cleanInput() {
  inputName.value = "";
  inputLastname.value = "";
  inputAge.value = "";
}
export function myBio(index) {
  listPersons[index].bio();
}

export function myFarwell(index) {
  listPersons[index].farwell();
}
