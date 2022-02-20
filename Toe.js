"use strict";
// jquery
// let sign = 'x'
// $('input[type="checkbox"]').click(function(){
// 	if(!$(this).hasClass("active")){
// 		$(this).addClass('active');
// 		sign = sign == 'x' ? 'o' : 'x'
// 		$(this).parent().find('.sign').attr('data-sign', sign);
// 	}
// })
//js
let player = "o";
let gameover = false;
let spaces = [null, null, null, null, null, null, null, null];
let sign = 'x';
let btn = document.querySelector('#btn');
let msg = document.querySelector('#go');
document.getElementById("btn").addEventListener("click", function () {
    console.log("Hello World");
    spaces = [null, null, null, null, null, null, null, null];
    console.log(spaces);
    Array.from(document.querySelectorAll('input[type="checkbox"]')).map(b => {
        b.checked = false;
        gameover = false;
        b.classList.remove('active');
        b.parentNode.querySelector('.sign').setAttribute('data-sign', "");
    });
});
Array.from(document.querySelectorAll('input[type="checkbox"]')).map(el => {
    el.addEventListener('click', function () {
        if (gameover == false) {
            addmove(this.id);
            checkwin();
            Swapturns(el);
        }
    });
});
function Swapturns(el) {
    if (!el.classList.toString().includes('active')) {
        el.classList.add('active');
        player = sign;
        sign = sign == 'x' ? 'o' : 'x';
        el.parentNode.querySelector('.sign').setAttribute('data-sign', sign);
    }
}
function addmove(id) {
    if (!spaces[id]) {
        spaces[id] = player;
        console.log(spaces);
    }
}
function checkwin() {
    if ((spaces[0] == "x" && spaces[1] == "x" && spaces[2] == "x") || (spaces[3] == "x" && spaces[4] == "x" && spaces[5] == "x") || (spaces[6] == "x" && spaces[7] == "x" && spaces[8] == "x") || (spaces[0] == "x" && spaces[4] == "x" && spaces[8] == "x") || (spaces[0] == "x" && spaces[3] == "x" && spaces[6] == "x") || (spaces[1] == "x" && spaces[4] == "x" && spaces[7] == "x") || (spaces[2] == "x" && spaces[5] == "x" && spaces[8] == "x") || (spaces[2] == "x" && spaces[4] == "x" && spaces[6] == "x")) {
        alert(" x wins");
        gameover = true; // game ends when win happens
    }
    else if ((spaces[0] == "o" && spaces[1] == "o" && spaces[2] == "o") || (spaces[3] == "o" && spaces[4] == "o" && spaces[5] == "o") || (spaces[6] == "o" && spaces[7] == "o" && spaces[8] == "o") || (spaces[0] == "o" && spaces[4] == "o" && spaces[8] == "o") || (spaces[0] == "o" && spaces[3] == "o" && spaces[6] == "o") || (spaces[1] == "o" && spaces[4] == "o" && spaces[7] == "o") || (spaces[2] == "o" && spaces[5] == "o" && spaces[8] == "o") || (spaces[2] == "o" && spaces[4] == "o" && spaces[6] == "o")) {
        alert(" o wins");
        gameover = true; // game ends when win happens
    }
}
// css variable
// $('input[type="checkbox"]').click(function(){
// 	$("#temp").remove();
// 	let style = document.createElement('style');
// 	style.id = 'temp';
// 	style.innerHTML = "SDSASDASADASAS";
// 	if($(this).hasClass('active')){
// 		style.innerHTML = ':root{ --sign: "x"}';
// 		$(this).addClass('active');
// 	}
// 	if($(this).hasClass('active')){
// 		style.innerHTML = ':root{ --sign: "o"}';
// 	}
// 	document.body.append(style);
// })
