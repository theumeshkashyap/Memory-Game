const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ];

  cardArray.sort(()=> 0.5 - Math.random())

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector('#result')
let chosenCards = [];
let chosenCardsIDS = [];
let cardsWon = [];

function memoryBoard(){
    for (let i = 0; i < cardArray.length; i++) {
       const card = document.createElement("img");
       card.setAttribute('src','images/blank.png');
       card.setAttribute('data-id', i);
       card.addEventListener('click',flippingCards)
       gridDisplay.append(card)
       
    }
}

memoryBoard();

function checkMatch() {
 const cards = document.querySelectorAll('img');
 const optionOneId = chosenCardsIDS[0]
 const optionTwoId = chosenCardsIDS[1]

console.log(cards)
console.log('check for match')
if(optionOneId == optionTwoId){
    cards[optionOneId].setAttribute('src','images/blank.png');
    cards[optionTwoId].setAttribute('src','images/blank.png');
    alert("you have clicked on same image")
}
    if(chosenCards[0] == chosenCards[1]){
            alert("you found a match");
           
            cards[optionOneId].setAttribute('src','images/white.png');
            cards[optionTwoId].setAttribute('src','images/white.png');
            cards[optionOneId].removeEventListener('click', flippingCards)
            cards[optionTwoId].removeEventListener('click', flippingCards);
            
            cardsWon.push(chosenCards)
    }else{
        cards[optionOneId].setAttribute('src','images/blank.png');
        cards[optionTwoId].setAttribute('src','images/blank.png');
        alert("sorry try again")
    }
    resultDisplay.innerHTML = cardsWon.length;
    chosenCards = [];
    chosenCardsIDS = []

    if(cardsWon.length == cardArray.length/2){
        resultDisplay.innerHTML = "you found them all"
    }
}

function flippingCards(){
    let clickedCardId = this.getAttribute('data-id');
    chosenCards.push(cardArray[clickedCardId].name)
    chosenCardsIDS.push(clickedCardId)
    console.log(chosenCards);
    console.log(chosenCardsIDS);
    this.setAttribute('src',cardArray[clickedCardId].img);
    if(chosenCards.length == 2){
        setTimeout(checkMatch, 500)
    }
}



