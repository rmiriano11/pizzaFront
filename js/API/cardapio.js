function fazGet(url){
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

function criarCardapio(pizza){
    nome1 = document.getElementById("nomePizza1");
    nome2 = document.getElementById("nomePizza2");

    nome1.innerHTML = pizza.Nome;
    nome2.innerHTML = pizza.Nome;
    return cardapio;
}

function main(){
    data = fazGet("http://localhost:21262");
    pizzas = JSON.parse(data);

    pizzas.forEach(element => {
        let cardapio = criarCardapio(element);
    });
}

main();