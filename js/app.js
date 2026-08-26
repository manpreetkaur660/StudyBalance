"use strict";

const yearElement = document.getElementById("currentYear");
const startButton = document.getElementById("startButton");
const statusMessage = document.getElementById("statusMessage");

yearElement.textContent = new Date().getFullYear();

startButton.addEventListener("click", () => {
  statusMessage.textContent = "Initial project setup is working correctly.";
});
