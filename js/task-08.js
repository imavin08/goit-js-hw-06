const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const elementsOfForm = event.currentTarget.elements;
  const email = elementsOfForm.email.value;
  const password = elementsOfForm.password.value;
  const info = {
    email,
    password,
  };

  if (email === "" || password === "") {
    alert("Все поля должны быть заполнены!");
  }
  form.reset();
  console.log(info);
}
