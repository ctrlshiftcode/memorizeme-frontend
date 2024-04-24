let isFlipped = false;

document.getElementById("card").addEventListener("click", () => {
  const flipCardInner = document.querySelector(".flip-card-inner");
  if (!isFlipped) {
    flipCardInner.style.transform = "rotateY(180deg)";
  } else {
    flipCardInner.style.transform = "rotateY(0deg)";
  }
  isFlipped = !isFlipped;
});
