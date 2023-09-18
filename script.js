// Time

const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

setInterval(() => {
  let nowDay = new Date();
  let WeWantThisDay = new Date("October 12, 2024 13:20:12");
  let Diff = WeWantThisDay - nowDay;

  const secondsLeft = Math.floor((Diff / 1000) % 60);
  const minutesLeft = Math.floor((Diff / 1000 / 60) % 60);
  const hoursLeft = Math.floor((Diff / 1000 / 60 / 60) % 24);
  const daysLeft = Math.floor(Diff / 1000 / 60 / 60 / 24);

  days.textContent = daysLeft;
  hours.textContent = hoursLeft;
  minutes.textContent = minutesLeft;
  seconds.textContent = secondsLeft;
}, 1000);

// Gsap
gsap.from(".footer", {
  opacity: 0,
  duration: 1.5,
  y: 100,
});

gsap.from(".main__clock", {
  opacity: 0,
  duration: 1.1,
  x: 200,
});

gsap.from(".main__heading", {
  opacity: 0,
  duration: 1.5,
});
