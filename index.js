// novo checkpoint de PI numero 1

/* Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!". */

function microondas(prato, tempo){
    if (prato == 'pipoca' && tempo > 2*10 && tempo <3*10){
        console.log('A comida queimou.');
}else if(prato  == 'pipoca' && tempo < 10) {
    console.log('Tempo insuficiente.');
}else if(prato == 'pipoca' && tempo >= 3*10){
    console.log('Kabummmm!!');
}else if(prato == 'pipoca' && tempo == 10){
    console.log('Prato pronto, bom apetite!!!');
}

else if(prato == 'macarrao' && tempo > 2*8 && tempo < 3*8){
    console.log('A comida queimou.');
}else if (prato == 'macarrao' && tempo < 8){
    console.log('Tempo insuficiente.');
}else if (prato == 'macarrao' && tempo > 3*8){
    console.log('Kabummmm!!');
}else if(prato == 'macarrao' && tempo == 8){
     console.log('Prato pronto, bom apetite!!!');
}

else if(prato == 'carne' && tempo > 2*15 && tempo < 3*15) {
    console.log('A comida queimou.');
}else if(prato == 'carne' && tempo < 15) {
    console.log('Tempo insuficiente.');
}else if(prato == 'carne' && tempo > 3*15) {
    console.log('Kabummmm!!');
}else if(prato == 'carne' && tempo == 15) {
    console.log('Prato pronto, bom apetite!!!');
}

else if(prato == 'feijao' && tempo > 2*12 && tempo < 3*12){
    console.log('A comida queimou.');
}else if(prato == 'feijao' && tempo < 12){
    console.log('Tempo insuficiente.');
}else if(prato == 'feijao' && tempo > 3*12){
    console.log('Kabummmm!!');
}else if(prato == 'feijao' && tempo == 12){
    console.log('Prato pronto, bom apetite!!!');
}

else if(prato == 'brigadeiro' && tempo > 2*8 && tempo < 3*8){
    console.log('A comida queimou.');
}else if(prato == 'brigadeiro' && tempo < 8) {
    console.log('Tempo insuficiente.');
}else if(prato == 'brigadeiro' && tempo > 3*8){
    console.log('Kabummmm!!');
}else if(prato == 'brigadeiro' && tempo == 8){
    console.log('Prato pronto, bom apetite!!!');
}   else{
    console.log('Prato inexistente.');
    }

}

microondas('brigadeiro', 8);