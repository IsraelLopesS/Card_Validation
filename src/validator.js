const validator = {

  isValid: function (card){
    let Ncard = card.split("").reverse();
    let rescard = 0;

    for (let i =0; i<Ncard.length; i++){
      let num1Card = parseInt(Ncard[i])

      if(i%2 !== 0 && num1Card >= 5){
        rescard = rescard + (num1Card*2)-9;
      }
      else if(i%2 !== 0 && num1Card < 5){
        rescard = rescard + (num1Card*2);
      }
      else{rescard = rescard + num1Card;}
  }
  if (rescard%10 === 0){
    return true;
  }
  else{
    return false;
  } 
},

block: function (card1){
  let x = card1.split(''); 
  for (let i=0; i< x.length - 4; i++){
    x[i] = "#";
  }
  let maskedCard = x.join('');
  return maskedCard
},

bandCard: function (bandNum){
  var bandNum = bandNum.replace(/[^0-9]+/g, '');

  var cards = {
      visa     : /^4[0-9]{12}(?:[0-9]{3})/,
      mastercard : /^5[1-5][0-9]{14}/,
      diners    : /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
      amex      : /^3[47][0-9]{13}/,
      discover  : /^6(?:011|5[0-9]{2})[0-9]{12}/,
      hipercard  : /^(606282\d{10}(\d{3})?)|(3841\d{15})/,
      elo        : /^((((636368)|(438935)|(504175)|(451416)|(636297))\d{0,10})|((5067)|(4576)|(4011))\d{0,12})/,
      jcb        : /^(?:2131|1800|35\d{3})\d{11}/,
      aura      : /^(5078\d{2})(\d{2})(\d{11})$/
  }

  for (var i in cards) {
      if(cards[i].test(bandNum)) {
          return i;
      }
  }

  return false;
}

}

export default validator;
