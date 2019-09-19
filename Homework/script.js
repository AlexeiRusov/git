const jaketPrice = 50;
const byciclePrice = 3000;
const socksPrice =  1;
const purchaseAmount = jaketPrice + byciclePrice + socksPrice;
const coefficientPoints =  parseInt ((purchaseAmount) / 1000); 
const points = coefficientPoints * 100;
const resultStr = 'Вам начисленно ' + points + ' бонусов.'
console.log ('Ваша покупка составила ' + purchaseAmount + ' рублей');
console.log(resultStr);
console.log ('Клубная программа Спормастер, Один бонус = один рубль, Сумма каждой покупки заносится на вашу карту.')