function fazGet(url){
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

function criarCardapio(pizza){
    const pizzaDiv = `<div class="col-lg-4 d-flex" style="padding: 10px;">
    <div class="services-wrap d-flex">
      <a href="#" class="img" style="background-image: url(images/pizza-1.jpg)"></a>
      <div class="text p-4">
        <h3>`+pizza.Nome+`</h3>
        <p>`+pizza.Descrição+`</p>
        <p class="price">
          <span>`+pizza.Preço+`</span>
          <a href="#" class="ml-2 btn btn-white btn-outline-white">Peça</a>
        </p>
      </div>
    </div>
  </div>`
  return pizzaDiv;
}

function principais(pizza){
  const pizzaPrin = `<div class="pricing-entry d-flex">
  <div class="img" style="background-image: url(images/pizza-1.jpg)"></div>
  <div class="desc pl-3">
    <div class="d-flex text align-items-center">
      <h3><span>`+pizza.Nome+`</span></h3>
      <span class="price">`+pizza.Preço+`</span>
    </div>
    <div class="d-block">
      <p>`+pizza.Descrição+`</p>
    </div>
  </div>
</div>`
return pizzaPrin;
}

function main(){
    data = fazGet("http://localhost:21262");
    pizzas = JSON.parse(data);

    let cardapio = ``;
    let prinCol1 = ``;
    let prinCol2 = ``;
    pizzas.forEach(element => {
      cardapio += criarCardapio(element);
      prinCol1 += principais(element);
      prinCol2 += principais(element);
    });

    document.getElementById("cardapioPizzas").innerHTML = cardapio;
    document.getElementById("principaisCol1").innerHTML = prinCol1;
    document.getElementById("principaisCol2").innerHTML = prinCol2;
}

main();