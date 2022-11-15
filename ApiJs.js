let baseURL1 = "https://api.genderize.io/?name=";
let baseURL2 = "https://api.agify.io?name=";
let baseURL3 = "https://api.nationalize.io/?name=";
let baseURL4 = "https://countryflagsapi.com/png/";
let clear = document.querySelector(".clear");
let ageResult = document.querySelector(".ageResult");
let genderResult = document.querySelector(".genderResult");
let countryResult1 = document.querySelector(".countriesResult1");
let countryResult2 = document.querySelector(".countriesResult2");
let countryResult3 = document.querySelector(".countriesResult3");
let countryResult4 = document.querySelector(".countriesResult4");
let countryResult5 = document.querySelector(".countriesResult5");
let displayResult = document.querySelector(".click");
displayResult.addEventListener("click", (event) => {
  event.preventDefault();
  let searchName = document.querySelector("#name").value;
  let getUserGender = new XMLHttpRequest();
  getUserGender.open("GET", baseURL1 + searchName);
  getUserGender.onload = () => {
    let userGender = JSON.parse(getUserGender.responseText);
    genderResult.append(userGender.gender);
  };
  let getUserAge = new XMLHttpRequest();
  getUserAge.open("GET", baseURL2 + searchName);
  getUserAge.onload = () => {
    let userAge = JSON.parse(getUserAge.responseText);

    ageResult.append(userAge.age);
  };

  let getUserNational = new XMLHttpRequest();
  getUserNational.open("GET", baseURL3 + searchName);
  getUserNational.onload = () => {
    let userNationalize = JSON.parse(getUserNational.responseText).country;
    let countryNames = userNationalize.map((countries) => countries.country_id);
    countryResult1.append(countryNames[0]);
    let firstImg = document.querySelector(".img1").querySelector("img");
    firstImg.src = baseURL4 + countryNames[0];
    document.querySelector(".img1").append(firstImg);
    countryResult2.append(countryNames[1]);
    let secondImg = document.querySelector(".img2").querySelector("img");
    secondImg.src = baseURL4 + countryNames[1];
    document.querySelector(".img2").append(secondImg);
    countryResult3.append(countryNames[2]);
    let thirdImg = document.querySelector(".img3").querySelector("img");
    thirdImg.src = baseURL4 + countryNames[2];
    document.querySelector(".img3").append(thirdImg);
    countryResult4.append(countryNames[3]);
    let fourthImg = document.querySelector(".img4").querySelector("img");
    fourthImg.src = baseURL4 + countryNames[3];
    document.querySelector(".img4").append(fourthImg);
    countryResult5.append(countryNames[4]);
    let fifthImg = document.querySelector(".img5").querySelector("img");
    fifthImg.src = baseURL4 + countryNames[4];
    document.querySelector(".img5").append(fifthImg);
  };

  getUserNational.send();
  getUserGender.send();
  getUserAge.send();
});
clear.addEventListener("click", (_event) => {
  ageResult.replace("");
});
