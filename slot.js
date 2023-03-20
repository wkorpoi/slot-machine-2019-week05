// Build a simple slot machine with minimum 5 items per reel and 3 reels - user should be able to bet min or max and have their total update

let bankAmount = 5000
const total = document.querySelector('#total')
total.innerText = bankAmount 
document.querySelector('#betNow').addEventListener('click', makeMoney)
let myPics = ['<img src="img/birkin.png" width="150px" height="150px">','<img src="img/chanel.png" width="200px" height="200px">', '<img src="img/giv.png" width="150px" height="150px">', '<img src="img/lv.png" width="250px" height="250px">', '<img src="img/ysl.png" width="150px" height="150px">']

let rowOne = document.querySelector('#picOne')
let rowTwo = document.querySelector('#picTwo')
let rowThree = document.querySelector('#picThree')
let message = document.querySelector('#result')

function makeMoney(){
    if(bankAmount <= 0){
        return alert('You are Broke Now! Seek Help!')
}
let betAmount = Number(document.querySelector('#betPicker').value)

let reelOne = Math.floor(Math.random() * 5)
let reelTwo = Math.floor(Math.random() * 5)
let reelThree = Math.floor(Math.random() * 5)

rowOne.innerHTML = myPics[reelOne]
rowTwo.innerHTML = myPics [reelTwo]
rowThree.innerHTML = myPics [reelThree]

if(reelOne === reelTwo && reelOne === reelThree) {
    bankAmount = bankAmount + betAmount
    total.innerText = bankAmount
    message.innerText = 'YAY! You won!! '
}

else{
    bankAmount = bankAmount - betAmount
    total.innerText = bankAmount
    message.innerText = 'Sorry loser, try again!'
}
}

