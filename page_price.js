// ================== Les modèles ==================>

// Pour chaque modèles choisi
// On vérifie qu'un modèle est sélectionné lorsqu'elle porte la classe active
// Si le modèle choisi correspond à l'id du bouton d'une des deux catégories
// On change l'image depuis le data-source du modèle en fonction de l'id de la couleur du téléphone sinon,
// On charge l'image depuis le data-image-source
var product = {
  model: "iPhone Pro Max",
  color: "Gold",
  stockage: "" + " " + "Gb",
};

var imagePop = document.querySelector(".iphone-echange");
var models = document.querySelectorAll(".choice-type-phone");
var colors = document.querySelectorAll(".link-color-product");
var image = document.querySelector("#phone_default");
var imageChange = document.querySelector("#iphone-var-color");
var selectedColor = null,
  selectedModel = null;
selectedStockage = null;
const e = document.getElementById("box-color");
const network = document.getElementById("network");
const memories = document.getElementById("memories");
var btnOpacity = document.querySelectorAll(".box-opacity");
var compagnies = document.querySelectorAll(".box-networks");
var capacities = document.querySelectorAll(".btn-capacity");
var choice = document.getElementById("choice");
var phoneFinal = document.getElementById("phone-final");
var stockFinal = document.getElementById("stockage-final");
var colorFinal = document.getElementById("color-final");
var nameFinal = document.querySelectorAll(".name-pro");

// colors.forEach((color) => {
//   selectedColor.addEventListener("cliclk", (event) => {
//     selectedColor = color.id;
//     e.style.setProperty("opacity", "1", "important");
//   });
// });

models.forEach((model) => {
  model.addEventListener("click", (event) => {
    selectedModel = model.id;

    e.style.setProperty("opacity", "1", "important");
    // e.style.opacity = "1 !important";
    if (selectedModel === "phone_pro_max") {
      console.log("iPhone 12 Pro Max");
      if (selectedColor) {
        image.src = document.querySelector(
          "#" + selectedColor
        ).dataset.imagesrc;
      } else image.src = "./Image/all_iphone-12-pro-max.jpeg";
    } else {
      if (selectedColor) {
        image.src = document.querySelector(
          "#" + selectedColor
        ).dataset.proimagesrc;
      } else image.src = "./Image/all_iphone_12_pro.jpeg";
      console.log("iPhone 12 Pro");
    }
    imagePop.src = image.src;
    phoneFinal.innerText = model.querySelector("h6").innerText;
    product.model = selectedModel;
    console.log(product);
  });
});

// ================== Les couleurs du produits ==================>

// Pour chaque couleur choisi (Cliqué)
// On vérifie le modèle qui est sélectionné lorsqu'elle porte la classe active
// si le modèle sélectionné correspond à l'id du bouton d'une des deux catégories
// afficher l'image du data-source de l'iPhone 12 Pro Max corespondant à la catégories sélectioné sinon
// Afficher l'image du data-source de l'iPhone 12 Pro

colors.forEach(function (color) {
  color.addEventListener("click", function (event) {
    changeOpacity("network");
    selectedColor = color.id;
    if (selectedModel === null) {
      selectedModel = "phone_pro";
    } else if (selectedModel === "phone_pro_max") {
      image.src = color.dataset.imagesrc;
    } else {
      image.src = color.dataset.proimagesrc;
    }
    imagePop.src = image.src;
    colorFinal.innerText = selectedColor;
    product.color = selectedColor;
    console.log(product);
  });
});
// ================== Accordéon ==================>

// Pour chaque en-tetes d'accordéon
// Lorsqu'elle porte la classe active
// Si elle porte le paramètre comporte la classe active
// Déployer la hauteur au maximum

const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});

// ================== Box Networks ==================>

compagnies.forEach(function (compagny) {
  compagny.addEventListener("click", function (event) {
    changeOpacity("memories");
  });
});

// ================== Box Memories ==================>

capacities.forEach(function (capacity) {
  selectedStockage = capacity.id;
  capacity.addEventListener("click", function (event) {
    changeOpacity("choice");
    selectedStockage = capacity.id;
    product.stockage = selectedStockage;
    stockFinal.innerText = selectedStockage + "GB⁴";
    console.log(product);
  });
});

// Boutons de condition pour l'opacité des div
// Si un bouton
// var e = document.getElementById("box-color");
// document.getElementById("phone_pro").onclick = function () {
// alert("button was clicked " + " times");
// e.style.opacity = "1";
// };

var changeOpacity = function (elementID) {
  var element = document.getElementById(elementID);
  element.style.opacity = "1";
};

// ================== Pop up ==================>
var popup = document.getElementById("popup");
function togglePopup() {
  popup.classList.toggle("active");
}
