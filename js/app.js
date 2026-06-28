const frases = [
    "Conhecer",
    "Aprofundar",
    "Aplicar",
    "Corrigir",
    "Repetir"
];

const botao = document.querySelector('#botao');
const texto = document.querySelector('#textoAleatorio');

let ultimoIndice = -1;
botao.addEventListener('click', () =>{
    //Math.floor arredonda um valor para baixo, Math.random sorteia um número entre 0 e o último item de uma lista.
    let novoIndice;

    do {
        novoIndice = Math.floor(Math.random() * frases.length);
    } while (novoIndice === ultimoIndice) {
        texto.innerText = frases[novoIndice];
        ultimoIndice = novoIndice;
    }
})


const botaoAdd = document.querySelector('#botaoAdd');
const fraseNova = document.querySelector('#fraseNova');

botaoAdd.addEventListener('click', (event) =>{
    event.preventDefault();
    const textoDigitado = fraseNova.value

    if (textoDigitado.trim() !== "") {
        frases.push(textoDigitado);
        fraseNova.value = "";
        alert("Frase adicionada com sucesso!");
    } else {
        alert("Digite alguma frase antes de continuar!");
    }
    
})