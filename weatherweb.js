"use strict"

let cities = [
    { name: "Benbrook, TX",
    latitude: 32.6732, 
    longitude: -97.4606 },
    { name: "Seattle, WA",
    latitude: 47.6206, 
    longitude: -122.3492},
    { name: "New York, NY",
    latitude: 40.7485, 
    longitude: -73.9856},
    { name: "Nashville, TN",
    latitude: 36.1483, 
    longitude: -86.8066},
];

   
document.addEventListener("DOMContentLoaded", initializeDropdown);

/**
 * Initializes the dropdown population process.
 */
function initializeDropdown() {
  populateCityDropdown();
}

function populateCityDropdown(){
    const dropdownElement = document.getElementById("weatherStateOptions");
    const fragment = document.createDocumentFragment();
  
    cities.forEach(city => {
      const cityOption = new Option(city.name, `${city.latitude},${city.longitude}`);
      fragment.appendChild(cityOption);
    });
  
    dropdownElement.appendChild(fragment);

}