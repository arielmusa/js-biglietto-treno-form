// form DOM elements
const fullNameInput = document.getElementById("inputFullName");
const travelDistanceInput = document.getElementById("inputTravelDistance");
const ageRangeInput = document.getElementById("inputAgeRange");
const priceCalcForm = document.getElementById("priceCalcForm");

// event listener for form submit
priceCalcForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // collect input values
  const fullName = fullNameInput.value;
  const travelDistance = parseInt(travelDistanceInput.value);
  const ageRange = ageRangeInput.value;

  // check if variables are ok
  console.log("fullName ", fullName);
  console.log("travelDistance ", travelDistance);
  console.log("ageRange ", ageRange);

  // variables for price calculation
  const priceKm = 0.21;
  const discountMinors = 20 / 100;
  const discountOver65 = 40 / 100;
  const baseTicketPrice = priceKm * travelDistance;
  let discountPrice = 0;
  let ticketType = "Biglietto Standard";

  // conditionals to apply discounts
  if (ageRange.toLowerCase() === "minorenne") {
    discountPrice = baseTicketPrice * discountMinors;
    ticketType = "Biglietto scontato";
  } else if (ageRange.toLowerCase() === "over 65") {
    discountPrice = baseTicketPrice * discountOver65;
    ticketType = "Biglietto scontato";
  }

  // final price calc
  const finalPrice = baseTicketPrice - discountPrice;

  // check if price variables are ok
  console.log("baseTicketPrice ", baseTicketPrice);
  console.log("discountPrice ", discountPrice);
  console.log("finalPrice ", finalPrice.toFixed(2));

  // asign values to my ticket section
  document.getElementById("userFullName").innerText = fullName;
  document.getElementById("ticketType").innerText = ticketType;
  document.getElementById("ticketFinalPrice").innerText = `${finalPrice.toFixed(
    2
  )}€`;
});
