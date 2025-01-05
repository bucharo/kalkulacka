function calculate(operator) {
  const value1 = document.getElementById("value1").value;
  const value2 = document.getElementById("value2").value;
  const vysledek = document.getElementById("vysledek");

  // Kontrola, zda jsou vstupy čísla
  if (isNaN(value1) || isNaN(value2) || value1.trim() === "" || value2.trim() === "") {
      vysledek.textContent = "Chyba: Zadejte platná čísla!";
      vysledek.style.color = "red";
      return;
  }

  const num1 = parseFloat(value1);
  const num2 = parseFloat(value2);

  let result;
  switch (operator) {
      case "+":
          result = num1 + num2;
          break;
      case "-":
          result = num1 - num2;
          break;
      case "*":
          result = num1 * num2;
          break;
      case "/":
          if (num2 === 0) {
              vysledek.textContent = "Chyba: Nelze dělit nulou!";
              vysledek.style.color = "red";
              return;
          }
          result = num1 / num2;
          break;
      default:
          vysledek.textContent = "Chyba: Neplatný operátor!";
          vysledek.style.color = "red";
          return;
  }

  // Zobrazení výsledku
  vysledek.textContent = `Výsledek: ${result}`;
  vysledek.style.color = "green";
}
