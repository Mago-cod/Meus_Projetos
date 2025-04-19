const hamburger = document.querySelector("hamgurger");
const nav = document.querySelector(".nav");

hamburger.addEventsListener("click", () => nav.classiList.toggle("active"));