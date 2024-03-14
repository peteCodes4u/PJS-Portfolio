const psEmail = document.getElementById("psEmail");

const emailIconButton = document.getElementById("emailIconButton");
emailIconButton.addEventListener("click", function() {
  
  if (psEmail.style.display === "show") {
    psEmail.style.display = "block";
    } else {
        psEmail.style.display = "show";
    }
});
