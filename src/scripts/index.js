const emailValidation = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const passwordValidation = (password) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return regex.test(password);
};

const submitForm = (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("senha").value;
  if (!emailValidation(email)) {
    alert("E-mail inválido!");
  } else if (!passwordValidation(password)) {
    alert("Senha inválida!");
  } else {
    alert("Dados enviados com sucesso!");
  }
};

document.getElementById("submit").addEventListener("click", submitForm);
