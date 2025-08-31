function checkLogin() {
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("error-message");

  if (password === "1234560987") {
    document.getElementById("login-screen").classList.add("hidden");
    document.getElementById("congrats-screen").classList.remove("hidden");
  } else {
    errorMsg.textContent = "Invalid password!";
  }

  document.getElementById("password").value = "";
}

function showAura() {
  document.getElementById("congrats-screen").classList.add("hidden");
  document.getElementById("aura-screen").classList.remove("hidden");

  const voice = document.getElementById("aura-voice");
  voice.play();
}

particlesJS("particles-js", {
  particles: {
    number: {
      value: 120
    },
    size: {
      value: 3
    },
    color: {
      value: "#00fff7"
    },
    line_linked: {
      enable: true,
      color: "#00ffff"
    },
    move: {
      speed: 2
    }
  }
});
