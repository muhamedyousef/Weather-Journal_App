/* Global Variables */
let date = document.querySelector("#date");
let temp = document.querySelector("#temp");
let content = document.querySelector("#content");

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();