
document.addEventListener("DOMContentLoaded", function () {
  const darkModeBtn = document.getElementById('toggleDarkMode');

  darkModeBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    darkModeBtn.innerText = isDark ? '☀️ Modo Claro' : '🌙 Modo Escuro';
  });

  document.getElementById('swapButton').addEventListener('click', function () {
    const from = document.getElementById('fromCurrency');
    const to = document.getElementById('toCurrency');
    const temp = from.value;
    from.value = to.value;
    to.value = temp;
  });

  window.convertCurrency = async function () {
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
      lastUpdatedText.innerText = `Última atualização: ${lastUpdated.toLocaleString("pt-BR")}`;
    } catch (error) {
      resultDiv.innerText = "Erro ao buscar as taxas.";
      lastUpdatedText.innerText = "";
    }
  };
});
