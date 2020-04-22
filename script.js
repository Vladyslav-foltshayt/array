let mas = [88];

for(let i = 0; i < 10; i++){
    
    mas[i] = getRandomInt(0, 100);
}


for(let a in mas){
        console.log(mas[a]);
}




function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  


