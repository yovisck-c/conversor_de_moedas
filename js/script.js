async function convertCurrency() {
  const amount = document.getElementById("amount").value;
  const from = document.getElementById("fromCurrency").value;
  const to = document.getElementById("toCurrency").value;
  const resultDiv = document.getElementById("result");
  const lastUpdatedText = document.getElementById("lastUpdated");

  if (!amount || amount <= 0) {
    resultDiv.innerText = "Digite um valor válido.";
    lastUpdatedText.innerText = "";
    return;
  }

  try {
    const response = await fetch(`https://open.er-api.com/v6/latest/${from}`);
    const data = await response.json();

    if (data.result !== "success" || !data.rates[to]) {
      resultDiv.innerText = "Não foi possível obter a taxa de câmbio.";
      lastUpdatedText.innerText = "";
      return;
    }

    const rate = data.rates[to];
    const converted = (amount * rate).toFixed(2);

    resultDiv.innerText = `${amount} ${from} = ${converted} ${to}`;

    const lastUpdated = new Date(data.time_last_update_unix * 1000);
    lastUpdatedText.innerText = `Taxas atualizadas em: ${lastUpdated.toLocaleString()}`;
  } catch (error) {
    console.error("Erro ao converter:", error);
    resultDiv.innerText = "Erro ao obter as taxas de câmbio.";
    lastUpdatedText.innerText = "";
  }
}

document.getElementById("convertBtn").addEventListener("click", convertCurrency);

document.getElementById("swapBtn").addEventListener("click", () => {
  const from = document.getElementById("fromCurrency");
  const to = document.getElementById("toCurrency");
  [from.value, to.value] = [to.value, from.value];

  document.getElementById("result").innerText = "";
  document.getElementById("lastUpdated").innerText = "";
});

document.getElementById("refreshRatesBtn").addEventListener("click", () => {
  const resultDiv = document.getElementById("result");
  resultDiv.innerText = "";
  document.getElementById("lastUpdated").innerText = "";
  convertCurrency();
});

const toggleThemeBtn = document.getElementById("toggleTheme");
toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
