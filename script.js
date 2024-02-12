document.addEventListener("DOMContentLoaded", function() {
    const text = document.getElementById("text");
    const letters = text.textContent.split(" ");
    text.textContent = " ";
  
    for (let i = 0; i < letters.length; i++) {
      const letterSpan = document.createElement("span");
      letterSpan.textContent = letters[i];
      letterSpan.classList.add("letter");
      letterSpan.style.animationDelay = `${i * 0.3}s`;
      text.appendChild(letterSpan);

    }
    text.classList.add("afterReveal");

  });
  