const botao = document.querySelector('#button');

function calculo () {
    const nome = document.getElementById('name').value;
    const altura = document.getElementById('height').value;
    const peso = document.getElementById('weight').value;
    const resultado = document.getElementById('result');

    if (nome !== '' && altura !== '' && peso !== '') {

        const imc = (peso / (altura * altura)).toFixed(2);
        
        let condicao = '';

        if (imc <= 18.4) {
            condicao = 'abaixo do peso';
        } else if (imc > 18.4 && imc <= 24.9) {
            condicao = 'no peso ideal';
        } else {
            condicao = 'acima do peso';
        };

        resultado.innerHTML = `${nome} seu IMC é ${imc} e você está ${condicao}.`;
        
    } else {
        resultado.innerHTML = 'Preencha todos os campos.';
    }
};

botao.addEventListener('click', calculo);
