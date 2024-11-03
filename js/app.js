
let increaseBtn =document.getElementById('plus')
let descreaseBtn = document.getElementById('minus');
let addCartBtn = document.getElementById('addToCart');
let colorRadioContainer = document.querySelectorAll('.colorRadio');
let selectColor = document.getElementById('colorInput');
let containerTop = document.querySelector(".topId");
let closeBtn = document.getElementById("close-button");

//quantity functionality
let count = 0;
let totalCartItems = 0;

colorRadioContainer.forEach(radio=>{
    radio.addEventListener('change', pickColor);
})
increaseBtn.addEventListener('click', increaseQuantity);
descreaseBtn.addEventListener('click', decreaseQuantity);
addCartBtn.addEventListener('click', addProductToCart);


function increaseQuantity(){
  let increaseCount = count++;
document.getElementById('quantityResult').innerHTML= increaseCount;
}

function decreaseQuantity(){
if(count > 0){
    count--;
} 
document.getElementById('quantityResult').innerHTML= count;
}


//cart notification
function addProductToCart(){
       
        let increaseCount = totalCartItems++; 
        let notification = document.querySelector('.showNotification');
        document.querySelector('.cartNotification').innerHTML = increaseCount;
        
        notification.classList.remove('d-none'); 
        notification.classList.add('notification');
        
    }

//color pick functionality
function pickColor(){
    let productSelectedColor = document.querySelector('input[name="color"]:checked');
    if(productSelectedColor){
        selectColor.innerHTML = `${productSelectedColor.value.charAt(0).toUpperCase() + productSelectedColor.value.slice(1)}`;
    }

}


//create a component file
let loadComponent = async(id,file) =>{
    const response = await fetch(file);
    const content = await response.text();
    document.getElementById(id).innerHTML = content;
};

loadComponent('navigation','./components/navigation.html');
loadComponent('jumbotron','./components/jumbotron.html');
loadComponent('product','./components/product.html');
loadComponent('review','./components/review.html');
loadComponent('suggestedProducts','./components/suggestedProducts.html');
loadComponent('footer','./components/footer.html');


//top bar close functionality
closeBtn.addEventListener('click', hideTheTopBar);
function hideTheTopBar(){
   containerTop.style.display = 'none';   
}

