const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("id");

let getData = async () => {
  let res = await fetch(
    `https://64d285d7f8d60b1743622812.mockapi.io/users/users/${myParam}`
  );
  let data = await res.json();
  console.log(data);

  document.getElementById("firstName").value = data.firstName;
  document.getElementById("lastName").value = data.lastName;
  document.getElementById("email").value = data.email;
  document.getElementById("phoneNumber").value = data.phoneNumber;
  document.getElementById("designation").value = data.designation;
  document.getElementById("password").value = data.password;
};
getData();

let onFormSubmit = async () => {
  let formData = readFormData();
  let res = await fetch(
    `https://64d285d7f8d60b1743622812.mockapi.io/users/users/${myParam}`,
    {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
  let data = res.json();
  window.location.href = "/index.html";
};

let readFormData = () => {
  let formData = {};
  formData["firstName"] = document.getElementById("firstName").value;
  formData["lastName"] = document.getElementById("lastName").value;
  formData["email"] = document.getElementById("email").value;
  formData["phoneNumber"] = document.getElementById("phoneNumber").value;
  formData["designation"] = document.getElementById("designation").value;
  formData["password"] = document.getElementById("password").value;
  return formData;
};

(function () {
  "use strict";
  var forms = document.querySelectorAll(".needs-validation");
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
