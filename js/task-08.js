const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  let elementsOfForm = event.currentTarget.elements;
  if (
    elementsOfForm.email.value === "" ||
    elementsOfForm.password.value === ""
  ) {
    return alert("Все поля должны быть заполнены!");
  }
  const info = {
    email: elementsOfForm.email.value,
    password: elementsOfForm.password.value,
  };
  event.currentTarget.reset();
  console.log(info);
}
