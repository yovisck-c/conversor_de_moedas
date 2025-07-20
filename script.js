async function convertCurrency() {
  const amount = document.getElementById("amount").value;
  const from = document.getElementById("fromCurrency").value;
  const to = document.getElementById("toCurrency").value;
  const resultDiv = document.getElementById("result");

  if (!amount || amount <= 0) {
    resultDiv.innerText = "Digite um valor válido.";
    return;
  }

  try {
    const response = await fetch(`https://open.er-api.com/v6/latest/${from}`);
    const data = await response.json();
    console.log("Resposta da API:", data);

    if (data.result !== "success" || !data.rates[to]) {
      resultDiv.innerText = "Não foi possível obter a taxa de câmbio.";
      return;
    }

    const rate = data.rates[to];
    const converted = (amount * rate).toFixed(2);

    resultDiv.innerText = `${amount} ${from} = ${converted} ${to}`;
  } catch (error) {
    console.error("Erro ao converter:", error);
    resultDiv.innerText = "Erro ao obter as taxas de câmbio.";
  }
}

document.getElementById("swapButton").addEventListener("click", () => {
  const fromSelect = document.getElementById("fromCurrency");
  const toSelect = document.getElementById("toCurrency");

  const temp = fromSelect.value;
  fromSelect.value = toSelect.value;
  toSelect.value = temp;

});

const toggleBtn = document.getElementById("toggleDarkMode");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.innerText = "☀️ Modo Claro";
  } else {
    toggleBtn.innerText = "🌙 Modo Escuro";
  }
});
