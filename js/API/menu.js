function fazGet(url){
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

function criarCardapio(pizza){
    const pizzaDiv = `<div class="col-lg-4 d-flex" style="padding: 10px;">
        <div class="services-wrap d-flex">
            <a href="#" class="img" style="background-image: url(images/pizza-1.jpg);"></a>
            <div class="text p-4">
                <h3>`+pizza.Nome+`</h3>
                <p>`+pizza.Descrição+`</p>
                <p class="price"><span>`+pizza.Preço+`</span> <a href="#" class="ml-2 btn btn-white btn-outline-white">Pedir</a></p>
            </div>
        </div>
    </div>`
  return pizzaDiv;
}

function menuPrincipais(pizza){
    const prinPizza = `<div class="pricing-entry d-flex">
    <div class="img" style="background-image: url(images/pizza-2.jpg);"></div>
        <div class="desc pl-3">
            <div class="d-flex text align-items-center">
                <h3><span>`+pizza.Nome+`</span></h3>
                <span class="price">`+pizza.Preço+`</span>
            </div>
            <div class="d-block">
                <p>`+pizza.Descrição+`</p>
            </div>
        </div>
    </div>`;
    return prinPizza;
}

function main(){
    data = fazGet("http://localhost:21262");
    pizzas = JSON.parse(data);

    let menu = ``;
    let menuPrin1 = ``;
    let menuPrin2 = ``;
    pizzas.forEach(element => {
        menu += criarCardapio(element);
        menuPrin1 += menuPrincipais(element);
        menuPrin2 += menuPrincipais(element);
    });

    document.getElementById("pizzariaMenu").innerHTML = menu;
    document.getElementById("principaisMenuCol1").innerHTML = menuPrin1;
    document.getElementById("principaisMenuCol2").innerHTML = menuPrin2;
}

main();