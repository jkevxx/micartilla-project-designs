
// Agrega list o active list
let list = document.querySelectorAll('.list');
for (let i = 0; i < list.length; i++) {
  list[i].onclick = function () {
    let j = 0;
    while (j < list.length) {
      list[j++].className = 'list';
    }
    list[i].className = 'list active';
  }
}


//Toggle
let menuToggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navbar');
let main = document.querySelector('.main');
menuToggle.onclick = function () {
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');
  main.classList.toggle('active');

}


function myFunction() {
  let dropdownContent = document.querySelector('.dropdown-content');
  dropdownContent.classList.toggle('dropdown-toggle');
}


function notification() {
  let notificationContent = document.querySelector('.notification-content');
  notificationContent.classList.toggle('notification-toggle');

}

function option() {
  let optionContent = document.querySelector('.option-content');
  optionContent.classList.toggle('option-toggle');
}