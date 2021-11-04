function findPrime(...numbers) { // rest operatörü // not rest parametresi daima en son parametre olacak 
    
    for (let i = 0; i < numbers.length; i++) {
        let counter = 0;  
        for (let j = 1; j <= numbers[i]; j++) {
            if(numbers[i]%j==0){
                counter=counter+1;
            }
        }
        if(counter==2){
            console.log(numbers[i]+ " Asal Sayıdır")
        }
    }
    
}

function friendlyNumber(numberOne,numberTwo){
    let numberOneTotal = 0;
    let numberTwoTotal = 0;
    for (let i = 1; i < numberOne; i++) {
        if(numberOne%i==0){
            numberOneTotal = numberOneTotal+i;
        }    
    }
    if(numberOneTotal==numberTwo){
       for (let i = 1; i < numberTwo; i++) {
        if(numberTwo%i==0){
            numberTwoTotal = numberTwoTotal+i;
        } 
           
       }
       if(numberTwoTotal==numberOne){
           console.log("Arkadaş Sayıdır")
       } 
    }
    else{
        console.log("Arkadaş Sayı değildir")
    }
}

function perfectNumbers() {
    var numbers = [];
    for (let i = 1; i <1000; i++) {
        let total = 0; 
        for (let j = 1; j <i; j++) {
            if(i%j==0){
                total = total+j;
            } 
        }
        if(total==i){
            numbers.push(i);
        }  
    }
    console.log(numbers)
}

function primeNumbers() {
    var numbers = [];
    for (let i = 1; i <1000; i++) {
        let counter = 0; 
        for (let j = 1; j <= i; j++) {
            if(i%j==0){
                counter=counter+1;
            }
        }
        if(counter==2){
            numbers.push(i);
        }  
    }
    console.log(numbers)    
    
}
 
findPrime(2,13)
friendlyNumber(220,284)
perfectNumbers()
primeNumbers()


