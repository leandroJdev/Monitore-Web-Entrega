
window.onload = function() {
	increaseDecreaseFont();
}

var data = new Date()

function increaseDecreaseFont() {
	var elementBody = document.querySelector('html');
	var elementBtnIncreaseFont = document.getElementById('increase-font');
	var elementBtnDecreaseFont = document.getElementById('decrease-font');
	var cookieFontSize = getCookie('font-size');

	// Defini o valor do fontSize, caso não exista o cookie, será atribuído 100%
	if (cookieFontSize != '') {
		var fontSize = parseInt(cookieFontSize);
		elementBody.style.fontSize = fontSize + '%';
	} else {
		var fontSize = 100;
	}

	// Valor de incremento ou decremento, equivale a 10% do valor do Body
	var increaseDecrease = 10;

	// Evento de click para aumentar a fonte
	elementBtnIncreaseFont.addEventListener('click', function(event) {
		fontSize = fontSize + increaseDecrease;
		elementBody.style.fontSize = fontSize + '%';
		
		setCookie('font-size', fontSize);
	});

	// Evento de click para diminuir a fonte
	elementBtnDecreaseFont.addEventListener('click', function(event) {
		fontSize = fontSize - increaseDecrease;
		elementBody.style.fontSize = fontSize + '%';
		
		setCookie('font-size', fontSize);
	});
}

// Função de cor para contraste

// Troca o padrão de cor ao apertar o botão
function changeColor() {
	if (sessionStorage.getItem("estado")=="escuro") {
		claro()
	} else {
		escuro()
	}
}

// Modifica para a versão escura
function escuro() {
	console.log("escuro..")
	var element = document.body
	element.classList.add("dark_mode")
	sessionStorage.setItem("estado", "escuro")
}

// Modifica para a versão clara
function claro() {
	console.log("claro..")
	var element = document.body
	element.classList.remove("dark_mode")
	sessionStorage.setItem("estado", "claro")
}

// Verifica qual padrão usar ao carregar a página
function verificaEstado() {
	console.log("VErificando..")
	if (sessionStorage.getItem("estado")=="escuro") {
		escuro()
	} else {
		claro()
	}
}

// Data Atual no sistema

function dataAtual() {
	document.getElementById("dataAtual").innerHTML = data.toLocaleDateString()
}

// Inicia o sistema

function iniciadora() {
	verificaEstado()
	dataAtual()
	dataMinima()
}


// função para carregar o header e foot de cada pagina

carregaDocumento("header.html", "#mainheader");
carregaDocumento("footer.html", "#mainfooter");

function carregaDocumento(arquivo, target)
{
	var el = document.querySelector(target);

	//Se o elemento não existir então não requisita
	if (!el) return;

	var xhr = new XMLHttpRequest();
	xhr.open("GET", arquivo, true);
	xhr.onreadystatechange = function(){
		 if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 300){
			  el.innerHTML = xhr.responseText;
		 }
	};

	xhr.send(null);
}

// função para guardar informações 

function store() {
    var nome = document.getElementById("input-name").value;
    sessionStorage.setItem("nome", nome);
    console.log(`Nome: ${nome} cadastrado!`);

      // Recolhe o número de CPF
  var num_cpf = document.getElementById("input-Numero-Documemento").value
  sessionStorage.setItem("num_cpf", num_cpf)
  }


  // parte do cadastro especial

  function expandir(){
	var especial=document.getElementById("especial");
	var maisespecial=document.getElementById("maisespecial");

	if(especial.style.display === "none"){
		especial.style.display ="inline";
		maisespecial.innerHTML="Sim, Preciso de atendimento especial"
	} else{
			especial.style.display ="none";
			maisespecial.innerHTML="Você precisa de atendimento especial?"
	}

  }

// pop-up email

const button = document.querySelector('enviar')
const popup = document.querySelector('.popup-wrapper')
const closeButton = document.querySelector('.popup-close')
enviar.addEventListener('click',() => (
	popup.style.display = 'block'
	
) )

closeButton.addEventListener('click', () => {
	popup.style.display = "none"
} )

popup.addEventListener('click', () => {
	popup.style.display ='none'
})

document.addEventListener("DOMContentLoaded", iniciadora, false)