// Cart functionality

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
    <div class="item shoppingCartItem">
    <h2 id="seleccion" class="carrito-title">${itemTitle}</h2>
    <img src="${itemImage}" class="carrito-img">
    <div>
    <button class="buttonDelete">X</button>
    <input class="quantityInput shoppingCartItemQuantity" type="number" id="quantity" name="quantity" min="1" value="1">
    </div>
    <h6 class="carrito-price shoppingCartItemPrice">${itemPrice}</h6>
    </div>`;

        shoppingCartRow.innerHTML = shoppingCartContent
        shoppingCartItemContainer.append(shoppingCartRow);

        shoppingCartRow
        .querySelector('.buttonDelete')
        .addEventListener('click',removeShoppingCartItem );
        
        shoppingCartRow.querySelector('.shoppingCartItemQuantity').addEventListener('change', quantityChanged)

        updateShoppingCartTotal()
}

function updateShoppingCartTotal(){
    let total = 0;
    const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');
    shoppingCartItems.forEach(shoppingCartItem => {
        const shoppingCartItemPriceElement = shoppingCartItem.querySelector('.shoppingCartItemPrice')
        .innerHTML.split(" ")[1].replace(".", "")
        total = total + parseInt(shoppingCartItemPriceElement)
    });
   document.querySelector(".shoppingCartTotal").textContent = `$${total}`
}

function removeShoppingCartItem(event){
    const buttonclicked = event.target;

 buttonclicked.closest('shoppingCartItem').remove()
 updateShoppingCartTotal();

}

function quantityChanged(event){
    const inputQuantity = event.target;
    updateShoppingCartTotal()
}

console.log(quantityChanged);
// Jquery Efects 

const cartEfect = $('.open').click( function(){
    $('.contenedorCart').fadeToggle('fast');
})


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

 $(document).ready(function() {
    $(".bodyComprar").css("transition", "1s"); 
    $(".bodyComprar").css("background", "blue");
 });  