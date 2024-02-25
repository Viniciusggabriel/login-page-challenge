const { JSDOM } = require("jsdom");
const { window } = new JSDOM();
global.document = window.document;
global.window = window;

const {
  emailValidation,
  passwordValidation,
  submitForm,
} = require("./index.js");

describe("Testes para a validação de e-mail", () => {
  test("Deve retornar verdadeiro para um e-mail válido", () => {
    expect(emailValidation("email@valido.com")).toBe(true);
  });

  test("Deve retornar falso para um e-mail inválido", () => {
    expect(emailValidation("emailinvalido.com")).toBe(false);
  });
});

describe("Testes para a validação de senha", () => {
  test("Deve retornar verdadeiro para uma senha válida", () => {
    expect(passwordValidation("Senha123")).toBe(true);
  });

  test("Deve retornar falso para uma senha inválida", () => {
    expect(passwordValidation("senhafraca")).toBe(false);
  });
});
describe("Testes para o envio do formulário use jsdom in this test file", () => {
  // Simulando o ambiente de teste com jsdom
  beforeEach(() => {
    document.body.innerHTML = `
        <form id="form">
          <input id="email" type="email" value="email@valido.com" />
          <input id="senha" type="password" value="Senha123" />
        </form>
        <button type="submit" class="submit" id="submit"><span>Entrar na conta</span></button>
      `;
  });

  test("Deve mostrar um alerta para um e-mail inválido", () => {
    document.getElementById("email").value = "emailinvalido.com";
    document.getElementById("submit").click();
    expect(alert).toHaveBeenCalledWith("E-mail inválido!");
  });

  test("Deve mostrar um alerta para uma senha inválida", () => {
    document.getElementById("senha").value = "senhafraca";
    document.getElementById("submit").click();
    expect(alert).toHaveBeenCalledWith("Senha inválida!");
  });

  test("Deve mostrar um alerta para dados enviados com sucesso", () => {
    document.getElementById("submit").click();
    expect(alert).toHaveBeenCalledWith("Dados enviados com sucesso!");
  });
});
