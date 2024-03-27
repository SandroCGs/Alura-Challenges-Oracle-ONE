const textArea = document.querySelector(".text-input");
const mensagem = document.querySelector(".texto-criptografado");
const textoApagado = document.querySelector(".texto-apagado");

textArea.addEventListener("input", function(event) {
	const texto = event.target.value;
	const novoTexto = removerAcentos(texto);
	if (texto !== novoTexto) {
        	event.target.value = novoTexto;
	}
});

function removerAcentos(string) {
	return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function btnEncriptar(){
	const textoEncriptado = encriptar(textArea.value);
	mensagem.textContent = textoEncriptado;
	mensagem.style.fontSize="2.4rem";
	mensagem.style.fontWeight="400";
	mensagem.style.color="#495057";
	textArea.value = "";
	textoApagado.style.display= "none";
	botaoCopiar.style.display = "inline-block";
}

function encriptar(stringEncriptada){
	let matrizCodigo = [["e", "enter"] , ["i","imes"] , ["a","ai"] , ["o","ober"] , ["u","ufat"]];
	stringEncriptada = stringEncriptada.toLowerCase();
		for(let i=0; i < matrizCodigo.length; i++){
               		if(stringEncriptada.includes(matrizCodigo[i][0])){
               			stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        		}
        	}
	return stringEncriptada;
}

function btnDesencriptar(){
	const textoDesencriptado = desencriptar(textArea.value);
	mensagem.textContent = textoDesencriptado;
	mensagem.style.fontSize="2.4rem";
	mensagem.style.fontWeight="400";
	mensagem.style.color="#495057";
	textArea.value = "";
	textoApagado.style.display= "none";
	botaoCopiar.style.display = "inline-block";
}

function desencriptar(stringDesencriptada){
	let matrizCodigo = [["e", "enter"] , ["i","imes"] , ["a","ai"] , ["o","ober"] , ["u","ufat"]];
	stringDesencriptada = stringDesencriptada.toLowerCase();
		for(let i=0; i < matrizCodigo.length; i++){
                	if(stringDesencriptada.includes(matrizCodigo[i][1])){
                		stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
                }
        }
	return stringDesencriptada;
}

function btnCopiar(){
	const textoParaCopia = document.querySelector(".texto-criptografado").textContent;
	navigator.clipboard.writeText(textoParaCopia);
}

