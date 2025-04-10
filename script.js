// form DOM elements
const fullNameInput = document.getElementById("inputFullName");
const travelDistanceInput = document.getElementById("inputTravelDistance");
const ageRangeInput = document.getElementById("inputAgeRange");
const priceCalcForm = document.getElementById("priceCalcForm");

priceCalcForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // collect input values
  const fullName = fullNameInput.value;
  const travelDistance = parseInt(travelDistanceInput.value);
  const ageRange = ageRangeInput.value;

  console.log("fullName ", fullName);
  console.log("travelDistance ", travelDistance);
  console.log("ageRange ", ageRange);

  // variables for price calculation
  const priceKm = 0.21;
  const discountMinors = 20 / 100;
  const discountOver65 = 40 / 100;
  const baseTicketPrice = priceKm * travelDistance;
  let discountPrice = 0;

  if (ageRange.toLowerCase() === "minorenne") {
    discountPrice = baseTicketPrice * discountMinors;
  } else if (ageRange.toLowerCase() === "over 65") {
    discountPrice = baseTicketPrice * discountOver65;
  }
  let finalPrice = baseTicketPrice - discountPrice;
  console.log("baseTicketPrice ", baseTicketPrice);
  console.log("discountPrice ", discountPrice);
  console.log("finalPrice ", finalPrice.toFixed(2));
});
