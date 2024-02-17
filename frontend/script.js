document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("register-form").addEventListener("submit", register);
  document.getElementById("login-form").addEventListener("submit", login);
});

async function register(e) {
  e.preventDefault();
  console.log(e);
  const role = document.getElementById("role").value;
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const address = document.getElementById("address").value;
  const phone = document.getElementById("phone").value;
  const msg = document.getElementById("msg");

  const data = await fetch("http://localhost:8080/api/v1/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ role, name, email, password, address, phone }),
  });
  const json = await data.json();
  if (json) {
    msg.innerText = "Registered Successfully";
  }
}

async function login(e) {
  e.preventDefault();
  console.log(e);

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  const data = await fetch("http://localhost:8080/api/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ role, name, email, password, address, phone }),
  });
  const json = await data.json();
  console.log(json);
  if (json) {
    localStorage.setItem("token", json.token);
    const msg = document.getElementById("msg");

    msg.innerText = json.message;
  }
}

let btn = document.getElementById("btn");
btn.addEventListener("click", getUserInfo);

async function getUserInfo() {
  console.log("hey this is get user");
  const authToken = localStorage.getItem("token");
  const data = await fetch("http://localhost:8080/api/v1/auth/current-user", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  });
  console.log(authToken);
  const json = await data.json();
  console.log(json);
}
