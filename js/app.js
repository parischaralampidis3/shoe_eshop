document.addEventListener("DOMContentLoaded", function () {
  let increaseBtn = document.getElementById("plus");
  let descreaseBtn = document.getElementById("minus");
  let addCartBtn = document.getElementById("addToCart");

  let containerTop = document.querySelector(".topId");
  let closeBtn = document.getElementById("close-button");

  // quantity functionality
  let count = 0;
  let totalCartItems = 0;

  increaseBtn.addEventListener("click", increaseQuantity);
  descreaseBtn.addEventListener("click", decreaseQuantity);
  addCartBtn.addEventListener("click", addProductToCart);

  function increaseQuantity() {
    count++;
    document.getElementById("quantityResult").innerHTML = count;
  }

  function decreaseQuantity() {
    if (count > 0) {
      count--;
    }
    document.getElementById("quantityResult").innerHTML = count;
  }

  var slides = document.querySelector(".slider-items").children;
  var nextSlide = document.querySelector(".right-side");
  var prevSlide = document.querySelector(".left-side");

  var totalSlides = slides.length;
  var index = 0;

  nextSlide.onclick = function () {
    next("next");
  };
  prevSlide.onclick = function () {
    next("prev");
  };

  function next(direction) {
    if (direction == "next") {
      index++;
      if (index == totalSlides) {
        index = 0;
      }
    } else {
      if (index == 0) {
        index = totalSlides - 1;
      } else {
        index--;
      }
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");
  }

  // cart notification
  function addProductToCart() {
    if( count == "0"){
        let notification = document.querySelector(".showNotification");
    document.querySelector(".cartNotification").innerHTML = ""; 
    notification.classList.remove("d-none");
    notification.classList.add("notification");
    notification.querySelector("small").innerText =
      "Πρέπει να επιλέξετε μια ποσότητα πριν προσθέσετε στο καλάθι."; 
  }else{
    let notification = document.querySelector(".showNotification");
    document.querySelector(".cartNotification").innerHTML = ""; 
    notification.classList.remove("d-none");
    notification.classList.add("notification");
    notification.querySelector("small").innerText =
      "Το προϊόν προστέθηκε στο καλάθι"; 
  }
    
  }

  let colorRadioContainer = document.querySelectorAll(".colorRadio");
  let selectColor = document.getElementById("colorInput");
  colorRadioContainer.forEach((radio) => {
    radio.addEventListener("change", pickColor);
  });
  // color pick functionality
  function pickColor() {
    let productSelectedColor = document.querySelector(
      'input[name="color"]:checked'
    );
    if (productSelectedColor) {
      selectColor.innerHTML = `${
        productSelectedColor.value.charAt(0).toUpperCase() +
        productSelectedColor.value.slice(1)
      }`;
    }
  }

  // create a component file
  let loadComponent = async (id, file) => {
    const response = await fetch(file);
    const content = await response.text();
    document.getElementById(id).innerHTML = content;
  };

  loadComponent("navigation", "./components/navigation.html");
  loadComponent("jumbotron", "./components/jumbotron.html");
  loadComponent("product", "./components/product.html");
  loadComponent("review", "./components/review.html");
  loadComponent("suggestedProducts", "./components/suggestedProducts.html");
  loadComponent("footer", "./components/footer.html");

  // top bar close functionality
  closeBtn.addEventListener("click", hideTheTopBar);
  function hideTheTopBar() {
    containerTop.style.display = "none";
  }
});
