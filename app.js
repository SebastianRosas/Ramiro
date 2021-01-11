const addToShoppingCartButtons = document.querySelectorAll('.addToCart');

addToShoppingCartButtons.forEach(addToCartButton => {
    addToCartButton.addEventListener('click', addToCartClicked);
})

const shoppingCartItemContainer = document.querySelector('.shoppingCartItemContainer');

function addToCartClicked(event) {
    const button = event.target;
    const item = button.closest('.item');


    const itemTitle = item.querySelector('.item-title').textContent;
    const itemPrice = item.querySelector('.item-price').textContent;
    const itemImage = item.querySelector('.item-image').src;

    addItemToShoppingCart(itemTitle, itemPrice, itemImage);
    event.preventDefault()
}

function addItemToShoppingCart(itemTitle, itemPrice, itemImage) {
    const shoppingCartRow = document.createElement('div');

    const shoppingCartContent = `
    <div class="item">
    <h2 id="seleccion" class="carrito-title">${itemTitle}</h2>
    <img src="${itemImage}" class="carrito-img">
    <h6 class="carrito-price">${itemPrice}</h6>
    </div>`;

        shoppingCartRow.innerHTML = shoppingCartContent
        shoppingCartItemContainer.append(shoppingCartRow);

}

console.log(addItemToShoppingCart);



const perrito = $('ul').click( function(){
    $('.contenedorCart').fadeToggle('fast');
})

console.log(perrito);


$(document).ready(function() {
    $(".bodyMenu").css("transition", "1s");
    $(".bodyMenu").css("background", "white");
 });  

 $(document).ready(function() {
    $(".bodyNosotros").css("transition", "1s"); 
    $(".bodyNosotros").css("background", "blue"); 
 }); 

 $(document).ready(function() {
    $(".bodyContacto").css("transition", "1s"); 
    $(".bodyContacto").css("background", "white"); 
 });  

 $(document).ready(function() {
    $(".bodyIndex").css("transition", "1s"); 
    $(".bodyIndex").css("background", "white");
 });  