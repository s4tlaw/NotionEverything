function countdown() {
  const endDate = new Date("2024-12-31T23:59:59"); // Set your desired end date and time here
  const now = new Date();
  const timeLeft = endDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = padZero(days);
  document.getElementById("hours").textContent = padZero(hours);
  document.getElementById("minutes").textContent = padZero(minutes);
  document.getElementById("seconds").textContent = padZero(seconds);
}

function padZero(value) {
  return value.toString().padStart(2, "0");
}

setInterval(countdown, 1000);