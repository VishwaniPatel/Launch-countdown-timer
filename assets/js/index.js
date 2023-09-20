// Set the date we're counting down to
var countDownDate = new Date("Nov 22, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  const daysCard = document.querySelector(".days > .cards");
  const hoursCard = document.querySelector(".hours  > .cards");
  const minutesCard = document.querySelector(".minutes  > .cards");
  const secondsCard = document.querySelector(".seconds  > .cards");

  // function call to flip cards
  cardFlip(daysCard, days);
  cardFlip(hoursCard, hours);
  cardFlip(minutesCard, minutes);
  cardFlip(secondsCard, seconds);
}, 1000);

/**
 *
 * @param {*} card select card
 * @param {*} time provide time
 * @returns
 */
function cardFlip(card, time) {
  // Add 0 before time string if time string length is less than 2
  time = String(time).padStart(2, "0");
  const currentValue = card.querySelector(".upper-card").innerText;

  if (time == currentValue) return;

  // add animation class to card
  const upperCardFlip = document.createElement("div");
  upperCardFlip.classList.add("upper-card-flip");
  upperCardFlip.innerText = currentValue;

  const bottomCardFlip = document.createElement("div");
  bottomCardFlip.classList.add("bottom-card-flip");
  bottomCardFlip.innerText = time;

  const upperCard = card.querySelector(".upper-card");
  const bottomCard = card.querySelector(".bottom-card");

  // add animation event
  upperCardFlip.addEventListener("animationstart", animationStart);
  function animationStart() {
    upperCard.innerText = time;
  }

  // remove animation event
  upperCardFlip.addEventListener("animationend", animationEnd);
  function animationEnd() {
    upperCardFlip.remove();
  }

  bottomCardFlip.addEventListener("animationend", () => {
    bottomCard.innerText = time;
    bottomCardFlip.remove();
  });

  card.appendChild(upperCardFlip);
  card.appendChild(bottomCardFlip);
}
