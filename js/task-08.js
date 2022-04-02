const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  let elementsOfForm = event.currentTarget.elements;
  const info = {
    email: elementsOfForm.email.value,
    password: elementsOfForm.password.value,
  };
  if (info.email === "" || info.password === "") {
    return alert("Все поля должны быть заполнены!");
  }
  elementsOfForm.value = "";
  console.log(info);
}
