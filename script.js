function checkLogin() {
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("error-message");
  
  if (password === "1234560987") {
    document.getElementById("login-screen").classList.add("hidden");
    document.getElementById("congrats-screen").classList.remove("hidden");
  } else {
    errorMsg.textContent = "Invalid password!";
  }

  // Clear password after check
  document.getElementById("password").value = "";
}

function showAura() {
  document.getElementById("congrats-screen").classList.add("hidden");
  document.getElementById("aura-screen").classList.remove("hidden");
}
