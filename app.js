let numerosSorteados = [];
let quantidadeNumeros = 10;
let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);
let tentativa = 1;
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'UK English Female', {rate:1});
}
textoInicial();
function textoInicial(){
    exibirTextoNaTela('h1', 'Secret Number Game');
    exibirTextoNaTela('p', 'Choose a number between 1 and 10');
}
function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){
        let palavraTentativa = tentativa > 1 ? 'tries' : 'try, you are lucky ;D';
        let mensagemTentativa = `WOOOOOW :3, you got it right in ${tentativa} ${palavraTentativa}`;
            exibirTextoNaTela('h1', 'YOU WON!!!!');
            exibirTextoNaTela('p', mensagemTentativa );    
            document.getElementById('reiniciar').removeAttribute('disabled');
            
    } else {
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', `Ops... wrong number, the secret number is less than ${chute}`);
        } else{
            exibirTextoNaTela('p', `Ops... wrong number, the secret number is greater than ${chute}`);
        }
    }
    tentativa++
    clearInput();
}
function clearInput(){
    chute = document.querySelector('input');
    chute.value = '';
}
function gerarNumeroAleatorio(){
    let quantidadeNumerosSorteados = numerosSorteados.length;

    if(quantidadeNumerosSorteados == quantidadeNumeros){
        numerosSorteados = [];
    }

    let numeroEscolhido = parseInt(Math.random() * quantidadeNumeros + 1);
    if (numerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio()
    } else{
        numerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;

    }
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    clearInput();
    tentativa = 1;
    textoInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    console.log(numeroSecreto);
    console.log(numerosSorteados);
}