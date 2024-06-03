"use strict"

// const baseURL = "https://jsonplaceholder.typicode.com/";
// const endpoint= "todo";
// const endpointResource = _endpointResource;
// const searchValue = "";
// const api_key = "";

// function fetchData() {
//     fetch('https://jsonplaceholder.typicode.com/todos') //GET request to URL
//     .then((response) => response.json() //Transform respons into a JSON format (json.PARSE)
//     .then((data) => displayData(data))  //Then is a keyword to resolve promise requests
//     );
//   }

//   //you can use a foreach to get names of all title or whatever from the array in the api. and use a forloop to get more specific  
//   function displayData(_data) {
  
//     for (let index = 0; index < _data.length; index++) {
//       const myTitle = _data[index];
//       if(myTitle.id == 2) {
//         console.log(myTitle.title);
//       }
//     }
//   }
//   fetchData();



//   _data.forEach(users => {
//     console.log(users.title);
// });
// console.log(_data);


const BASE_URL = "https://freetestapi.com/api/v1/"; 
//Function to fetch data from a given endpoint resource 
const fetchData = async (endpointResource) => { 
try { 
    //sending  a GET request to the endpoint using fetch API
    const response = await fetch(`${BASE_URL}${endpointResource}`); 
if (!response.ok) { 
    throw new Error(`Network response was not ok: ${response.statusText}`); 
} 
const data = await response.json(); 
displayData(data); 
} catch (error) { 
    console.error(`Error fetching data from ${endpointResource}:`, error); 
} }; 
const displayData = (data) => { 
    data.forEach(names => {
        console.log(`NAME: ${names.name} and DESCRIPTION: ${names.description}`); 
    });
   
}; 
//fetchData("albums"); //fetchData("todos"); //fetchData("todos/1"); //fetchData("albums"); fetchData("comments");

fetchData("cats/")