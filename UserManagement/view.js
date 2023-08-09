const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("id");
let getData = async () => {
  let res = await fetch(
    `https://64d285d7f8d60b1743622812.mockapi.io/users/users/${myParam}`
  );
  let data = await res.json();

  document.getElementById("firstName").innerText = data.firstName;
  document.getElementById("lastName").innerText = data.lastName;
  document.getElementById("email").innerText = data.email;
  document.getElementById("phoneNumber").innerText = data.phoneNumber;
  document.getElementById("designation").innerText = data.designation;
  document.getElementById("password").innerText = data.password;
};
getData();
