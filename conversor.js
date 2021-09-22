// Função linkada do HTML
function Converter() {
    var valorElemento = document.getElementById("valor"); // Variável que recolhe os dados do input (id="valor") do HTML
    var valor = valorElemento.value; // retirando apenas o value da variável valorElemento
    var valorEmDolarNumerico = parseFloat(valor); // Fazendo a variável adotar a tipagem Float
    var valorEmReal = valorEmDolarNumerico * 5.29; //Criando uma variável com calculo de Dolar para Real
    //OBS: O valor em Dollar é variável e esse simples código não acompanha essa variação
  
    console.log(valorEmReal);
  
    var elementoValorConvertido = document.getElementById("valorConvertido"); // Retirando os dados de "valorConvertido"
    var valorConvertido = "O resultado em real é: R$ " + valorEmReal; // Contatenando o valor em real com o texto
    elementoValorConvertido.innerHTML = valorConvertido; // imprimindo no html o valor já convertido na tela
  }
  
