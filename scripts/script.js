'use strict';

function swapCards() {
    const parent1 = node1.parentNode //div class="clients-gallery"
    const parent2 = node2.parentNode //div class="clients-gallery__side" R
    const parent3 = node3.parentNode //div class="clients-gallery__side" L
    const nextNode1 = node1.nextSibling //div class="clients-gallery__side" R
    const nextNode2 = node2.nextSibling  //button-right
    const nextNode3 = node3.nextSibling  //button-left

    parent1.insertBefore(node3, nextNode1) //вставляет левую карточку на место главной 
    parent2.insertBefore(node1, nextNode2) //вставляет центральную карточку перед кнопкой ->
    parent3.insertBefore(node2, nextNode3) //вставляет правую карточку перед кнопкой <-
}

const node1 = document.querySelector('#clients-card-1');
const node2 = document.querySelector('#clients-card-2');
const node3 = document.querySelector('#clients-card-3');

const clientsBtnRight = document.getElementById('clients-btn-right');
const clientsBtnLeft = document.getElementById('clients-btn-left');

clientsBtnLeft.addEventListener("click", () => {
    swapCards();
    //     sideCard.firstChild.childNodes[1].classList.add('clients-gallery__main-textbox_hidden')
    // }
});

function swapCardsBack() {
    const parent1 = node1.parentNode //div class="clients-gallery"
    const parent2 = node2.parentNode //div class="clients-gallery__side" R
    const parent3 = node3.parentNode //div class="clients-gallery__side" L

    const nextNode1 = node1.nextSibling //div class="clients-gallery__side" R
    const nextNode2 = node2.nextSibling  //button-right
    const nextNode3 = node3.nextSibling  

    parent1.insertBefore(node2, nextNode1) //вставляет правую карточку на место главной 
    parent2.insertBefore(node3, nextNode2) //вставляет левую карточку перед кнопкой ->
    parent3.insertBefore(node1, nextNode3) //вставляет центральную карточку перед кнопкой <-
}

clientsBtnRight.addEventListener("click", () => {
    swapCardsBack();
});