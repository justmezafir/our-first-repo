var modal = document.getElementById("loginModal");
var btn = document.getElementById("signInBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() { modal.style.display = "block"; }
span.onclick = function() { modal.style.display = "none"; }
window.onclick = function(event) { if (event.target == modal) { modal.style.display = "none"; } }

var modal = document.getElementById("loginModal");
var btn = document.getElementById("signInBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() { modal.style.display = "block"; }
span.onclick = function() { modal.style.display = "none"; }
window.onclick = function(event) { if (event.target == modal) { modal.style.display = "none"; } }


// Tabs switch karne ke liye
function openTab(tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) { tabcontent[i].style.display = "none"; }
  tablinks = document.getElementsByClassName("tab-btn");
  for (i = 0; i < tablinks.length; i++) { tablinks[i].className = tablinks[i].className.replace(" active", ""); }
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.className += " active";
}

// Form validation
document.getElementById("loginForm").onsubmit = function(e){
  e.preventDefault();
  alert("Login Successful!");
  modal.style.display = "none";
}

document.getElementById("signupForm").onsubmit = function(e){
  e.preventDefault();
  alert("Account Created Successfully!");
  modal.style.display = "none";
}


// Login Modal
var modal = document.getElementById("loginModal");
var btn = document.getElementById("signInBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() { modal.style.display = "block"; }
span.onclick = function() { modal.style.display = "none"; }

// Tab switch
function openTab(tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) { tabcontent[i].style.display = "none"; }
  tablinks = document.getElementsByClassName("tab-btn");
  for (i = 0; i < tablinks.length; i++) { tablinks[i].className = tablinks[i].className.replace(" active", ""); }
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.className += " active";
}

// Property Modal
function openPropertyModal(title, price, img) {
  document.getElementById("propertyModal").style.display = "block";
  document.getElementById("propTitle").innerText = title;
  document.getElementById("propPrice").innerText = price;
  document.getElementById("propImg").src = img;
}

function closePropertyModal() {
  document.getElementById("propertyModal").style.display = "none";
}

// Cards pe click lagao
document.querySelectorAll(".property-card").forEach(card => {
  card.onclick = function() {
    let title = this.querySelector("h3").innerText;
    let price = this.querySelector(".price").innerText;
    let img = this.querySelector("img").src;
    openPropertyModal(title, price, img);
  }
});

// Bahar click karne se band ho jaye
window.onclick = function(event) {
  if (event.target == modal) { modal.style.display = "none"; }
  if (event.target == document.getElementById("propertyModal")) { 
    document.getElementById("propertyModal").style.display = "none"; 
  }
}


// Contact Agent WhatsApp
document.getElementById("contactBtn").onclick = function() {
  let title = document.getElementById("propTitle").innerText;
  let price = document.getElementById("propPrice").innerText;
  let phone = "923212649889"; // <-- Yahan apna WhatsApp number dalo 92 se start
  
  let message = `Assalamualaikum! I am interested in ${title} for ${price}. Can we talk?`;
  let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  
  window.open(url, '_blank');
}


const searchInput = document.getElementById('searchInput');
const priceFilter = document.getElementById('priceFilter');
const typeFilter = document.getElementById('typeFilter');
const clearBtn = document.getElementById('clearSearch');
const cards = document.querySelectorAll('.property-card'); // tere card ki class

function filterCards() {
  const searchText = searchInput.value.toLowerCase();
  const priceVal = priceFilter.value;
  const typeVal = typeFilter.value;
  
  cards.forEach(card => {
    const location = card.querySelector('.location').innerText.toLowerCase();
    const price = parseInt(card.dataset.price); // card me data-price="500"
    const type = card.dataset.type; // card me data-type="house"
    
    let show = true;
    
    if(searchText && !location.includes(searchText)) show = false;
    if(typeVal && type !== typeVal) show = false;
    if(priceVal === 'low' && price > 400) show = false;
    if(priceVal === 'mid' && (price < 500 || price > 800)) show = false;
    if(priceVal === 'high' && price < 800) show = false;
    
    card.style.display = show ? 'block' : 'none';
  });
}

searchInput.addEventListener('keyup', filterCards);
priceFilter.addEventListener('change', filterCards);
typeFilter.addEventListener('change', filterCards);
clearBtn.addEventListener('click', () => {
  searchInput.value = '';
  priceFilter.value = '';
  typeFilter.value = '';
  filterCards();
});


