// Validação funcional do formulário
document.getElementById("formCadastro").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const idade = document.getElementById("idade").value.trim();
  const msg = document.getElementById("mensagem");

  if (nome === "") {
    msg.style.color = "red";
    msg.textContent = "⚠️ O campo Nome é obrigatório!";
  } else if (email === "" || !email.includes("@")) {
    msg.style.color = "red";
    msg.textContent = "⚠️ Insira um e-mail válido!";
  } else if (idade === "") {
    msg.style.color = "red";
    msg.textContent = "⚠️ O campo Idade é obrigatório!";
  } else {
    msg.style.color = "green";
    msg.textContent = "✅ Formulário enviado com sucesso!";
  }
});

// Teste de Unidade - Multiplicação
function multiplicar(a, b) {
  return a * b;
}

function testarMultiplicacao() {
  console.assert(multiplicar(2, 3) === 6, "Erro: 2 * 3 deve ser 6");
  console.assert(multiplicar(5, 0) === 0, "Erro: 5 * 0 deve ser 0");
  console.assert(multiplicar(-4, 2) === -8, "Erro: -4 * 2 deve ser -8");
  console.log("Todos os testes de multiplicação passaram!");
}

testarMultiplicacao();
