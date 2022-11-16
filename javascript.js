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
let firstImg = document.querySelector(".img1").querySelector("img");
let secondImg = document.querySelector(".img2").querySelector("img");
let thirdImg = document.querySelector(".img3").querySelector("img");
let fourthImg = document.querySelector(".img4").querySelector("img");
let fifthImg = document.querySelector(".img5").querySelector("img");
displayResult.addEventListener("click", (event) => {
  event.preventDefault();
  clearing();
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
    
    firstImg.src = baseURL4 + countryNames[0];
    document.querySelector(".img1").append(firstImg);
    countryResult2.append(countryNames[1]);
    
    secondImg.src = baseURL4 + countryNames[1];
    document.querySelector(".img2").append(secondImg);
    countryResult3.append(countryNames[2]);
    
    thirdImg.src = baseURL4 + countryNames[2];
    document.querySelector(".img3").append(thirdImg);
    countryResult4.append(countryNames[3]);
    
    fourthImg.src = baseURL4 + countryNames[3];
    document.querySelector(".img4").append(fourthImg);
    countryResult5.append(countryNames[4]);
    
    fifthImg.src = baseURL4 + countryNames[4];
    document.querySelector(".img5").append(fifthImg);
  };

  getUserNational.send();
  getUserGender.send();
  getUserAge.send();
});

clear.addEventListener("click", (_event) => {
  _event.preventDefault();
  ageResult.innerHTML='';
  genderResult.innerHTML='';
  countryResult1.innerHTML='';
   countryResult2.innerHTML = "";
    countryResult3.innerHTML = "";
     countryResult4.innerHTML = "";
      countryResult5.innerHTML = "";
       firstImg.remove();
        secondImg.remove();
         thirdImg.remove();
          fourthImg.remove();
      fifthImg.remove();
});
function clearing() {
  let gender = document.querySelector("table").querySelector(".genderResult");
  let age = document.querySelector("table").querySelector(".ageResult");
  let countries1 = document
    .querySelector("table")
    .querySelector(".countriesResult1");
  let countries2 = document
    .querySelector("table")
    .querySelector(".countriesResult2");
  let countries3 = document
    .querySelector("table")
    .querySelector(".countriesResult3");
  let countries4 = document
    .querySelector("table")
    .querySelector(".countriesResult4");
  let countries5 = document
    .querySelector("table")
    .querySelector(".countriesResult5");
  gender.innerHTML = "";
  age.innerHTML = "";
  countries1.innerHTML = "";
  countries2.innerHTML = "";
  countries3.innerHTML = "";
  countries4.innerHTML = "";
  countries5.innerHTML = "";
}
