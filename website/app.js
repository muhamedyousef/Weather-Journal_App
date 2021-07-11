/* Global Variables */
const apiKey = "a64dfc178ee6ed62194bf0a299b600b7";
//the form variables
let zipInput = document.querySelector("#zip");
let feelingsInput = document.querySelector("#feelings");
let genButton = document.querySelector("#generate");
//the generated content variables
let date = document.querySelector("#date");
let temp = document.querySelector("#temp");
let content = document.querySelector("#content");
let invalidZip = document.querySelector("#invalidZIP");
//data object to be sent to the API

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = `${d.getMonth()}.${d.getDate()}.${d.getFullYear()}`;

//helper function to update UI
let updateUI = function (dataObj) {
  invalidZip.style.display = "none";
  date.style.display = "inline";
  temp.style.display = "inline";
  content.style.display = "inline";
  date.innerHTML = dataObj.date;
  temp.innerHTML = `${dataObj.temprature} C`;
  content.innerHTML = `You feel <b>${dataObj.feelings}</b> and the weather is <b id="wd"> ${dataObj.description}</b> in the city of <b id="wd">${dataObj.cityName}</b>`;
};

//helper function to check if the ZIP code is valid
let ZIPValidCheck = function () {
  invalidZip.style.display = "inline";
  invalidZip.innerHTML =
    "the ZIP you submitted does not seem as a valid zip please try another zip";
  date.style.display = "none";
  temp.style.display = "none";
  content.style.display = "none";
};
let emptyFieldAlert = function () {};

// a function to empty fields after submitting
let emptyField = function () {
  zipInput.value = "";
  feelingsInput.value = "";
};

//access to button and add eventlistner
/*on clicking the button it will construct a data object which in turn will have a method to
 get the current weather and the whole object will be channeled to the server to save it as an entry */
genButton.addEventListener("click", (e) => {
  e.preventDefault;

  //Async function to retrieve data from the endpoint of the project [defined but not called]
  const retrieveUpdateData = async function () {
    let request = await fetch("http://localhost:3000/all");
    try {
      let retrievedData = await request.json();
      //updating the UI is a separate helper function written in the external scope that takes the responce object and update the UI using it
      updateUI(retrievedData);
    } catch {
      (error) => console.log("error", error);
    }
  };

  /*async function to fetch the weather statues and collect the user input and package them into one object that will be sent to the app endpoint
the retrieve data function will  be called in the try section to ensure it won't fire before the function that will send data*/
  async function postData() {
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${zipInput.value}&appid=${apiKey}&units=metric`
    )
      .then((res) => {
        res.ok ? console.log("success") : ZIPValidCheck();
        return res.json();
      })
      .then((bodyData) => {
        let data = {
          zip: zipInput.value,
          cityName: bodyData.name,
          date: newDate,
          feelings: feelingsInput.value,
          temprature: bodyData.main.temp,
          description: bodyData.weather[0].description,
        };
        // console.log(data)

        return data;
      })
      .then((data) => {
        fetch("http://localhost:3000/add", {
          method: "POST",
          credentials: "same-origin",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        });
      });
    try {
      retrieveUpdateData();
    } catch {
      (error) => ("error", error);
    }
  }

  postData();

  // emptyField();
});
